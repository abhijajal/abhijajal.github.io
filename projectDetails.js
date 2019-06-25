$(function() {
  var firebaseDb = firebase.database();
  $.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
}

var projectId=$.urlParam('projectId'); 
var projectsRef = firebaseDb.ref('/projects/'+projectId);
var type;

projectsRef.once('value').then(function(snapshot) {
  $('#name').text(snapshot.val().name);
  $('#git').html('<h1><a style="margin-bottom" id="github" href="'+snapshot.val().github+'" target="_blank"><i class="fa fa-github w3-xxxlarge w3-text-white w3-hover-opacity w3-margin-right"></i></a></h1>')
  $('#desc').text(snapshot.val().desc);
  type=snapshot.val().type;
  $('#logo').attr("src", snapshot.val().logo);

  var snapRef = firebaseDb.ref('/projects/'+projectId+'/snaps');
snapRef.on('child_added', function(data) {
	if(type=="mob")
	{
		$('#web').append('<img src="'+data.val()+'" style="width: 275px; padding:10px;">')
		$('#web').css( { marginLeft : "175px" } )

	}
	else
	{
		$('#web').append('<img src="'+data.val()+'" style="width: 100%; padding:10px;">')
	}
	$('#mob').append('<img src="'+data.val()+'" style="width: 100%; padding:10px;">')
		
});

});

  
 


});

