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

$("#addTrainBtn").on("click", function () {
    event.preventDefault()
    var trainName = $("#trainNameInput").val().trim()
    var destination = $("#destinationInput").val().trim()
    var firstTrain = moment($("#firstTrainInput").val().trim(), "HH:mm").subtract(10,"years").format("X");
    var frequency = $("#frequencyInput").val().trim()

    var newTrain = {
        name: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    }

    trainData.ref().push(newTrain);

    alert("Train was Added")
 
    // console.log(trainName);
    // console.log(destination);
    // console.log(firstTrain);
    // console.log(frequency);

    return false;
});

trainData.ref().on("child_added", function (snapshot) {
   var name = snapshot.val().name;
   var destination = snapshot.val().destination;
   var frequency = snapshot.val().frequency;
   var firstTrain = snapshot.val().firstTrain;

   var remainder = moment().diff(moment.unix(firstTrain),"minutes")%frequency;
   var minutes = frequency - remainder;
   var arrival = moment().add(minutes,"m").format("hh:mm A");

   console.log(remainder);
   console.log(minutes);
   console.log(arrival);

$("#trainTable > tbody").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + arrival + "</td><td>" + minutes + "</td><tr>");
});

