var navHidden = false;
var isSticky = false;
var stickyNavTop;

function  Hidding_nav(){
    if($( window ).width()<=1435){
        $(".v-header-nav").addClass("is-hidden");
        $("#hamburger").removeClass("is-hidden");
        navHidden = true;
    }
    else{
        if(navHidden){
            $("#hamburger").addClass("is-hidden");
            $(".v-header-nav").removeClass("is-hidden");
            navHidden = false;
        }
    }
}

function Sticky_nav(){
    var scrollTop = $(window).scrollTop();      
    if (scrollTop > stickyNavTop) { 
        $('.v-header').addClass('is-sticky');
        isSticky = true;
        $(".v-header-nav").addClass("is-hidden");
        navHidden = true;
    } 
    else {
        $('.v-header').removeClass('is-sticky'); 
        isSticky = false;
    }
};

$(document).ready(function(){ 
    stickyNavTop = $('.v-header').offset().top;
    Hidding_nav();
    $("#hamburger").click(function(){
        if(navHidden){
            $(".v-header-nav").removeClass("is-hidden");
            navHidden = false;
        }
        else{
            $(".v-header-nav").addClass("is-hidden");
            navHidden = true;
        }
    });
    $( window ).resize(function() {
        Hidding_nav();
        if(isSticky){
            $('.v-header').removeClass('is-sticky'); 
        }
    }); 
    $(window).scroll(function() {
        if($( window ).width()<=1435){
            Sticky_nav();
        }
    });    
});
