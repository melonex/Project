var navHidden = false;
var searchHidden = false;
var isSticky = false;
var stickyNavTop;

function  Hidding_nav(){
    if($( window ).width()<=1024){
        $(".v-header-box-nav").addClass("is-hidden");
        $("#hamburger").removeClass("is-hidden");
        navHidden = true;
    }
    else{
        if(navHidden){
            $("#hamburger").addClass("is-hidden");
            $(".v-header-box-nav").removeClass("is-hidden");
            navHidden = false;
        }
    }
}
function Hidding_search(){
    if($(window).width()<=520){
        $(".c-search-bar-form-input").addClass("is-hidden");
        searchHidden = true;
    }
    else{
        $(".c-search-bar-form-input").removeClass("is-hidden");
        searchHidden = false;
    }
}

function Sticky_nav(){
    var scrollTop = $(window).scrollTop();      
    if (scrollTop > stickyNavTop) { 
        $('.v-header').addClass('is-sticky');
        isSticky = true;
        $(".v-header-box-nav").addClass("is-hidden");
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
    Hidding_search();
    $("#hamburger").click(function(){
        if($(window).width()<=520 & !searchHidden){
            $(".c-search-bar-form-input").addClass("is-hidden");
            searchHidden = true;
        }

        if(navHidden){
            $(".v-header-box-nav").removeClass("is-hidden");
            navHidden = false;
        }
        else{
            $(".v-header-box-nav").addClass("is-hidden");
            navHidden = true;
        }
    });
    
    $(".c-search-bar-form-icon").click(function(){
        if($(window).width()<=520){
            if(!navHidden){
                $(".v-header-box-nav").addClass("is-hidden");
                navHidden = true;
            }
            if(searchHidden){
                $(".c-search-bar-form-input").removeClass("is-hidden");
                searchHidden = false;
                $(".c-search-bar-form-input").focus();
            }
            else{
                $(".c-search-bar-form-input").addClass("is-hidden");
                searchHidden = true;
            }
        }
    });

    $( window ).resize(function() {
        Hidding_nav();
        if($(window).width()>520 && searchHidden){
            $(".c-search-bar-form-input").removeClass("is-hidden");
            searchHidden = false;
        }
        if(isSticky){
            $('.v-header').removeClass('is-sticky'); 
        }
    }); 
    $(window).scroll(function() {
        if($( window ).width()<=1024){
            Sticky_nav();
        }
    });    
});
