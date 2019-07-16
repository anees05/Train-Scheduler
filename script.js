var firebaseConfig = {
    apiKey: "AIzaSyA6Nct5KirJY_353jJgj5jMeOftxrVNVfw",
    authDomain: "fb-demo-8143d.firebaseapp.com",
    databaseURL: "https://fb-demo-8143d.firebaseio.com",
    projectId: "fb-demo-8143d",
    storageBucket: "",
    messagingSenderId: "263940671261",
    appId: "1:263940671261:web:0b6e45eb91b34a9a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var trainData = firebase.database();

  $("#addTrainBtn").on("click", function(){
      var trainName = $("#trainNameInput").val().trim()
      var destination = $("#destinationInput").val().trim()
      var firstTrain = $("#firstTrainInput").val().trim()
      var frequency = $("#frequencyInput").val().trim()

      var newTrain = {
          name: trainName,
          destinationa: destination,
          firstTrain: firstTrain,
          frequency: frequency
      }

      alert("Train was Added")

      console.log(trainName)
      console.log(destination)
      console.log(firstTrain)
      console.log(frequency)
  });