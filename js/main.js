$(document).ready(function (){

	//плавный переход по якорям 
 	$(".nav li").click(function(){
        var link = $(this).find("a").attr("href");
        $("html, body").animate({scrollTop : $(link).offset().top},400);
		
        setTimeout(function(){location.hash = link;},100);		
		return false;
	}); 
	
	//открыть-закрыть форму для выбора фото 
	 $('.add-foto').click(function(){
		if($('.content').css('display') == 'none'){
			$('.content').fadeIn(100);
			
		} else {
			$('.content').fadeOut(100);
		}
		
	});
	


    //счётчик - кнопка плюс
    
     $(".counter .plus").click(function(){
          var input = $(this).siblings('input');
          var value = Number(input.val());
          input.val(value + 1);
    });
    
    //счётчик - кнопка минус
    
    $(".counter .minus").click(function(){
          var input = $(this).siblings('input');
          var value = Number(input.val());
          if(value > 1) input.val(value - 1);
    });

    //вкладки
    (function($){               
        jQuery.fn.lightTabs = function(options){

            var createTabs = function(){
                tabs = this;
                i = 0;
                
                showPage = function(i){
                    $(tabs).children("div.tab-wr").children("div").hide();
                    $(tabs).children("div.tab-wr").children("div").eq(i).show();
                    $(tabs).find("ul.tabs-btns").children("li").removeClass("active");
                    $(tabs).find("ul.tabs-btns").children("li").eq(i).addClass("active");
                }
                                    
                showPage(0);            
                
                $(tabs).find("ul.tabs-btns").children("li").each(function(index, element){
                    $(element).attr("data-page", i);
                    i++;                        
                });
                
                $(tabs).find("ul.tabs-btns").children("li").click(function(){
                    showPage(parseInt($(this).attr("data-page")));
                }); 

                $(tabs).find("ul.tabs-btns").children("li.disabled").off();

        
            };      
            return this.each(createTabs);
        };  
    })(jQuery);
    $(".tabs").lightTabs();

    //слайдер
    $('.slider ul').lightSlider({
        item:1,
        loop:false,
        auto: true,
        loop: true,
        pause: 4000,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:1,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });

    //слайдер
    $('.slider_hits ul').lightSlider({
        item:3,
        loop:false,
        pager: false,
        pause: 4000,
        slideMargin:15,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
             {
                breakpoint:1200,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:1023,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:768,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });

    //слайдер на карте товара
    $('.card_slider ul').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        thumbItem:4,
        controls: true,
        slideMargin:0,
        enableDrag: false,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '.card_slider ul .lslide'
            });
        }   
    }); 

    //more reviews
    $(".more").click(function(){
        $(".hidden").slideToggle();
         return false;
    });




}); //конец ready