$(document).ready(function() {
    $('body').addClass('loaded');
    $('#pop1').arcticmodal('setDefault', {
        beforeOpen: function(data, el) {
            $('body,header').css({
                'overflow': 'hidden',
                'padding-right': '16px'
            });
            $(el).closest('.arcticmodal-container_i').css('width', '100%');
        },
        afterOpen: function(data, el) {},
        beforeClose: function(data, el) {},
        afterClose: function(data, el) {
            $('body,header').css({
                'overflow': 'visible',
                'padding-right': '0px'
            });
        }
    });

    $('.btn_z, .like-button').click(function(e) {
        e.preventDefault();
        $('#pop1').arcticmodal();
    });

    $('#pop1 .kamni').click(function() {
        var kamen, kamen_inp, cur_id;
        switch ($(this).attr('id')) {
            case 'mramp':
                kamen = 'mramor';
                kamen_inp = 'Мрамор';
                cur_id = mramor_id_count;
                break
            case 'granp':
                kamen = 'granit';
                kamen_inp = 'Гранит';
                cur_id = granit_id_count;
                break
            case 'dolop':
                kamen = 'dolomit';
                kamen_inp = 'Доломит';
                cur_id = dolomit_id_count;
                break
        }


        $('input.input-kamen-type').val(kamen_inp);
        $('.kam[data-kamen="' + kamen + '"]').find('a[data-id="' + cur_id + '"]').trigger('click');


        $('#pop1 .kamni').removeClass('active');
        $(this).addClass('active');
        $('#kal2').addClass('active');
    });

    //gполучить прайс,мобильная версия блока выбора камня
    $('.btn_pp').click(function(e) {
        e.preventDefault();


        var kamen, kamen_inp, cur_id;
        kamen = $(this).closest('.kam_wrap').children('.kam').data('kamen');
        //alert(kamen);
        switch (kamen) {
            case 'mramor':
                kamen_inp = 'Мрамор';
                cur_id = mramor_id_count;
                break
            case 'granit':
                kamen_inp = 'Гранит';
                cur_id = granit_id_count;
                break
            case 'dolomit':
                kamen_inp = 'Доломит';
                cur_id = dolomit_id_count;
                break
        }
        alert(kamen + ' ' + kamen_inp + ' ' + cur_id);

        $('input.input-kamen-type').val(kamen_inp);
        $('.kam[data-kamen="' + kamen + '"]').find('a[data-id="' + cur_id + '"]').trigger('click');


        $('#pop3').arcticmodal({
            afterOpen: function(data, el) {
                $('body,header').css({
                    'overflow': 'hidden',
                    'padding-right': '16px'
                });
            }
        });



    });

    $('#kal2').click(function(e) {
        e.preventDefault();
        if ($(this).closest('.wrap').find('.kamni.active').length > 0) {

            $('#pop1').arcticmodal('close');
            $('#pop2').arcticmodal({
                afterOpen: function(data, el) {
                    $('body,header').css({
                        'overflow': 'hidden',
                        'padding-right': '16px'
                    });
                }
            });
        }
    });

    //меню скрол камень и попап и кнопки
    $('#mram, #mramp, .kkam[data-kamen="mramor"]').click(function(e) {
        $('.kam_wrap[data-kamen="granit"], .kam_wrap[data-kamen="dolomit"], .kam[data-kamen="granit"], .kam[data-kamen="dolomit"]').removeClass('active');
        $('.kam_wrap[data-kamen="mramor"], .kam[data-kamen="mramor"]').addClass('active');
    });
    $('#gran, #granp, .kkam[data-kamen="granit"]').click(function(e) {
        $('.kam_wrap[data-kamen="mramor"], .kam_wrap[data-kamen="dolomit"], .kam[data-kamen="mramor"], .kam[data-kamen="dolomit"]').removeClass('active');
        $('.kam_wrap[data-kamen="granit"], .kam[data-kamen="granit"]').addClass('active');
    });
    $('#dolo, #dolop, .kkam[data-kamen="dolomit"]').click(function(e) {
        $('.kam_wrap[data-kamen="granit"], .kam_wrap[data-kamen="mramor"], .kam[data-kamen="granit"], .kam[data-kamen="mramor"]').removeClass('active');
        $('.kam_wrap[data-kamen="dolomit"], .kam[data-kamen="dolomit"]').addClass('active');
    });

    $(".menu_line a").mouseover(function() {
        if ($(this).is('[data-kamen]')) {

            $(".menu_line a").removeClass('active');
            $(this).addClass('active');
            $(".opis_b,.opis_b_wrap").removeClass('active');
            $('.opis_b[data-kamen="' + $(this).data('kamen') + '"]').addClass('active');
            $('.opis_b_wrap[data-kamen="' + $(this).data('kamen') + '"]').addClass('active');

        }
    });
    $('.menu_line a[data-kamen="granit"]').addClass('active');
    $('.opis_b[data-kamen="granit"]').addClass('active');

    //анимация
    $('.proc_gr').viewportChecker({
        classToAdd: 'active',
        offset: 100
    });


    $('.back').click(function(e) {
        e.preventDefault();
        $.arcticmodal('close');
        $('#pop1').arcticmodal({
            afterOpen: function(data, el) {
                $('body,header').css({
                    'overflow': 'hidden',
                    'padding-right': '16px'
                });
            }
        });
        $('#kal2').removeClass('active');
        $('#pop1 .kamni').removeClass('active');
    });
    $('#kal31,#kal32,#kal33').click(function(e) {
        e.preventDefault();
        $('#pop2').arcticmodal('close');
        $('#pop3').arcticmodal({
            afterOpen: function(data, el) {
                $('body,header').css({
                    'overflow': 'hidden',
                    'padding-right': '16px'
                });
            }
        });
    });

    $('.trak').hover(function() {
        if ($('.trak.active').length > 0) {
            $('.trak.active').removeClass('active');
        }
    });

    $('.top,.mena,.kkam,.mause').click(function(e) {
        e.preventDefault();
        if ($(this).parent().find('.sscrl_w').length == 0) {
            $("html, body").animate({
                scrollTop: $($(this).attr('href')).offset().top - 90
            }, 500);
        } else {
            $(this).closest('.menu_gr').find('.sscrl_w').removeClass('active');

            $(this).parent().find('.sscrl_w').addClass('active');

            $(this).closest('.menu_gr').find('.sscrl_w').slimScroll({
                destroy: true
            });


            //slimscroll_start
            $(this).parent().find('.sscrl_w').slimScroll({
                height: '205px',
                size: '6px',
                color: '#ffbf00',
                opacity: '1',
                distance: '23px',
                alwaysVisible: true,
                railVisible: true,
            });



            //$(this).parent().find('.sscrolldiv').css({'padding-top': '20px'});
            //корекція кссу для скроллу старт
            $(this).parent().find('.sscrollbar').css({
                'transform': 'scale(1,0.65)'
            });

            $(this).parent().find('.sscrollrail').css({
                'transform': 'scale(1,0.45)',
                'right': '25px',
                'width': '2px'
            });


            $(this).next().find('a').unbind('click');

            $(this).next().find('a').click(function(e) {

                e.preventDefault();

                var kamen, cur_id;
                switch ($(this).closest('.sscrolldiv').prev().text()) {
                    case 'Мрамор':
                        kamen = 'mramor';
                        //kamen_inp = 'Мрамор';
                        //cur_id = mramor_id_count;
                        break
                    case 'Гранит':
                        kamen = 'granit';
                        //kamen_inp = 'Гранит';
                        //cur_id = granit_id_count;
                        break
                    case 'Доломит':
                        kamen = 'dolomit';
                        //kamen_inp = 'Доломит';
                        //cur_id = dolomit_id_count;
                        break
                }

                cur_id = $(this).data('id');

                $('.kam[data-kamen="' + kamen + '"]').find('a[data-id="' + cur_id + '"]').trigger('click');

                $("html, body").animate({
                    scrollTop: $($(this).closest('.sscrolldiv').prev().attr('href')).offset().top - 90
                }, 500);


            });



        }

    });

    $(window).scroll(function() {
        if ($(document).scrollTop() > 20) {
            $('header').addClass('head_w').css('top', 0);
        } else {
            $('header').removeClass('head_w').removeAttr('style');
        }
    });
    $('.polit').click(function(e) {
        e.preventDefault();
        $('#conf_pop').arcticmodal();
    });
    //menu
    var menu_active = 0;
    $('.menu_btn').click(function(e) {
        e.preventDefault();
        if ($(window).width() >= 625) {
            $('.menu').removeClass('noactive');
        } else {
            $('.menu_m').removeClass('noactive');
        }
        menu_active = 1;

        $('.opis_b').slimScroll({
            destroy: true
        });

        $('.opis_b').removeAttr('style');
        //ініціаліація скролу якщо висота списку більша за 470
        $('.opis_b').slimScroll({
            height: '80vh',
            size: '6px',
            color: '#ffbf00',
            opacity: '1',
            distance: '1px',
            alwaysVisible: true,
            railVisible: true,
        });
        //корекція кссу для скроллу старт
        $('.opis_b').parent().find('.sscrollbar').css({
            'cursor': 'pointer',
            'transform': 'scale(1,0.65)',
            'height': '100px'
        });

        $('.opis_b').parent().find('.sscrollrail').css({
            'transform': 'scale(1,0.45)',
            'right': '3px',
            'width': '2px'
        });

        setTimeout(function() {
            $('.opis_b').slimScroll({
                scrollTo: '1px',
                alwaysVisible: true,
                railVisible: true
            });
        }, 500);
        $('body,header').css({
            'overflow': 'hidden',
            'padding-right': '16px'
        });



    });
    $('section,.as-close').click(function(e) {
        e.preventDefault();

        if (menu_active == 1) {
            $('.menu_m,.menu').addClass('noactive');
            menu_active = 0;
            $('body,header').css({
                'overflow': 'auto',
                'padding-right': '0px'
            });
        }

    });


    $('.mena').click(function() {

        if ($(this).parent().find('.sscrl_w').length == 0) {
            if (menu_active == 1) {
                $('.menu_m,.menu').addClass('noactive');
                menu_active = 0;
                $('body,header').css({
                    'overflow': 'auto',
                    'padding-right': '0px'
                });
            }
        }
    });

    $('.mena').click(function() {
        $('.mena').removeClass('active');
        $(this).addClass('active');
    });

    function validateEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    };
    $('input#email-valid').blur(function() {
        if (!validateEmail($(this).val())) {
            $(this).addClass('error-input');
        }
    });
    $('input#email-valid').focus(function() {
        $(this).removeClass('error-input');
    });

    function getURLParameter(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
    }

    function run_geo(geo_url) {
        $.ajax({
            type: 'GET',
            url: geo_url,
            dataType: 'xml',
            success: function(xml) {
                $(xml).find('ip').each(function() {
                    var city = $(this).find('city').text();
                    var region = $(this).find('region').text();
                    if (city != region) {
                        var ipg = city + ', ' + region;
                    } else {
                        var ipg = city;
                    }
                    $('<input type="hidden" />').attr({
                        name: 'location',
                        class: 'location',
                        value: ipg
                    }).appendTo("form");
                });
            }
        });
    }
    $.get("http://ipinfo.io", function(response) {
        geo_url = 'http://ipgeobase.ru:7020/geo?ip=' + response.ip;
        run_geo(geo_url);
    }, "jsonp");
    utm = [];
    $.each(["utm_source", "utm_medium", "utm_campaign", "utm_term", 'source_type', 'source', 'position_type', 'position', 'added', 'creative', 'matchtype'], function(i, v) {
        utm[v] = getURLParameter(v) || $('<input type="hidden" />').attr({
            name: v,
            class: v,
            value: function() {
                if (getURLParameter(v) == undefined) return '-';
                else return getURLParameter(v)
            }
        }).appendTo("form")
    });
    $('<input type="hidden" />').attr({
        name: 'url',
        value: document.location.href
    }).appendTo("form");
    $('<input type="hidden" />').attr({
        name: 'title',
        value: document.title
    }).appendTo("form");

    $('input[name="mesto"]').blur(function() {
        if ($(this).val().length < 2) {
            $(this).addClass('error-input');
        } else {
            $(this).addClass('good-input')
        }
    });
    $('input[name="mesto"]').focus(function() {
        $(this).removeClass('error-input').removeClass('good-input');
    });

    $('input[name="name"]').blur(function() {
        if ($(this).val().length < 2) {
            $(this).addClass('error-input');
        } else {
            $(this).addClass('good-input')
        }
    });
    $('input[name="name"]').focus(function() {
        $(this).removeClass('error-input').removeClass('good-input');
    });

    $('input[name="phone"]').mask('+7 (999) 999-99-99');
    $('input[name="phone"]').blur(function() {
        if ($(this).val().length != 18) {
            $(this).addClass('error-input');
        } else {
            $(this).addClass('good-input')
        }
    });
    $('input[name="phone"]').focus(function() {
        $(this).removeClass('error-input').removeClass('good-input');
    });

    $('input[name="email"]').blur(function() {
        if (!validateEmail($(this).val())) {
            $(this).addClass('error-input');
        } else {
            $(this).addClass('good-input')
        }
    });
    $('input[name="email"]').focus(function() {
        $(this).removeClass('error-input').removeClass('good-input');
    });

    $('button[type="submit"]').click(function(e) {
        e.preventDefault();
        //alert('click');
        $(this).closest('form').submit();
    });


    $('form').submit(function(e) {
        e.preventDefault();
        //alert($(this).find('input[name="event"]').val());
        $(this).find('input[type="text"]').trigger('blur');
        $(this).find('textarea').trigger('blur');
        if (!$(this).find('input[type="text"]').hasClass('error-input') && !$(this).find('textarea').hasClass('error-input')) {
            var type = $(this).attr('method');
            var url = $(this).attr('action');
            var data = $(this).serialize();
            var track_event = $(this).find('input[name="event"]').val();
            $.ajax({
                type: type,
                url: url,
                data: data,
                success: function() {
                    $.arcticmodal('close');
                    if ($('form').find('input[type="text"]').closest('.map_form').length > 0) {
                        $('#okgo_m').arcticmodal({
                            afterOpen: function(data, el) {
                                $('body,header').css({
                                    'overflow': 'hidden',
                                    'padding-right': '16px'
                                });
                            }
                        });
                    } else {
                        $('#okgo').arcticmodal({
                            afterOpen: function(data, el) {
                                $('body,header').css({
                                    'overflow': 'hidden',
                                    'padding-right': '16px'
                                });
                            }
                        });
                    }
                    yaCounter38471935.reachGoal(track_event);
                    ga('send', 'event', 'submit', track_event);
                }
            });
        } else {
            if ($(this).find('input[type="text"]').closest('.map_form').length > 0) {
                $('#error_m').arcticmodal({
                    afterClose: function(data, el) {
                        if ($('.arcticmodal-container').length < 2) {
                            $('body,header').css({
                                'overflow': 'visible',
                                'padding-right': '0px'
                            });
                        }
                    }
                });
            } else {
                $('#error').arcticmodal({
                    afterClose: function(data, el) {
                        if ($('.arcticmodal-container').length < 2) {
                            $('body,header').css({
                                'overflow': 'visible',
                                'padding-right': '0px'
                            });
                        }
                    }
                });
            }


        }
    });

    $('.close_g,.close_w').click(function() {
        $(this).parent().arcticmodal('close');
        $('#kal2').removeClass('active');
        $('#pop1 .kamni').removeClass('active');
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

    $('.kam .str_l').click(function() {
        var kamen = $(this).closest('.kam').data('kamen');
        change_as_slider(kamen, 'prew');
    });

    $('.kam .str_r').click(function() {
        var kamen = $(this).closest('.kam').data('kamen');
        change_as_slider(kamen, 'next');
    });


    $('.kam_grs .str_l').click(function() {
        var kamen;

        switch ($(this).parent().children('.kamni').attr('id')) {
            case 'mramp':
                kamen = 'mramor';
                break
            case 'granp':
                kamen = 'granit';
                break
            case 'dolop':
                kamen = 'dolomit';
                break
        }


        //var kamen = $(this).closest('.kam').data('kamen');
        change_as_slider(kamen, 'prew');
    });

    $('.kam_grs .str_r').click(function() {
        var kamen;

        switch ($(this).parent().children('.kamni').attr('id')) {
            case 'mramp':
                kamen = 'mramor';
                break
            case 'granp':
                kamen = 'granit';
                break
            case 'dolop':
                kamen = 'dolomit';
                break
        }

        //var kamen = $(this).closest('.kam').data('kamen');
        change_as_slider(kamen, 'next');
    });



    //map start
    var cur_scale = 1;

    function map_zoom_in(event, double_click) {

        var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/;
        var сur_scale_arr = $('.map').css('transform').match(matrixRegex);

        var сur_wrap_scale_arr = $('.map_w').css('transform').match(matrixRegex);
        var сur_wrap_scale = parseFloat(сur_wrap_scale_arr[сur_wrap_scale_arr.length - 1]);

        //console.log('cur_wrap_scale = '+сur_wrap_scale);

        cur_scale = parseFloat(сur_scale_arr[сur_scale_arr.length - 1]);

        var new_scale;

        new_scale = cur_scale * 1.2;



        $('.map').css({
            transform: 'scale(' + new_scale + ')'
        });
        $('.map .trak').css({
            transform: 'scale(' + 1 / new_scale / сur_wrap_scale + ')'
        });

        cur_scale = new_scale;
        //console.log('cur_scale = '+cur_scale);

        make_drag_limits();
        map_move_by_limits();
    }

    function map_double_click(event, map) {
        var parentOffset = $(map).offset();
        var relX = event.pageX - parentOffset.left;
        var relY = event.pageY - parentOffset.top;

        console.log('click: ' + relX + ' ' + relY);

        var new_map_pos_l = parseFloat($('.map_w').css('left'));
        var new_map_pos_t = parseFloat($('.map_w').css('top'));

        console.log('cur_pos: ' + new_map_pos_l + ' ' + new_map_pos_t);
        //if (relX<980/2) {
        new_map_pos_l = (map_origin_l - relX) / cur_scale;
        //  alert('left');
        //}else{
        //  new_map_pos_l -= (map_origin_l-relX)/cur_scale+'px';
        //  alert('right');
        //}
        //if (relY<490/2) {   
        new_map_pos_t = (map_origin_t - relY) / cur_scale;
        //}else{
        //  new_map_pos_t -= (map_origin_t-relY)/cur_scale +'px';

        //}

        console.log('new_pos: ' + new_map_pos_l + ' ' + new_map_pos_t);
        $('.map_w').css({
            left: new_map_pos_l + 'px',
            top: new_map_pos_t + 'px'
        });

        map_make_new_center_drag();

        map_zoom_in();




        //make_drag_limits();
        //map_move_by_limits();
        /*
            var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/;
            var сur_origin_arr = $('.map').css('transform-origin').match(matrixRegex);



           var map_origin = relX  +'px ' + relY + 'px';



          var new_map_pos_l = parseFloat($('.map_w').css('left'));
          var new_map_pos_t = parseFloat($('.map_w').css('top'));
          //alert(new_map_pos_l+' '+new_map_pos_t);

            //map_origin_l -= new_map_pos_l/cur_scale;
            //new_map_pos_l -= relX/cur_scale +(map_origin_l-relX)/cur_scale/cur_scale +'px';
            new_map_pos_l -= (map_origin_l-relX)*(cur_scale-1)+'px';
            
           
            //map_origin_t -= new_map_pos_t/cur_scale;
            //new_map_pos_t -= relY/cur_scale +(map_origin_t-relY)/cur_scale/cur_scale +'px';
            new_map_pos_t -= (map_origin_t-relY)*(cur_scale-1) +'px';




            console.log('origin = '+map_origin +'; cur_scale = '+ cur_scale);


           $('.map').children('.trak').first().css({
              left:relX,
              top:relY
           });

            $('.map').css({
                'transform-origin': map_origin,
                '-webkit-transform-origin': map_origin
            });

           $('.map_w').css({
              left:new_map_pos_l,
              top:new_map_pos_t
           });*/



        //map_pos_l = parseFloat($('.map_w').css('left'));
        //map_pos_t = parseFloat($('.map_w').css('top'));
        //map_make_new_center_drag();
        //alert(map_pos_l+' '+map_pos_t)


    }

    function map_zoom_out() {

        var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/;
        var сur_scale_arr = $('.map').css('transform').match(matrixRegex);

        var сur_wrap_scale_arr = $('.map_w').css('transform').match(matrixRegex);
        var сur_wrap_scale = parseFloat(сur_wrap_scale_arr[сur_wrap_scale_arr.length - 1]);

        //console.log('cur_wrap_scale = '+сur_wrap_scale);

        cur_scale = parseFloat(сur_scale_arr[сur_scale_arr.length - 1]);

        var new_scale;

        if (cur_scale < 1.2) {
            new_scale = 1;

            $('.map').css({
                'transform-origin': '490px 245px',
                '-webkit-transform-origin': '490px 245px',
            });

        } else {
            new_scale = cur_scale / 1.2;
        }



        $('.map').css({
            transform: 'scale(' + new_scale + ')'
        });
        $('.map .trak').css({
            transform: 'scale(' + 1 / new_scale / сur_wrap_scale + ')'
        });


        cur_scale = new_scale;
        //console.log('cur_scale = '+cur_scale);
        make_drag_limits();
        map_move_by_limits();
        map_make_new_center_drag();
    }
    var map_pos_l = 0;
    var map_pos_t = 0;
    var map_origin_l = $('.map').width() / 2;
    var map_origin_t = $('.map').height() / 2;

    function map_make_new_center_drag() {

        var new_map_pos_l = parseFloat($('.map_w').css('left'));
        var new_map_pos_t = parseFloat($('.map_w').css('top'));
        //alert(new_map_pos_l+' '+new_map_pos_t);


        var matrixRegex = /matrix\((-?\d*\.?\d+),\s*0,\s*0,\s*(-?\d*\.?\d+),\s*0,\s*0\)/;

        var сur_wrap_scale_arr = $('.map_w').css('transform').match(matrixRegex);
        var сur_wrap_scale = parseFloat(сur_wrap_scale_arr[сur_wrap_scale_arr.length - 1]);

        if (map_pos_l != new_map_pos_l) {

            map_origin_l -= new_map_pos_l / cur_scale;
            new_map_pos_l = new_map_pos_l / cur_scale + 'px';

            //alert(new_map_pos_l);

        }
        if (map_pos_t != new_map_pos_t) {

            map_origin_t -= new_map_pos_t / cur_scale;
            new_map_pos_t = new_map_pos_t / cur_scale + 'px';

            //alert(new_map_pos_t);

        }


        var map_origin = map_origin_l + 'px ' + map_origin_t + 'px';



        console.log('origin = ' + map_origin + '; cur_scale = ' + cur_scale);



        $('.map').css({
            'transform-origin': map_origin,
            '-webkit-transform-origin': map_origin
        });

        $('.map_w').css({
            left: new_map_pos_l,
            top: new_map_pos_t
        });

        map_pos_l = parseFloat($('.map_w').css('left'));
        map_pos_t = parseFloat($('.map_w').css('top'));

    }

    var drag_min_l = 0;
    var drag_max_l = 0;
    var drag_min_t = 0;
    var drag_max_t = 0;

    function make_drag_limits() {
        drag_min_l = ($('.map').width() - map_origin_l) * (-1) * (cur_scale - 1);
        drag_max_l = (map_origin_l) * (cur_scale - 1);
        drag_min_t = ($('.map').height() - map_origin_t) * (-1) * (cur_scale - 1);
        drag_max_t = (map_origin_t) * (cur_scale - 1);

        //console.log('left: '+drag_min_l+' - '+drag_max_l+'; top '+drag_min_t+' - '+drag_max_t);
    }

    function map_move_by_limits() {
        map_pos_l = parseFloat($('.map_w').css('left'));
        map_pos_t = parseFloat($('.map_w').css('top'));

        if (map_pos_l < drag_min_l) map_pos_l = drag_min_l;
        if (map_pos_l > drag_max_l) map_pos_l = drag_max_l;
        if (map_pos_t < drag_min_t) map_pos_t = drag_min_t;
        if (map_pos_t > drag_max_t) map_pos_t = drag_max_t;

        $('.map_w').css({
            left: map_pos_l,
            top: map_pos_t
        });
    }

    function map_zoom_in_on_mouse() {
        if (zoom_in_mouse) {
            map_zoom_in();
            setTimeout(function() {
                map_zoom_in_on_mouse()
            }, 500);
        }
    }

    function map_zoom_out_on_mouse() {
        if (zoom_out_mouse) {
            map_zoom_out();
            setTimeout(function() {
                map_zoom_out_on_mouse()
            }, 500);
        }
    }

    function init_map() {
        //$(".map_w").draggable( "destroy" );
        $(".map_w").draggable({
            scroll: false,
            start: function() {
                make_drag_limits();
                //$("html").addClass("diableSelection");
            },
            drag: function(event, ui) {
                if (ui.position.left < drag_min_l) ui.position.left = drag_min_l;
                if (ui.position.left > drag_max_l) ui.position.left = drag_max_l;
                if (ui.position.top < drag_min_t) ui.position.top = drag_min_t;
                if (ui.position.top > drag_max_t) ui.position.top = drag_max_t;
            },
            stop: function() {
                map_make_new_center_drag();
                //$("html").removeClass("diableSelection");
            },
            create: function() {
                setTimeout(function() {
                    map_zoom_in();
                    map_zoom_out();
                }, 200);

            }
        });
    }

    $('.map_w').dblclick(function(e) {
        map_double_click(e, this);
    });

    $('.map_zoom_in').click(function(e) {
        map_zoom_in(e);
    });


    var zoom_in_mouse = false;
    $('.map_zoom_in').mousedown(function(e) {
        if (e.button == 0) {
            zoom_in_mouse = true;
            //console.log('start_first_timeout zoom_in_mouse');
            setTimeout(function() {
                map_zoom_in_on_mouse()
            }, 1000);
            return false;
        }
        return true;
    });
    $('.map_zoom_in').mouseup(function(e) {
        zoom_in_mouse = false;
        return true;
    });


    var zoom_out_mouse = false;
    $('.map_zoom_out').mousedown(function(e) {
        if (e.button == 0) {
            zoom_out_mouse = true;
            //console.log('start_first_timeout zoom_in_mouse');
            setTimeout(function() {
                map_zoom_out_on_mouse()
            }, 1000);
            return false;
        }
        return true;
    });
    $('.map_zoom_out').mouseup(function(e) {
        zoom_out_mouse = false;
        return true;
    });
    $('.map_zoom_out').click(function(e) {
        map_zoom_out(e);
    });

    $(window).resize(function() {
        $(".map_w").draggable("destroy");
        init_map();
    });

    //map end



    parse_mramor();
    parse_granit();
    parse_dolomit();

    init_map();
});



var mramor_array_parsed = false;
var granit_array_parsed = false;
var dolomit_array_parsed = false;


var mramor_array;
var granit_array;
var dolomit_array;

var mramor_id_count = 1;
var granit_id_count = 1;
var dolomit_id_count = 1;

var max_mramor_id = 1;
var max_granit_id = 1;
var max_dolomit_id = 1;

function change_as_slider(kamen, direction) {
    var cur_id;
    var max_id;
    switch (kamen) {
        case 'mramor':
            cur_id = mramor_id_count;
            max_id = max_mramor_id;
            break
        case 'granit':
            cur_id = granit_id_count;
            max_id = max_granit_id;
            break
        case 'dolomit':
            cur_id = dolomit_id_count;
            max_id = max_dolomit_id;
            break
    }

    if (direction == 'next') {
        if (cur_id == max_id) {
            cur_id = 1;
        } else {
            cur_id += 1;
        }
    } else {
        if (cur_id == 1) {
            cur_id = max_id;
        } else {
            cur_id -= 1;
        }
    }


    /*switch (kamen) {
     case 'mramor':
        parse_mramor_cart(cur_id.toString());
        break
     case 'granit':
        parse_granit_cart(cur_id.toString());
        break
     case 'dolomit':
        parse_dolomit_cart(cur_id.toString());
        break
    }*/

    $('.kam[data-kamen="' + kamen + '"]').find('a[data-id="' + cur_id + '"]').trigger('click');



}

function scroll_links_init() {
    if (mramor_array_parsed && granit_array_parsed && dolomit_array_parsed) {
        //функція для вибра камню з меню
        $('.opis_b a').click(function(e) {
            e.preventDefault();
            var kamen = $(this).closest('.opis_b').data('kamen');
            $('.kam[data-kamen="' + kamen + '"] .scroll-wrap a[data-id="' + $(this).data('id') + '"]').trigger('click');
            $('.mena[data-kamen="' + kamen + '"]').trigger('click');

        });

        //функція скролу з мапи
        $('.map').find('a').click(function(e) {
            e.preventDefault();

            var kamen = $(this).data('kamen');

            $('.kam[data-kamen="' + kamen + '"] .scroll-wrap a[data-id="' + $(this).data('id') + '"]').trigger('click');
            $('.mena[data-kamen="' + kamen + '"]').trigger('click');
        });
    }
}



function parse_mramor() {
    $.getJSON("js/mramor.json", function(data) {

        //запис джсона в змінну
        mramor_array = data;
        max_mramor_id = mramor_array.length;
        //парсинг всього з джсону і заповнення html
        for (var i = mramor_array.length - 1; i >= 0; i--) {

            //наповнення списків з карьерами  
            $('<a href="#" data-id="' + mramor_array[i].id + '">' + mramor_array[i].name + '<span><img src="' + mramor_array[i].kamen_map + '" alt height="30" width="30"><span class="after"></span></span></a>').appendTo('.opis_b[data-kamen="mramor"]');
            $('<li><a href="#" data-id="' + mramor_array[i].id + '">' + mramor_array[i].name + '<span><img src="' + mramor_array[i].kamen_map + '" alt height="30" width="30"><span class="after"></span></span></a></li>').appendTo('.opis[data-kamen="mramor"]');
            $('<a href="#" data-id="' + mramor_array[i].id + '">' + mramor_array[i].name + '</a>').appendTo('.kam[data-kamen="mramor"] .scroll-wrap');

            //магія карти через скелет
            $('#map-point-sceleton .trak h4').text('Мрамор');
            $('#map-point-sceleton .trak p').text(mramor_array[i].name);
            $('#map-point-sceleton .trak img').attr('src', mramor_array[i].kamen_map);
            $('#map-point-sceleton .trak').css({
                'top': mramor_array[i].map_t,
                'left': mramor_array[i].map_l
            });
            $('#map-point-sceleton a').attr('data-kamen', 'mramor').attr('data-id', mramor_array[i].id);
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
            'right': '25px',
            'width': '2px'
        });
        //корекція кссу для скроллу енд

        //хотфікс для відбораження скроллбару при відкритті
        $('.kam[data-kamen="mramor"] .sel').click(function() {
            setTimeout(function() {
                $('.kam[data-kamen="mramor"] .scroll-wrap').slimScroll({
                    //scrollTo:'1px',
                    alwaysVisible: true,
                    railVisible: true
                });
            }, 500);
        });
        //slimscrool_end

        //відкриття, закриття селектбоксів старт
        $('.kam[data-kamen="mramor"] .sel a').not('.active').click(function(e) {
            e.preventDefault();
            if ($(this).text().length <= 37) {
                $(this).closest('.sel').find('a.active').html($(this).text());
            } else {
                $(this).closest('.sel').find('a.active').html($(this).text().substring(0, 34) + '...');
            }
            parse_mramor_cart($(this).data('id')); //парсинг карточки карьеру і її ініціалізація
            $(this).closest('.select').hide();
        });

        $('.kam[data-kamen="mramor"] .sel').children('.active').click(function(e) {
            e.preventDefault();
            if (!$(this).parent().children('.select').is(':visible')) {
                $(this).parent().children('.select').show();
            } else {
                $(this).parent().children('.select').hide();
            }
        });

        $('.kam[data-kamen="mramor"] .sel .select a').not('active').click(function(e) {
            e.preventDefault();
            $(this).closest('.select').hide();
        });
        //відкриття, закриття селектбоксів енд



        $('.kam[data-kamen="mramor"] .scroll-wrap a:first-child').trigger('click');

        mramor_array_parsed = true;
        scroll_links_init();

    });

}

