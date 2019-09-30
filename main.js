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
   
})