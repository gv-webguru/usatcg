// JavaScript Document for USATCG 2019
$(document).ready(function(){
    var width = $(".col-12.banner").width();
    var bannerHeight = width*0.273;
    $(".col-12.banner").height(bannerHeight);
    
    $(".buyer").change(function(){
        var isBuyer = this.value;
        console.log(isBuyer);
        var animOpts = {
            duration : 1000,
            easing: "swing"
           };
            
        
        if(isBuyer === "Yes"){
            console.log("ad-buyer-1 was clicked");
            //console.log(animOpts);
            $("#hidden-buyer").slideUp(animOpts);
        }
           else{
             console.log("ad-buyer-2 was clicked");
               //console.log(animOpts);
               $("#hidden-buyer").slideDown(animOpts);
        }
    });
    
    $("#form-sub").click(function(evt){
        evt.preventDefault();
        //console.log("I'm getting submitted!");
        $("#form-1").submit();
    });
    
    $(window).resize(function(){
        var width = $(".col-12.banner").width();
        var bannerHeight = width*0.273;
        $(".col-12.banner").height(bannerHeight);
        
        
    });
    var msg = "This microsite developed by Grant L. McDonald @ Graphic Village, Inc - for more info contact - Lisa at lhohner@multi-craft.com. Tell her you read the console."
    
    console.log(msg);
});