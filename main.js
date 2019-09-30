$(document).ready(function(){
  
 var carouselImages = [
     {
         image_url: 'https://i.imgur.com/Xxg14Oc.png'
     },
   {
     image_url: 'https://i.imgur.com/iCCYuti.png',
   },
   {
     image_url: 'https://i.imgur.com/XCl8UFW.png',
   },
   {
     image_url: 'https://i.imgur.com/PGoPvue.png',
   },
   {
     image_url: './kanaphotos/swipingcap.gif',
   }
 ];

 var htmlStr = ""
 carouselImages.forEach(function(item,i){
    htmlStr += `
      <div id="image${i}" class="pics">
         <div><img src="${item.image_url}" /></div>
          <div class= "prev">&laquo</div>
          <div class= "next">&raquo</div>
      </div>
      `
     
 })

    $("#carousel").html(htmlStr)
    $(".pics:first-child").addClass("current opacity")
    
    

   $(".next").on('click', function(){
   
       var current = $(".current").attr("id").substr(5)
       var nextIndex = Number(current) + 1;
 
       if(nextIndex === carouselImages.length){
       nextIndex = 0
       }
    
     
    $(`#image${current}`).removeClass("current opacity")
    $(`#image${nextIndex}`).addClass("current opacity")
    
   })
   $(".prev").on('click', function(){
   
       var current = $(".current").attr("id").substr(5)
       var prevIndex = Number(current) - 1;
 
       if(prevIndex === -1){
       prevIndex = carouselImages.length-1
       }
    
     
    $(`#image${current}`).removeClass("current opacity")
    $(`#image${prevIndex}`).addClass("current opacity")
    
   })

  //  this is for vertex sphere
  var settings = {
    //height of sphere container
    height: 400,
    //width of sphere container
    width: 400,
    //radius of sphere
    radius: 150,
    //rotation speed
    speed: 3,
    //sphere rotations slower
    slower: 0.9,
    //delay between up<a href="https://www.jqueryscript.net/time-clock/">date</a> position
    timer: 5,
    //dependence of a font size on axis Z
    fontMultiplier: 15,
    //tag css stylies on mouse over
    hoverStyle: {
    border: 'none',
    color: '#0b2e6f'
    },
    //tag css stylies on mouse out
    mouseOutStyle: {
    border: '',
    color: ''
    }
    };
    $('#tagcloud').tagoSphere(settings)
   
})