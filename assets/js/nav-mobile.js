{
    let start_X, distance;

    handleTouchStart = function(evt){
            
        let touch_obj = evt.changedTouches[0];
        start_X = parseInt(touch_obj.pageX);
    };

    handleTouchMove = function(evt){

        let touch_obj = evt.changedTouches[0];
        distance = parseInt(touch_obj.pageX)-start_X;
        if(distance > 1){
            evt.currentTarget.style.transform = "translateX("+distance+"px)";
        }
    };

    handleTouchEnd = function(evt){

        evt.currentTarget.style = "";
        if(distance > 50){
            if(evt.currentTarget == document.getElementById("menu"))
                document.getElementById("nav-form").reset();
        }
        start_X = distance = 0; 
    };

    let nav = document.getElementById("menu");

    nav.addEventListener('touchstart',handleTouchStart,false);
    nav.addEventListener('touchmove',handleTouchMove,false);
    nav.addEventListener('touchend',handleTouchEnd,false);
    nav.addEventListener('touchcancel',handleTouchEnd,false);
}
