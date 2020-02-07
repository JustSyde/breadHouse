$(function(){

    var $chk = 1;

    $('.closeMenu').on('click', function(){
        if ($chk == 1){
            $('.navBarList').addClass('menuUL');
            $('.navBarList').css('display', 'block');
            $('html').addClass('scrollNo');
            $('.menuButton').css('display', 'none');
            $('.closeMenu').css('display', 'block');
            $chk=2;
        }else{
            $('.navBarList').removeClass('menuUL');
            $('.navBarList').css('display', 'none');
            $('html').removeClass('scrollNo');
            $('.menuButton').css('display', 'block');
            $('.closeMenu').css('display', 'none');
            $chk=1;
        }
    })

    $('.menuButton').on('click', function(){
        if ($chk == 1){
            $('.navBarList').addClass('menuUL');
            $('.navBarList').css('display', 'block');
            $('html').addClass('scrollNo');
            $('.menuButton').css('display', 'none');
            $('.closeMenu').css('display', 'block');
            $chk=2;
        }else{
            $('.navBarList').removeClass('menuUL');
            $('.navBarList').css('display', 'none');
            $('html').removeClass('scrollNo');
            $('.menuButton').css('display', 'block');
            $('.closeMenu').css('display', 'none');
            $chk=1;
        }
    })

    var $slides = $('.slides');
    var $left = $('.leftHalf');
    var $right = $('.rightHalf');
    var $counter = 1;
    var $numberOfImages = 6;
    var $screenWidth = $('.screenWidth');
    var $fontSize = $screenWidth / 50;

    $slides.css("margin-left", "0px");
    $counter = 1;
    $screenWidth = $(window).outerWidth();

    $(window).on('resize', function(){
        $slides.css("margin-left", "0px");
        $counter = 1;
        $screenWidth = $(window).outerWidth();
        $fontSize = $screenWidth / 50;
        $chk=1;
        $('html').removeClass('scrollNo');
        $('.closeMenu').css('display', 'none');
        if ($screenWidth<1100){
            $('.press').css("width", $fontSize*6 + "px");
            $('.hold_text').css("max-height", (($fontSize*50)/3.28)  + "px");
        }

        if ($screenWidth>=685){
            $('.navBarList').removeClass('menuUL');
            $('.navBarList').css('display', 'flex');
            $('.menuButton').css('display', 'none');
            $chk=1;
        }

        if ($screenWidth<=684){
            $('.navBarList').css('display', 'none');
            $('.menuButton').css('display', 'block');
        }

        if ($screenWidth<=390){
            $('.navBarList').css('display', 'none');
            $('.menuButton').css('display', 'block');
        }
        
    });

    $(window).trigger('resize');

    $right.on('click', function(){
        if ($counter==$numberOfImages){
            $slides.css("margin-left", "0px");
            $counter = 1;
        } else {
            if ($screenWidth >= 1100){
                $screenWidth = 1100;
            }
            $slides.css("margin-left", "-" + $screenWidth*$counter + "px");
            $counter++;
        }
       });
       
    $left.on('click', function(){
        if ($counter==1){
            if ($screenWidth >= 1100){
                $screenWidth = 1100;
            }
            $slides.css("margin-left", "-" + $screenWidth*($numberOfImages-1) + "px");
            $counter = $numberOfImages;
        } else {
            if ($screenWidth >= 1100){
                $screenWidth = 1100;
            }
            $slides.css("margin-left", "-" + $screenWidth * ($counter-2) + "px");
            $counter--;
        }
    });

    var $sliderLoop = setInterval(function(){
        if ($counter==$numberOfImages){
            $slides.css("margin-left", "0px");
            $counter = 1;
        } else {
            if ($screenWidth >= 1100){
                $screenWidth = 1100;
            }
            $slides.css("margin-left", "-" + $screenWidth*$counter + "px");
            $counter++;
        }
    }, 3000);

    var $m = 1;

    $sliderLoop;
    
    $right.hover(function(){
    if ($m==1){
        clearInterval($sliderLoop);
    }else{
        $sliderLoop = setInterval(function(){
            if ($counter==$numberOfImages){
                $slides.css("margin-left", "0px");
                $counter = 1;
            } else {
                if ($screenWidth >= 1100){
                    $screenWidth = 1100;
                }
                $slides.css("margin-left", "-" + $screenWidth*$counter + "px");
                $counter++;
            }
        }, 3000);
    }
    });

    $left.hover(function(){
        if ($m==1){
            clearInterval($sliderLoop);
        }else{
            $sliderLoop = setInterval(function(){
                if ($counter==$numberOfImages){
                    $slides.css("margin-left", "0px");
                    $counter = 1;
                } else {
                    if ($screenWidth >= 1100){
                        $screenWidth = 1100;
                    }
                    $slides.css("margin-left", "-" + $screenWidth*$counter + "px");
                    $counter++;
                }
            }, 3000);

        }
    });

    $('.addToCart1').click(function(){
        $("#bd1").css('display', 'flex');  
        
    });
    $('.addToCart2').click(function(){
        $("#bd2").css('display', 'flex');  
        
    });
    $('.addToCart3').click(function(){
        $("#bd3").css('display', 'flex');  
        

    });
    $('.addToCart4').click(function(){
        $("#bd4").css('display', 'flex');  
        
        
    });
    $('.addToCart5').click(function(){
        $("#bd5").css('display', 'flex');  
        
    });
    $('.addToCart6').click(function(){
        $("#bd6").css('display', 'flex');  

    });

    $('.removeItem').click(function(){
        $(this).parent().css('display', 'none');  
    });

    
    $(document).ready(function() {
        $('.minus').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
    });

    var $moreInfo = $('.readMoreInfo');

    $moreInfo.click(function(){
        if ($(this).siblings('.moreText').is(':hidden')){
            $(this).text('Read Less');
            $(this).siblings('.moreText').slideDown(500);
        }else{
            $(this).text('Read More');
            $(this).siblings('.moreText').slideUp(500);
        }
    });

});