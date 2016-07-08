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

$('.top,.verh,.mena,.kkam').click(function(e){e.preventDefault();$("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top-90}, 500);});

$( window ).scroll(function() {
  if ($(document).scrollTop()>20) {
    $('header').addClass('head_w').css('top',0);
  }else{
    $('header').removeClass('head_w').removeAttr('style');
  }
});

//menu
var menu_active = 0;
$('.menu_btn').click(function(e) {
    e.preventDefault();
        $('.menu_m,.menu').removeClass('noactive');
        menu_active = 1;

  $('.opis_b').slimScroll({destroy:true});

  $('.opis_b').removeAttr('style');  
  
  if ($('.opis_b:visible').height()>470) {
    //ініціаліація скролу якщо висота списку більша за 470
    $('.opis_b:visible').slimScroll({
      height: '470px', 
      size: '6px',
      color: '#ffbf00',
      opacity: '1',
      distance: '1px',
      alwaysVisible: true,
      railVisible: true, 
    });
    //корекція кссу для скроллу старт
    $('.opis_b:visible').parent().find('.sscrollbar').css({
      'transform': 'scale(1,0.65)',
      'height':'100px'
    });

    $('.opis_b:visible').parent().find('.sscrollrail').css({
      'transform': 'scale(1,0.45)',
      'right':'3px',
      'width':'2px'
    });

    setTimeout(function(){
    $('.opis_b:visible').slimScroll({ scrollTo:'1px',
    alwaysVisible: true,
    railVisible: true});
    },500);
  }

  

});
$('section,.as-close,.mena').click(function(){
  if (menu_active == 1) {
    $('.menu_m,.menu').addClass('noactive');
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

/*
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
*/
parse_mramor();

  





});





var mramor_array;

function parse_mramor(){
  $.getJSON( "js/mramor.json", function( data ) {
  
  //запис джсона в змінну
  mramor_array = data;

  //парсинг всього з джсону і заповнення html
  for (var i = mramor_array.length - 1; i >= 0; i--) {
  

    //наповнення списків з карьерами  
    $('<a href="#" data-id="'+mramor_array[i].id+'">'+mramor_array[i].name+'</a>').appendTo('.opis_b[data-kamen="mramor"]');
    $('<li><a href="#" data-id="'+mramor_array[i].id+'">'+mramor_array[i].name+'</a></li>').appendTo('.opis[data-kamen="mramor"]');
    $('<a href="#" data-id="'+mramor_array[i].id+'">'+mramor_array[i].name+'</a>').appendTo('.kam[data-kamen="mramor"] .scroll-wrap');

    //магія карти через скелет
    $('#map-point-sceleton .trak h4').text('Мрамор');
    $('#map-point-sceleton .trak p').text(mramor_array[i].name);
    $('#map-point-sceleton .trak img').attr('src',mramor_array[i].kamen_map);
    $('#map-point-sceleton .trak').css({
      'top':mramor_array[i].map_t,
      'left':mramor_array[i].map_l
    });
    $($('#map-point-sceleton').html()).appendTo('.map');
  }



  //ініціалізація функціоналу селектбоксів

  //slimscroll_start
  $('.kam[data-kamen="mramor"] .scroll-wrap').slimScroll({
    height: '365px', 
    size: '6px',
    color: '#ffbf00',
    opacity: '1',
    distance: '23px',
    alwaysVisible: true,
    railVisible: true, 
  }).css({
    'padding-bottom': '80px' // паддинг в селектбоксі
  });;
  //корекція кссу для скроллу старт
  $('.kam[data-kamen="mramor"]').find('.sscrollbar').css({
    'transform': 'scale(1,0.65)'
  });

  $('.kam[data-kamen="mramor"]').find('.sscrollrail').css({
    'transform': 'scale(1,0.45)',
    'right':'25px',
    'width':'2px'
  });
  //корекція кссу для скроллу енд
  
  //хотфікс для відбораження скроллбару при відкритті
  $('.kam[data-kamen="mramor"] .sel').click(function(){
    setTimeout(function(){
      $('.kam[data-kamen="mramor"] .scroll-wrap').slimScroll({ scrollTo:'1px',
    alwaysVisible: true,
    railVisible: true});
    },500);
  });
  //slimscrool_end

  //відкриття, закриття селектбоксів старт
  $('.kam[data-kamen="mramor"] .sel a').not('.active').click(function(e){
    e.preventDefault();
    if ($(this).text().length <= 37) {
      $(this).closest('.sel').find('a.active').html($(this).text());
    }else{
      $(this).closest('.sel').find('a.active').html($(this).text().substring(0,34)+'...');
    }
    parse_mramor_cart($(this).data('id'));//парсинг карточки карьеру і її ініціалізація
    $(this).closest('.select').hide();
  });

  $('.kam[data-kamen="mramor"] .sel').children('.active').click(function(e){
    e.preventDefault();
    if (!$(this).parent().children('.select').is(':visible')) {
      $(this).parent().children('.select').show();
    }else{
      $(this).parent().children('.select').hide();
    }
  });

  $('.kam[data-kamen="mramor"] .sel .select a').not('active').click(function(e){
    e.preventDefault();
    $(this).closest('.select').hide();
  });
  //відкриття, закриття селектбоксів енд




  });

}
function parse_mramor_cart(id){
  for (var i = mramor_array.length - 1; i >= 0; i--) {
    if (mramor_array[i].id == id) {
      //миняємо телефон
      $('.kam[data-kamen="mramor"] a.tel').attr('href', 'tel:'+mramor_array[i].phone.replace(/ /g,'')).children('span.tel').text(mramor_array[i].phone);
      //область
      $('.kam[data-kamen="mramor"] p.oblast').text(mramor_array[i].region);
      //ідентифікатори в формах
      $('input.input-mramor').val(mramor_array[i].name);
      $('input.input-kamen-karier').val(mramor_array[i].name);
      //фотки текстур камнів
      $('.for-parsed-style[data-kamen="mramor"]').html('');//очистка
      var style_string = '.kam[data-kamen="mramor"] .kamen{background-image: url('+mramor_array[i].kamen+')}@media screen and (max-width: 480px) and (min-width: 320px){.kam[data-kamen="mramor"] .kamen{background-image: url('+mramor_array[i].kamen_m+')}}';
      $('<style>'+style_string+'</style>').appendTo('.for-parsed-style[data-kamen="mramor"]');
      //фотографії карьеру
      $('.kam[data-kamen="mramor"] p.foto').unbind('click');//видаляємо попередню функцію привязану на клік
      var photo_array = mramor_array[i].photos.split(',');
      $('.kam[data-kamen="mramor"] p.foto').click(function() {
        $.fancybox.open(photo_array , {helpers:{overlay:{locked:false},title:null},'loop': false} )
      });
      //сертифікати карьеру тимчасово непотрібно
      /*
      $('.kam[data-kamen="mramor"] p.sert').unbind('click');//видаляємо попередню функцію привязану на клік
      var sert_array = mramor_array[i].photos.split(',');
      $('.kam[data-kamen="mramor"] p.sert').click(function() {
        $.fancybox.open(sert_array , {helpers:{overlay:{locked:false},title:null},'loop': false} )
      });
      */
    }
  }
}

