var firebaseConfig = {
    apiKey: "AIzaSyCBo09T4m7BYpkAJ7EI0J_LGq63gjdCChU",
    authDomain: "lamwebphim.firebaseapp.com",
    databaseURL: "https://lamwebphim.firebaseio.com",
    projectId: "lamwebphim",
    storageBucket: "lamwebphim.appspot.com",
    messagingSenderId: "672179536911",
    appId: "1:672179536911:web:b14a5ce7d46a094788cf7a",
    measurementId: "G-4C27CHDJJV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const moviesdata = firebase.database().ref("filmdata")

  const onSetdata = moviesdata.push();

  function datasubmit()   {
      let data = {}
      data.title = document.getElementById("c1").value
      data.description = document.getElementById("c2").value
      data.image = document.getElementById("c5").value
      data.director = document.getElementById("c6").value
      onSetdata.set(data)

  }
