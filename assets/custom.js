$(document).ready(function() {
 
    let isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

      
    $('.product-grid-item-slider').each(function(i, obj) {
        $(obj).slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          touchMove:1,
          swipeToSlide:1,
          arrows: false,
          fade: false,
          speed:0,
          lazyLoad:'progressive'
        });
    if (isMobile) {
      console.log('product-grid-item-slider init');
      $(obj).on('swipe', function(event, slick, direction){
        if (direction == 'left') {
          $(this).slick('slickNext')
        }
        else if (direction == 'right') {
          $(this).slick('slickPrev')
        }          
      });
      
      }
      else 
      {
        $(obj).on('mouseenter', function(event){
            console.log($(this).slick('slickNext'));
             $(this).slick('slickNext');         
          });  
        
          $(obj).on('mouseleave', function(event){
                    console.log('oML');
             $(this).slick('slickPrev');         
          }); 
      }   
    });    
});