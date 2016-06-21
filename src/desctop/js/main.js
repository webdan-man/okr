$(document).ready(function(){

$('#pop1').arcticmodal('setDefault',{
        beforeOpen: function(data, el) {
          $('body,header').css({'overflow': 'hidden','padding-right': '16px'});
          $(el).closest('.arcticmodal-container_i').css('width','100%');
        },
        afterOpen: function(data, el) {
        },
        beforeClose: function(data, el) {
        },
        afterClose: function(data, el) {
          $('body,header').css({'overflow': 'visible','padding-right': '0px'});
        }
        });

$('.btn_z').click(function(e) {
    e.preventDefault();
    $('#pop1').arcticmodal();
  });

$('#pop1 .kamni').click(function(){
  $('#pop1 .kamni').removeClass('active');
  $(this).addClass('active');
});

$('#kal2').click(function(e){
  e.preventDefault();
  if ($(this).closest('.wrap').find('.kamni.active').length>0) {
    $('#pop1').arcticmodal('close');
    $('#pop2').arcticmodal({
        afterOpen: function(data, el) {
          $('body,header').css({'overflow': 'hidden','padding-right': '16px'});
        }
    });    
  }
});

$('.sel a.active').click(function(e){
  e.preventDefault();
});

$('.sel a').not('.active').click(function(e){
  e.preventDefault();
  $(this).closest('.sel').find('a.active').html($(this).text());
});

$('.sel').click(function(e){
  if (!$(this).children('.select').is(':visible')) {
    $(this).children('.select').show();
  }else{
    $(this).children('.select').hide();
  }
});

$('.sel .select a').not('active').click(function(e){
  e.preventDefault();

});

$('#kal3').click(function(e){
  e.preventDefault();
    $('#pop2').arcticmodal('close');
    $('#pop3').arcticmodal({
        afterOpen: function(data, el) {
          $('body,header').css({'overflow': 'hidden','padding-right': '16px'});
        }
    });
});

$('.trak').hover(function(){
    if ($('.trak.active').length > 0) {
      $('.trak.active').removeClass('active');
    }
  });

$('.top').click(function(e){e.preventDefault();$("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 500);});
$('.verh,.mena,.kkam').click(function(e){e.preventDefault();$("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top-90}, 500);});

$( window ).scroll(function() {
  if ($(document).scrollTop()>0) {
    $('header').addClass('head_w').css('top',0);
  }else{
    $('header').removeClass('head_w').removeAttr('css');
  }
});

//menu
var menu_active = 0;
    $('.menu_btn').click(function(e) {
        e.preventDefault();
            $('.menu').removeClass('noactive');
            menu_active = 1;
    });
    $('section,.as-close,.mena').click(function(){
  if (menu_active == 1) {
    $('.menu').addClass('noactive');
    menu_active = 0;
  }
});

$('.mena').click(function(){  
  $('.mena').removeClass('active');
  $(this).addClass('active');
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

    $('input[name="name"]').blur(function() {if($(this).val().length < 2) {$(this).addClass('error-input');}else{$(this).addClass('good-input')}});
    $('input[name="name"]').focus(function() {$(this).removeClass('error-input').removeClass('good-input');});

    $('input[name="phone"]').mask('+7 (999) 999-99-99');
    $('input[name="phone"]').blur(function() {if($(this).val().length != 18) {$(this).addClass('error-input');}else{$(this).addClass('good-input')}});
    $('input[name="phone"]').focus(function() {$(this).removeClass('error-input').removeClass('good-input');});

    $('input[name="email"]').blur(function() {if(!validateEmail($(this).val())) {$(this).addClass('error-input');}else{$(this).addClass('good-input')}});
    $('input[name="email"]').focus(function() {$(this).removeClass('error-input').removeClass('good-input');});

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
                $.arcticmodal('close');
                $('#okgo').arcticmodal({
                    afterOpen: function(data, el) {
                      $('body,header').css({'overflow': 'hidden','padding-right': '16px'});
                    }
                });
            }
        }); 
        }else{
          $('#error').arcticmodal({
             afterClose: function(data, el) {
              if ($('.arcticmodal-container').length<2) {
                $('body,header').css({'overflow': 'visible','padding-right': '0px'});
              }
              }
          });
        }
    });

$('.close_g,.close_w').click(function(){
      $(this).parent().arcticmodal('close');
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