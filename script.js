let sideBarVisibility = true;

onresize = ()=>{
   if(visualViewport.width <=600){
      $("#sidebar").hide();
   }
}

function customizeNav(){
 
  sideBarVisibility = !sideBarVisibility;
  if(sideBarVisibility){
      $(".nav").css("width","80%")
     $("#main").css("width","80%");
    
  }else{
    $(".nav").css("width","100%")
    $("#main").css("width","100%");
  }

}


$(".fa-bars").on("click",function(){
  $("#sidebar").toggle();
  customizeNav();
})




// ------------PAGE SETTING---------------------//

$("#icons,#google,#profile,#table,#login,#register").hide();



$(".bar-button>a").on("click",function(e){
    e.preventDefault();
    $("#dashboard,#icons,#google,#profile,#table,#login,#register").hide();
    $($(this).attr("for")).show();
    $("#sidebar").hide();
    customizeNav();
})








//----------------- C H A R T ------------------------ 

var options = {
    chart: {
      type: 'line',
      height:'95%',
      width:'95%',
    },
    series: [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]  
    },
    
  }
  
  var chart = new ApexCharts(document.querySelector(".graph"), options);
  
  chart.render();



// ------------------------C H A R T 2-----------------------

var calendarInstance1 = new calendarJs("calendar", {
  manualEditingEnabled: true,

});




//------------- P O P U P --------------------------


