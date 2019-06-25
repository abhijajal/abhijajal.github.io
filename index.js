$(function() {
  var firebaseDb = firebase.database();
  
  firebaseDb.ref('/personalInfo').once('value').then(function(snapshot) {
  $('#name').text(snapshot.val().name);
  $('#tagLine').text(snapshot.val().tagLine);
  $('#aboutMe').text(snapshot.val().aboutMe);

  // ...
});

  var skillsRef = firebaseDb.ref('/skills');
skillsRef.on('child_added', function(data) {
	$('#skillList').append("<li>● "+data.val()+"</li>")
});


firebaseDb.ref('/resumeUrl').once('value').then(function(snapshot) {
	$('#resumeUrl'). attr("href", snapshot.val()); 
});
 


firebaseDb.ref('/contact').once('value').then(function(snapshot) {
	$('#address').append(snapshot.val().address)
	$('#phone').append(snapshot.val().phone)
	$('#email').append(snapshot.val().email)
	$('#facebook').attr("href", snapshot.val().facebook);
	$('#linkedIn').attr("href", snapshot.val().linkedIn);
	$('#github').attr("href", snapshot.val().github);
  $('#formAction').attr("action", snapshot.val().formAction);
});
 


 var projectsRef = firebaseDb.ref('/projects');
projectsRef.on('child_added', function(data) {
$("#projects").append(

  '<div class="w3-card-4" style="width:100%;margin-bottom:25px">'
  +'<header class="w3-container w3-light-grey">'
  +'    <h3>'+data.val().name+'&nbsp;&nbsp;<a style="margin-bottom" href="'+data.val().github+'" target="_blank"><i class="fa fa-github w3-xxxlarge w3-text-black w3-hover-opacity w3-margin-right"></i></a></h3>' 
  +'  </header>'
  +'  <div class="w3-container" style="background: gray">'
  +'    <hr>'
  +'    <img src="'+data.val().logo+'" alt="Avatar" class="w3-left w3-margin-right" style="width:100px">'
  +'    <p style="color: white">'+data.val().desc+'</p><br>'
  +'  </div>'
  +'<form action="projectDetails.html" method="get">'
  +'<input type="text" style="display:none" name="projectId" value="'+data.key+'">'
  +'<input type="submit" class="w3-button w3-block w3-dark-grey" value="See More">'
  +'</form>'
  +'</div>');

});

var employmentRef = firebaseDb.ref('/employment');
employmentRef.on('child_added', function(data) {

  $("#employment").append(
  '<div class="w3-card-4" style="width:100%;margin-bottom:25px">'
  +'<header class="w3-container w3-light-grey">'
  +'    <h3>'+data.val().title+'&nbsp;&nbsp;@&nbsp;<a style="margin-bottom" href="'+data.val().url+'" target="_blank">'+data.val().name+'</a></h3>' 
  +'  </header>'
  +'  <div class="w3-container" style="background: gray">'
  +'    <hr>'
  +'    <p style="color: white">'+data.val().duties+'</p><br>'
  +'  </div>'
  +'    <div class="w3-block w3-dark-grey" style="text-align:center">'+data.val().location+'&nbsp;&nbsp;|&nbsp;&nbsp;'+data.val().duration+'</div>'  
  +'</div>');

});

var additionalExpRef = firebaseDb.ref('/additionalExp');
additionalExpRef.on('child_added', function(data) {
  $("#additionalExp").append(

  '<div class="w3-card-4" style="width:100%;margin-bottom:25px">'
  +'<header class="w3-container w3-light-grey">'
  +'    <h3>'+data.val().title+'&nbsp;&nbsp;@&nbsp;'+data.val().name+'</h3>' 
  +'  </header>'
  +'  <div class="w3-container" style="background: gray">'
  +'    <hr>'
  +'    <p style="color: white">'+data.val().duties+'</p><br>'
  +'  </div>'
  +'    <div class="w3-block w3-dark-grey" style="text-align:center">'+data.val().duration+'</div>'  
  +'</div>');

});


  
});
