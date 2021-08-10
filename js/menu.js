var switche = false;
function menu(state) {
    if (state=="hide") {
    	switche = false;
      $('#menu').addClass('hide');
      navicons(false);
    }
    if (state=="show") {
    	switche = true;
      $('#menu').removeClass('hide');
      $('#menu').addClass('hide-on-med-and-up');
    }
  }

  function navicons(icon) {
  	if (icon) {
  	$('#menu1').addClass('hide');
  	$('#menu2').removeClass('hide');
  	}else{
  	$('#menu2').addClass('hide');
  	$('#menu1').removeClass('hide');
  	}
  }

function toggle() {
	if (switche) {
		menu('hide');
		navicons(false);
	}else{
		menu('show');
		navicons(true);
	}
}
