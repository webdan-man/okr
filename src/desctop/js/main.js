$(document).ready(function(){

$('.btn_z').click(function(e) {
    e.preventDefault();
    $('#pop1').arcticmodal();
  });
$('#kal2').click(function(e){
  e.preventDefault();
    $('#pop2').arcticmodal();
});
$('#kal3').click(function(e){
  e.preventDefault();
    $('#pop3').arcticmodal();
});

$('.trak').hover(function(){
    if ($('.trak.active').length > 0) {
      $('.trak.active').removeClass('active');
    }
  });

$('.top').click(function(e){e.preventDefault();$("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 500);});
$('.verh').click(function(e){e.preventDefault();$("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 500);});

$( window ).scroll(function() {
  $('header').addClass('head_w').css('top',0);
});

//menu
var menu_active = 0;
    $('.menu_btn').click(function(e) {
        e.preventDefault();
            $('.menu').removeClass('noactive');
            menu_active = 1;
    });
    $('section,.as-close').click(function(){
  if (menu_active == 1) {
    $('.menu').addClass('noactive');
    menu_active = 0;
  }
});


  function validateEmail(email) {var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return re.test(email);};
    $('input#email-valid').blur(function() {if (!validateEmail($(this).val())) {$(this).addClass('error-input');}});
    $('input#email-valid').focus(function() {$(this).removeClass('error-input');});
  function getURLParameter(name) {return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;} 
    function run_geo(geo_url){
        $.ajax({type: 'GET',url: geo_url,dataType: 'xml',
            success: function(xml) {$(xml).find('ip').each(function(){
            var city = $(this).find('city').text();
            var region = $(this).find('region').text();
            if(city!=region){var ipg = city+', '+region;}else{var ipg = city;}
            $('<input type="hidden" />').attr({name: 'location', class: 'location', value:ipg}).appendTo("form");
        });}});
    }
    $.get("http://ipinfo.io", function(response) {geo_url='http://ipgeobase.ru:7020/geo?ip='+response.ip; run_geo(geo_url);}, "jsonp");
    utm=[];$.each(["utm_source","utm_medium","utm_campaign","utm_term",'source_type','source','position_type','position','added','creative','matchtype'],function(i,v){utm[v]=getURLParameter(v) || $('<input type="hidden" />').attr({name: v, class: v, value: function(){if(getURLParameter(v) == undefined)return '-'; else return getURLParameter(v)}}).appendTo("form")}); 
    $('<input type="hidden" />').attr({name: 'url', value: document.location.href}).appendTo("form");
    $('<input type="hidden" />').attr({name: 'title', value: document.title}).appendTo("form");

    $('input[name="name"]').blur(function() {if($(this).val().length < 2) {$(this).addClass('error-input');}});
    $('input[name="name"]').focus(function() {$(this).removeClass('error-input');});

    $('input[name="phone"]').mask('+7 (999) 999-99-99');
    $('input[name="phone"]').blur(function() {if($(this).val().length != 18) {$(this).addClass('error-input');}});
    $('input[name="phone"]').focus(function() {$(this).removeClass('error-input');});

    $('input[name="email"]').blur(function() {if(!validateEmail($(this).val())) {$(this).addClass('error-input');}});
    $('input[name="email"]').focus(function() {$(this).removeClass('error-input');});

    $('form').submit(function(e){
        e.preventDefault();
        $(this).find('input[type="text"]').trigger('blur');
        $(this).find('textarea').trigger('blur');
        if(!$(this).find('input[type="text"]').hasClass('error-input')&&!$(this).find('textarea').hasClass('error-input')) {
            var type=$(this).attr('method');
            var url=$(this).attr('action');
            var data=$(this).serialize();
            $.ajax({type: type, url: url, data: data,
            success : function(){
                $.arcticmodal('close');$('#okgo').arcticmodal();
            }
        }); 
        }else{
          $('#error').arcticmodal();
        }
    });
$('.close_g,.close_w').click(function(){
      $.arcticmodal('close');
    });
$('.foto').click(function() {
        $('#pop5').arcticmodal({
            afterOpen: function(data, el) {
              slider1 = $('#sld1').bxSlider({pager:false,controls:false, auto:false, speed: 400,
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 1
              });
              $('.str_l').click(function(e){e.preventDefault();slider1.goToPrevSlide();});
              $('.str_r').click(function(e){e.preventDefault();slider1.goToNextSlide();});
            }
        });
    });


});