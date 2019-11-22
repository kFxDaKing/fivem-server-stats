
$(function() {
	var div = $("#div");
	
	window.addEventListener('message', function(event) {
		var item = event.data;
    
	});
  
  // Pressing the ESC key with the menu open closes it 
  document.onkeyup = function (data) {
      if (data.which == 27) {
          if (admin.is( ":visible" )) {AdminExit();}
          if (action.is( ":visible" )) {AdminExit();}
          if (factions.is( ":visible" )) {AdminExit();}
      }
      if (data.which == 13) {
          if (action.is(":visible")) {SubmitAction();}
      }
  };
	
});

