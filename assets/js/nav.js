var start_X, distance;

this.handleTouchStart = function(evt){
        
    var touch_obj = evt.changedTouches[0];
    this.start_X = parseInt(touch_obj.pageX);
};

this.handleTouchMove = function(evt){

    var touch_obj = evt.changedTouches[0];
    this.distance = parseInt(touch_obj.pageX)-this.start_X;
    if(this.distance > 1){
        document.getElementById("menu").style.transform = "translateX("+this.distance+"px)";
    }
};

this.handleTouchEnd = function(evt){

    document.getElementById("menu").style = "";
    if(this.distance > 50){
        document.getElementById("nav-form").reset();
    }
    this.start_X = this.distance = 0; 
};

window.onload = function() {

    var nav = document.getElementById("menu");

    nav.addEventListener('touchstart',this.handleTouchStart,false);
    nav.addEventListener('touchmove',this.handleTouchMove,false);
    nav.addEventListener('touchend',this.handleTouchEnd,false);
    nav.addEventListener('touchcancel',this.handleTouchEnd,false);

    
    var nav = document.getElementById("v-header");
    var navoffset = nav.offsetTop;

    document.onscroll = function() {

        if(window.pageYOffset > navoffset){
            nav.classList.add("is-sticky");
        }
        else{
            nav.classList.remove("is-sticky");
        }
    };
};
