// test syntax
// $( "#joinUsButton" ).click(function() {
// 	$("#joinUsButton").css("background-color", "yellow");
// 	console.log("hi")
// });


$("#emailButton").click(function() {
 console.log("hi")
 var link = "mailto:info@3olabs.io"
             + "&subject=" + encodeURIComponent("3.O Labs Inquiry")
    
    window.location.href = link;

 });

