// var config = {
//     apiKey: "AIzaSyA9YPv_YBkL8U1NQ0hsPSpdyRu292hWnYM",
//     authDomain: "portfolio-contact-me.firebaseapp.com",
//     databaseURL: "https://portfolio-contact-me.firebaseio.com",
//     projectId: "portfolio-contact-me",
//     storageBucket: "portfolio-contact-me.appspot.com",
//     messagingSenderId: "656641766020"
//   };
//   firebase.initializeApp(config);  
  
  
//   // Create a variable to reference the database.
//   var database = firebase.database();

//   // Initial Values
//   var fullName = "";
//   var email = "";
//   var company = "";
//   var message = "";

//   // Capture Button Click
//   function newUser() {
// document.getElementById('form').submit();
//         };

//     // Grabbed values from text-boxes
//     fullName = $("#fullName-input").val().trim();
//     email = $("#email-input").val().trim();
//     company = $("#company-input").val().trim();
//    message = $("#message-input").val().trim();

//     // Code for "Setting values in the database"
//     database.ref().push({
//       fullName: fullName,
//       email: email,
//       company: company,
//       message: message,
//       dateAdded: firebase.database.ServerValue.TIMESTAMP
//     });


//   // Firebase watcher + initial loader HINT: .on("value")
//   database.ref().on("child_added", function(snapshot) {

//     const sv = snapshot.val();
//     // Log everything that's coming out of snapshot
//     console.log(sv.fullName);
//     console.log(sv.email);
//     console.log(sv.company);
//     console.log(sv.message);

//     // // Change the HTML to reflect
//     // $("#fullName-display").text(snapshot.val().fullName);
//     // $("#email-display").text(snapshot.val().email);
//     // $("#company-display").text(snapshot.val().company);
//     // $("#message-display").text(snapshot.val().message);

//     // Handle the errors
//   }, function(errorObject) {
//     console.log("Errors handled: " + errorObject.code);
//   });

