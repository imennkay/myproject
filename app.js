$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$(function() {
    $('.tooltip-carousel').popover();

    $('#carousel-example-generic').on('slide.bs.carousel', function() {
      $('.tooltip-carousel').popover('hide');
      $(this).find('.caraousel-tooltip-item.active').fadeOut(function() {
        $(this).removeClass('active');
      });
    });

    $('#carousel-example-generic').on('slid.bs.carousel', function() {
      var index = $(this).find('.carousel-inner > .item.active').index();
      $(this).find('.caraousel-tooltip-item').eq(index).fadeIn(function() {
        $(this).addClass('active');
      });
    });

    $('.tooltip-carousel').mouseenter(function() {
      $(this).popover('show');
    }).mouseleave(function() {
      $(this).popover('hide');
    });
  });

  


  $( '.js-input' ).keyup(function() {
    if( $(this).val() ) {
       $(this).addClass('not-empty');
    } else {
       $(this).removeClass('not-empty');
    }
  });




  /**
 * Utility to wrap the different behaviors between W3C-compliant browsers
 * and IE when adding event handlers.
**/

function addListener(element, type, callback) {
  if (element.addEventListener) {
      element.addEventListener(type, callback);
  } else if (element.attachEvent) {
      element.attachEvent('on' + type, callback);
  }
}

addListener(document, 'DOMContentLoaded', function () {
  
  var mq = window.matchMedia("(max-width: 760px)");
  if (mq.matches) {
      document.getElementById("menu_list").classList.add("hidden");
  }

  addListener(document.getElementById("menu_button"), 'click', function () {
      document.getElementById("menu_list").classList.toggle("hidden");
  });
  
  addListener(window, 'resize', function () {
      var width = window.innerWidth ||
                  document.documentElement.clientWidth ||
                  document.body.clientWidth;
      
      if (width > 760) {
          document.getElementById("menu_list").classList.remove("hidden");
      } else {
          document.getElementById("menu_list").classList.add("hidden");
      }
  });
  
});