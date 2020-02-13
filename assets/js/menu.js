var navHidden = false;

$(document).ready(function(){
    
    function  Hidding_nav(){
        if($( window ).width()<=1435){
            console.log("Hidenn");
            $(".v-header-nav").addClass("is-hidden");
            $("#hamburger").removeClass("is-hidden");
            navHidden = true;
        }else{
            if(navHidden){
                console.log("Visible!");
                $("#hamburger").addClass("is-hidden");
                $(".v-header-nav").removeClass("is-hidden");
            }
        }
    }
    $("#hamburger").click(function(){
        console.log("hamburger is clicked ! "+navHidden);
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
      });
});

