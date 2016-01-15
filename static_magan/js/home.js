
 var prices_counter = 0;
 var contact_counter = 0;
 var about_me_counter =0;
 

(function($){
  var prices_order = [1,7, 2, 3, 6, 5];
  var contact_order = [10,7,11,6,12,5];
  var about_me_order = [10,2,7,5,12,3,1,11,6];


  function show_div(div){
      switch(div){
          case '.prices.overlay':
            if(prices_counter == 6) {
              $(div).fadeIn(800);
            } 
            break;
          case '.contact_div.overlay':
            if(contact_counter == 6) {
              $(div).fadeIn(800);
	      $('input[name=name]').focus();
            } 
            break;
          case '.about_me.overlay':
            if(about_me_counter == 9) {
              $(div).fadeIn(800);
            } 
            break;
      }
  }

  function hide_div(div){
    
  }

  function show_prices_photos(){
    var photos = jQuery('.image');
    
    for(var i in prices_order){
      show_photo($(photos[prices_order[i]]), i, '.prices.overlay');
    }
  }

  function show_contact_photos(){
    var photos = $('.image');

    for(var i in contact_order){
      show_photo($(photos[contact_order[i]]), i, '.contact_div.overlay');
    }
  }

  function show_about_me_photos(){
    var photos = $('.image');

    for(var i in about_me_order){
      show_photo($(photos[about_me_order[i]]), i, '.about_me.overlay');
    }
  }

  function show_photo(photo, i, div){
      photo.find('img, h2').delay(250 * i).fadeIn(300, function() { 
        switch(div){
          case '.prices.overlay':
            prices_counter--;
            break;
          case '.contact_div.overlay':
            contact_counter--;
            break;
          case '.about_me.overlay':
            about_me_counter--;
            break;
        }
      });
  }

  function hide_photo(photo, i, div){
      photo.find('img, h2').delay(250 * i).fadeOut(300, function(){  
	switch(div){
	  case '.prices.overlay':
            prices_counter++;
	    break;
	  case '.contact_div.overlay':
            contact_counter++;
            break;
	  case '.about_me.overlay':
	    about_me_counter++;
 	    break;
	}	
        show_div(div); 
      } );
  }

  function hide_prices_photos(){
    var photos = jQuery('.image');
    
    for(var i in prices_order){
      hide_photo($(photos[prices_order[i]]), i, '.prices.overlay');
    }


    return true;

  }

  function hide_contact_photos(){
    var photos = $('.image');

    for(var i in contact_order){
      hide_photo($(photos[contact_order[i]]), i, '.contact_div.overlay');
    }

  }

  function hide_about_me_photos(){
    var photos = $('.image');

    for(var i in about_me_order){
      hide_photo($(photos[about_me_order[i]]), i, '.about_me.overlay');
    }
  }

  function set_up_clicks(){
    $('.image.my_prices').css('cursor', 'pointer').bind('click', function(){
      _gaq.push(['_trackEvent', 'Information', 'View', 'Prices']);
      unbind_clicks();
      hide_prices_photos();
    });

    $('.image.site').css('cursor', 'pointer').bind('click', function(){
      _gaq.push(['_trackEvent', 'Information', 'View', 'About Me']);
      unbind_clicks();
       hide_about_me_photos();

    });

    $('.image.contact_me').css('cursor', 'pointer').bind('click', function(){
      _gaq.push(['_trackEvent', 'Information', 'View', 'Contact']);
      unbind_clicks();
      hide_contact_photos();
    });


  }

  function unbind_clicks(){
    $('.image.my_prices').css('cursor','default').unbind();
    $('.image.site').css('cursor','default').unbind()
    $('.image.contact_me').css('cursor','default').unbind();
  }

  $(document).ready(function(){

    set_up_clicks();

    $('.prices.overlay .title .close').bind('click', function(){
      set_up_clicks();
      $(this).parent().parent().fadeOut(function(){ show_prices_photos(); } );
    });

    $('.about_me.overlay .title .close').bind('click', function(){
      set_up_clicks();
      $(this).parent().parent().fadeOut(function(){ show_about_me_photos(); });
    });

    $('.contact_div .title .close').bind('click', function(){
      set_up_clicks();
      $(this).parent().parent().parent().fadeOut(function(){ show_contact_photos(); });
    });

  });
})(jQuery);
