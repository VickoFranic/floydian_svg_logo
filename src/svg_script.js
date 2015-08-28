
	jQuery(document).ready(function() {

		jQuery('.jumbotron').fadeIn(2000, function() {
			
				setTimeout(function() {
				jQuery('.jumbotron').fadeOut(2000, function() {

					jQuery('#svg_wrapper').show();
					jQuery('#layer1-3').fadeIn(6000);
				});
			}, 2000);
		});
	});

