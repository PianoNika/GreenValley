$( document ).ready(function() {
  var tooglerMenu = $('.hamburger');
  $(tooglerMenu).on('click', function () {
    $(this).toggleClass('is-active');
    $('.main-nav').slideToggle();
  });
  var promoTabs = $('.promo__tabs-item');
  var vacationSliderSlide = $('.vacation-slider__slide');
  var vacationTypeSlide = $('.vacation-type__slide');
  $(vacationSliderSlide).hide().eq(0).show();
  $(vacationTypeSlide).hide().eq(0).show();

  $(promoTabs).on('click', function () {
      var tabIndex = $(this).index();
      $(vacationSliderSlide).stop().fadeOut().eq(tabIndex).fadeIn();
      $(vacationTypeSlide).stop().fadeOut().eq(tabIndex).fadeIn();
  });

  $('.promo__tabs-item').on('click', function () {
    $(this).find('a').addClass('active');
    $(this).siblings().find('a').removeClass('active');
  });


var windowWidth = $(window).width();
if (windowWidth < 768) {
  $('.reviews__item').hide();
  $('.reviews__item:eq(0)').show();
}
else {
  $('.reviews__item').hide();
  $('.reviews__item:eq(0), .reviews__item:eq(1)').show();
}
$('.reviews__more-btn').on('click', function(e){
    $('.reviews__item').show().parent().slideToggle();
    e.preventDefault();
});


  $('.promotions__slider').owlCarousel({
      items:1,
      loop:true,
      margin:10,
      dots:true,
      center:true,
      dotData:true,
  })

  $('.reviews_slider').owlCarousel({
      items:1,
      loop:true,
      margin:10,
      dots:true,
      center:true,
      dotData:true,
  })



function initialize() {
    var mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(60.192,29.640)
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'),
                                  mapOptions);
    var image = "/img/ballon.png";
    var myLatLng = new google.maps.LatLng(60.192,29.640);
    var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);

});