function parse_mramor_cart(id) {
    for (var i = mramor_array.length - 1; i >= 0; i--) {
        if (mramor_array[i].id == id) {

            mramor_id_count = parseInt(id);

            //миняємо телефон
            $('.kam[data-kamen="mramor"] a.tel').attr('href', 'tel:' + mramor_array[i].phone.replace(/ /g, '')).children('span.tel').text(mramor_array[i].phone);
            //область
            $('.kam[data-kamen="mramor"] p.oblast').text(mramor_array[i].region);
            //ідентифікатори в формах
            $('input.input-mramor').val(mramor_array[i].name);
            $('input.event-mramor').val(mramor_array[i].event);
            $('input.input-kamen-karier').val(mramor_array[i].name);
            $('input.input-kamen-event').val(mramor_array[i].event);
            //фотки текстур камнів
            $('.for-parsed-style[data-kamen="mramor"]').html(''); //очистка
            var style_string = '.kam[data-kamen="mramor"] .kamen{background-image: url(' + mramor_array[i].kamen + ')!important}@media screen and (max-width: 480px) and (min-width: 320px){.kam[data-kamen="mramor"] .kamen{background-image: url(' + mramor_array[i].kamen_m + ')!important}}';
            $('<style>' + style_string + '</style>').appendTo('.for-parsed-style[data-kamen="mramor"]');
            //фотографії карьеру
            $('.kam[data-kamen="mramor"] p.foto').unbind('click'); //видаляємо попередню функцію привязану на клік
            var photo_array = mramor_array[i].photos.split(',');
            $('.kam[data-kamen="mramor"] p.foto').click(function() {
                $.fancybox.open(photo_array, {
                    helpers: {
                        overlay: {
                            locked: false
                        },
                        title: null
                    },
                    'padding': 0
                })
            });
            //фотографії виробів
            $('.kam[data-kamen="mramor"] p.product').unbind('click'); //видаляємо попередню функцію привязану на клік
            var product_array = mramor_array[i].product.split(',');
            $('.kam[data-kamen="mramor"] p.product').click(function() {
                $.fancybox.open(product_array, {
                    helpers: {
                        overlay: {
                            locked: false
                        },
                        title: null
                    },
                    'padding': 0
                })
            });




            $('#mramp').find('img').attr('src', mramor_array[i].kamen_b);

            //$('#mramp,#granp,#dolop')
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

function parse_granit() {
    $.getJSON("js/granit.json", function(data) {

        //запис джсона в змінну
        granit_array = data;
        max_granit_id = granit_array.length;

        //парсинг всього з джсону і заповнення html
        for (var i = granit_array.length - 1; i >= 0; i--) {


            //наповнення списків з карьерами  
            $('<a href="#" data-id="' + granit_array[i].id + '">' + granit_array[i].name + '<span><img src="' + granit_array[i].kamen_map + '" alt height="30" width="30"><span class="after"></span></span></a>').appendTo('.opis_b[data-kamen="granit"]');
            $('<li><a href="#" data-id="' + granit_array[i].id + '">' + granit_array[i].name + '</a><span><img src="' + granit_array[i].kamen_map + '" alt height="30" width="30"><span class="after"></span></span></li>').appendTo('.opis[data-kamen="granit"]');
            $('<a href="#" data-id="' + granit_array[i].id + '">' + granit_array[i].name + '</a>').appendTo('.kam[data-kamen="granit"] .scroll-wrap');

            //магія карти через скелет
            $('#map-point-sceleton .trak h4').text('Гранит');
            $('#map-point-sceleton .trak p').text(granit_array[i].name);
            $('#map-point-sceleton .trak img').attr('src', granit_array[i].kamen_map);
            $('#map-point-sceleton .trak').css({
                'top': granit_array[i].map_t,
                'left': granit_array[i].map_l
            });
            $('#map-point-sceleton a').attr('data-kamen', 'granit').attr('data-id', granit_array[i].id);
            $($('#map-point-sceleton').html()).appendTo('.map');
        }

        //ініціалізація функціоналу селектбоксів

        //slimscroll_start
        $('.kam[data-kamen="granit"] .scroll-wrap').slimScroll({
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
        $('.kam[data-kamen="granit"]').find('.sscrollbar').css({
            'transform': 'scale(1,0.65)'
        });

        $('.kam[data-kamen="granit"]').find('.sscrollrail').css({
            'transform': 'scale(1,0.45)',
            'right': '25px',
            'width': '2px'
        });
        //корекція кссу для скроллу енд

        //хотфікс для відбораження скроллбару при відкритті
        $('.kam[data-kamen="granit"] .sel').click(function() {
            setTimeout(function() {
                $('.kam[data-kamen="granit"] .scroll-wrap').slimScroll({
                    //scrollTo:'1px',
                    alwaysVisible: true,
                    railVisible: true
                });
            }, 500);
        });
        //slimscrool_end

        //відкриття, закриття селектбоксів старт
        $('.kam[data-kamen="granit"] .sel a').not('.active').click(function(e) {
            e.preventDefault();
            if ($(this).text().length <= 37) {
                $(this).closest('.sel').find('a.active').html($(this).text());
            } else {
                $(this).closest('.sel').find('a.active').html($(this).text().substring(0, 34) + '...');
            }
            parse_granit_cart($(this).data('id')); //парсинг карточки карьеру і її ініціалізація
            $(this).closest('.select').hide();
        });

        $('.kam[data-kamen="granit"] .sel').children('.active').click(function(e) {
            e.preventDefault();
            if (!$(this).parent().children('.select').is(':visible')) {
                $(this).parent().children('.select').show();
            } else {
                $(this).parent().children('.select').hide();
            }
        });

        $('.kam[data-kamen="granit"] .sel .select a').not('active').click(function(e) {
            e.preventDefault();
            $(this).closest('.select').hide();
        });
        //відкриття, закриття селектбоксів енд

        //ввімкнення першиго камня зі списку
        $('.kam[data-kamen="granit"] .scroll-wrap a:first-child').trigger('click');


        granit_array_parsed = true;
        scroll_links_init();

    });

}

function parse_granit_cart(id) {
    for (var i = granit_array.length - 1; i >= 0; i--) {
        if (granit_array[i].id == id) {

            granit_id_count = parseInt(id);

            //миняємо телефон
            $('.kam[data-kamen="granit"] a.tel').attr('href', 'tel:' + granit_array[i].phone.replace(/ /g, '')).children('span.tel').text(granit_array[i].phone);
            //область
            $('.kam[data-kamen="granit"] p.oblast').text(granit_array[i].region);
            //ідентифікатори в формах
            $('input.input-granit').val(granit_array[i].name);
            $('input.event-granit').val(granit_array[i].event);
            $('input.input-kamen-karier').val(granit_array[i].name);
            $('input.input-kamen-event').val(granit_array[i].event);
            //фотки текстур камнів
            $('.for-parsed-style[data-kamen="granit"]').html(''); //очистка
            var style_string = '.kam[data-kamen="granit"] .kamen{background-image: url(' + granit_array[i].kamen + ')!important}@media screen and (max-width: 480px) and (min-width: 320px){.kam[data-kamen="granit"] .kamen{background-image: url(' + granit_array[i].kamen_m + ')!important}}';
            $('<style>' + style_string + '</style>').appendTo('.for-parsed-style[data-kamen="granit"]');
            //фотографії карьеру
            $('.kam[data-kamen="granit"] p.foto').unbind('click'); //видаляємо попередню функцію привязану на клік
            var photo_array = granit_array[i].photos.split(',');
            $('.kam[data-kamen="granit"] p.foto').click(function() {
                $.fancybox.open(photo_array, {
                    helpers: {
                        overlay: {
                            locked: false
                        },
                        title: null
                    },
                    'padding': 0
                })
            });
            //фотографії виробів
            $('.kam[data-kamen="granit"] p.product').unbind('click'); //видаляємо попередню функцію привязану на клік
            var product_array = granit_array[i].product.split(',');
            $('.kam[data-kamen="granit"] p.product').click(function() {
                $.fancybox.open(product_array, {
                    helpers: {
                        overlay: {
                            locked: false
                        },
                        title: null
                    },
                    'padding': 0
                })
            });
            //сертифікати карьеру тимчасово непотрібно
            $('#granp').find('img').attr('src', granit_array[i].kamen_b);
            /*

            $('.kam[data-kamen="granit"] p.sert').unbind('click');//видаляємо попередню функцію привязану на клік
            var sert_array = granit_array[i].photos.split(',');
            $('.kam[data-kamen="granit"] p.sert').click(function() {
              $.fancybox.open(sert_array , {helpers:{overlay:{locked:false},title:null},'loop': false} )
            });
            */
        }
    }
}

function parse_dolomit() {
    $.getJSON("js/dolomit.json", function(data) {

        //запис джсона в змінну
        dolomit_array = data;
        max_dolomit_id = dolomit_array.length;

        //парсинг всього з джсону і заповнення html
        for (var i = dolomit_array.length - 1; i >= 0; i--) {


            //наповнення списків з карьерами  
            $('<a href="#" data-id="' + dolomit_array[i].id + '">' + dolomit_array[i].name + '<span><img src="' + dolomit_array[i].kamen_map + '" alt height="30" width="30"><span class="after"></span></span></a>').appendTo('.opis_b[data-kamen="dolomit"]');
            $('<li><a href="#" data-id="' + dolomit_array[i].id + '">' + dolomit_array[i].name + '<span><img src="' + dolomit_array[i].kamen_map + '" alt height="30" width="30"><span class="after"></span></span></a></li>').appendTo('.opis[data-kamen="dolomit"]');
            $('<a href="#" data-id="' + dolomit_array[i].id + '">' + dolomit_array[i].name + '</a>').appendTo('.kam[data-kamen="dolomit"] .scroll-wrap');

            //магія карти через скелет
            $('#map-point-sceleton .trak h4').text('Доломит');
            $('#map-point-sceleton .trak p').text(dolomit_array[i].name);
            $('#map-point-sceleton .trak img').attr('src', dolomit_array[i].kamen_map);
            $('#map-point-sceleton .trak').css({
                'top': dolomit_array[i].map_t,
                'left': dolomit_array[i].map_l
            });
            $('#map-point-sceleton a').attr('data-kamen', 'dolomit').attr('data-id', dolomit_array[i].id);
            $($('#map-point-sceleton').html()).appendTo('.map');
        }

        //ініціалізація функціоналу селектбоксів

        //slimscroll_start
        $('.kam[data-kamen="dolomit"] .scroll-wrap').slimScroll({
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
        $('.kam[data-kamen="dolomit"]').find('.sscrollbar').css({
            'transform': 'scale(1,0.65)'
        });

        $('.kam[data-kamen="dolomit"]').find('.sscrollrail').css({
            'transform': 'scale(1,0.45)',
            'right': '25px',
            'width': '2px'
        });
        //корекція кссу для скроллу енд

        //хотфікс для відбораження скроллбару при відкритті
        $('.kam[data-kamen="dolomit"] .sel').click(function() {
            setTimeout(function() {
                $('.kam[data-kamen="dolomit"] .scroll-wrap').slimScroll({
                    //scrollTo:'1px',
                    alwaysVisible: true,
                    railVisible: true
                });
            }, 500);
        });
        //slimscrool_end

        //відкриття, закриття селектбоксів старт
        $('.kam[data-kamen="dolomit"] .sel a').not('.active').click(function(e) {
            e.preventDefault();
            if ($(this).text().length <= 37) {
                $(this).closest('.sel').find('a.active').html($(this).text());
            } else {
                $(this).closest('.sel').find('a.active').html($(this).text().substring(0, 34) + '...');
            }
            parse_dolomit_cart($(this).data('id')); //парсинг карточки карьеру і її ініціалізація
            $(this).closest('.select').hide();
        });

        $('.kam[data-kamen="dolomit"] .sel').children('.active').click(function(e) {
            e.preventDefault();
            if (!$(this).parent().children('.select').is(':visible')) {
                $(this).parent().children('.select').show();
            } else {
                $(this).parent().children('.select').hide();
            }
        });

        $('.kam[data-kamen="dolomit"] .sel .select a').not('active').click(function(e) {
            e.preventDefault();
            $(this).closest('.select').hide();
        });
        //відкриття, закриття селектбоксів енд

        $('.kam[data-kamen="dolomit"] .scroll-wrap a:first-child').trigger('click');


        dolomit_array_parsed = true;
        scroll_links_init();

        $(".menu_line a").trigger('mouseleave');
        $('#mram').trigger('mouseover');

    });

}

function parse_dolomit_cart(id) {
    for (var i = dolomit_array.length - 1; i >= 0; i--) {
        if (dolomit_array[i].id == id) {

            dolomit_id_count = parseInt(id);

            //миняємо телефон
            $('.kam[data-kamen="dolomit"] a.tel').attr('href', 'tel:' + dolomit_array[i].phone.replace(/ /g, '')).children('span.tel').text(dolomit_array[i].phone);
            //область
            $('.kam[data-kamen="dolomit"] p.oblast').text(dolomit_array[i].region);
            //ідентифікатори в формах
            $('input.input-dolomit').val(dolomit_array[i].name);
            $('input.event-dolomit').val(dolomit_array[i].event);
            $('input.input-kamen-karier').val(dolomit_array[i].name);
            $('input.input-kamen-event').val(dolomit_array[i].event);
            //фотки текстур камнів
            $('.for-parsed-style[data-kamen="dolomit"]').html(''); //очистка
            var style_string = '.kam[data-kamen="dolomit"] .kamen{background-image: url(' + dolomit_array[i].kamen + ')!important}@media screen and (max-width: 480px) and (min-width: 320px){.kam[data-kamen="dolomit"] .kamen{background-image: url(' + dolomit_array[i].kamen_m + ')!important}}';
            $('<style>' + style_string + '</style>').appendTo('.for-parsed-style[data-kamen="dolomit"]');
            //фотографії карьеру
            $('.kam[data-kamen="dolomit"] p.foto').unbind('click'); //видаляємо попередню функцію привязану на клік
            var photo_array = dolomit_array[i].photos.split(',');
            $('.kam[data-kamen="dolomit"] p.foto').click(function() {
                $.fancybox.open(photo_array, {
                    helpers: {
                        overlay: {
                            locked: false
                        },
                        title: null
                    },
                    'padding': 0
                })
            });
            //фотографії виробів
            $('.kam[data-kamen="dolomit"] p.product').unbind('click'); //видаляємо попередню функцію привязану на клік
            var product_array = dolomit_array[i].product.split(',');
            $('.kam[data-kamen="dolomit"] p.product').click(function() {
                $.fancybox.open(product_array, {
                    helpers: {
                        overlay: {
                            locked: false
                        },
                        title: null
                    },
                    'padding': 0
                })
            });


            $('#dolop').find('img').attr('src', dolomit_array[i].kamen_b);
            //$('#mramp,#granp,#dolop')
            //сертифікати карьеру тимчасово непотрібно
            /*
            $('.kam[data-kamen="dolomit"] p.sert').unbind('click');//видаляємо попередню функцію привязану на клік
            var sert_array = dolomit_array[i].photos.split(',');
            $('.kam[data-kamen="dolomit"] p.sert').click(function() {
              $.fancybox.open(sert_array , {helpers:{overlay:{locked:false},title:null},'loop': false} )
            });
            */
        }
    }
}
