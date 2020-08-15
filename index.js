var alldata = [];

let dataFilter = [];

var firebaseConfig = {
  apiKey: "AIzaSyCBo09T4m7BYpkAJ7EI0J_LGq63gjdCChU",
  authDomain: "lamwebphim.firebaseapp.com",
  databaseURL: "https://lamwebphim.firebaseio.com",
  projectId: "lamwebphim",
  storageBucket: "lamwebphim.appspot.com",
  messagingSenderId: "672179536911",
  appId: "1:672179536911:web:b14a5ce7d46a094788cf7a",
  measurementId: "G-4C27CHDJJV",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const moviesdata = firebase.database().ref("filmdata");

async function onLoadData() {
  await moviesdata.on("value", function (snapshot) {
    alldata = Object.values(snapshot.val());
  });
}

window.onload = onLoadData();

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function searchfilm() {
  let search = document.getElementById("search").value;
  dataFilter = alldata.find((item) => item.title.includes(search));
}
