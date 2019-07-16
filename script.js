var firebaseConfig = {
    apiKey: "AIzaSyASGSvmgLbH2Se0WqAfvV_XquBunF85bV0",
    authDomain: "fb-class-32832.firebaseapp.com",
    databaseURL: "https://fb-class-32832.firebaseio.com",
    projectId: "fb-class-32832",
    storageBucket: "fb-class-32832.appspot.com",
    messagingSenderId: "63030322361",
    appId: "1:63030322361:web:c1394e44c8970155"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var trainData = firebase.database();

  $("#addTrainBtn").on("click", function(){
      event.preventDefault()
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

      trainData.ref().push(newTrain);

      alert("Train was Added")

      console.log(trainName)
      console.log(destination)
      console.log(firstTrain)
      console.log(frequency)
  });

  trainData.ref().on("child_added", function(snapshot){
      var name = snapshot.val().name;
      var destination = snapshot.val().destination;
      var firstTrain = snapshot.val().firstTrain;
      var frequency = snapshot.val().frequency;
  })