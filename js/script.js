$(document).ready(function(){$(window).on("scroll",function(){1<=$(window).scrollTop()?($(".header__menu").addClass("topfix"),$(".header__logo").css("transform","translate(-50%, -45%) scale(.33334)")):886<$(window).width()&&($(".header__menu").removeClass("topfix"),$(".header__logo").css("transform","scale(1) translate(-50%, 0)"))}),$(window).resize(function(){$(window).width()<=886?($(".header__logo").css("transform","translate(-50%, -45%) scale(.33334)"),$(".header__menu").addClass("topfix")):($(".header__logo").css("transform","scale(1) translate(-50%, 0)"),$(".header__menu").removeClass("topfix"))}),$(window).resize(function(){$(window).height()<550?$("#mainArrow").fadeOut():$("#mainArrow").fadeIn()}),$(window).resize(function(){$(window).width()<=1410&&886<=$(window).width()?$(".mainscreen").css("padding","183px 0 10% 0"):$(window).width()<886&&665<=$(window).width()?$(".mainscreen").css("padding","100px 0 10% 0"):$(window).width()<665&&$(".mainscreen").css("padding","15px 0 10% 0")}),$("#topBurger").on("click",function(){$(".header__burger,.header__menu").toggleClass("activ"),$("body").toggleClass("lock")}),$("a").on("click",function(){$("body").removeClass("lock"),$(".header__menu").removeClass("activ");var e=$(this).attr("href"),a=$(e).offset().top;$("html,body").animate({scrollTop:a},900)}),setTimeout(function(){$("html,body").animate({scrollTop:0},1)},1),$(".tab__trigger-but").on("click",function(){var e=$(this).data("tab"),a=$(".tab-item[data-tab='"+e+"']");$(".tab__trigger-but.active").removeClass("active"),$(this).addClass("active"),$(".tab-item").removeClass("active"),a.addClass("active")})}),$(document).ready(function(){$(".specialties__slider").slick({arrows:!1,dots:!0,adaptiveHeight:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,speed:900,easing:"ease",infinite:!0,fade:!0,swipe:!1,draggable:!1})});