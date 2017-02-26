$('ul.navbar-nav li')[0].classList.add('active');
var offset, anim;
function To(){
    if($('#navigation').find('.active').prevAll().hasClass('next')){
    $('#navigation').find('.active').prevAll().removeClass('next');
    }
    $('#navigation').find('.active').prevAll().addClass('visited');
    if($('#navigation').find('.active').prevAll().hasClass('active')){
    $('#navigation').find('.active').prevAll().removeClass('active');
    }
    if($('#navigation').find('.active').hasClass('next')){
       $('#navigation').find('.active').removeClass('next');
       } 
    if($('#navigation').find('.active').hasClass('visited')){
       $('#navigation').find('.active').removeClass('visited');
    }
    
    if($('#navigation').find('.active').nextAll().hasClass('active')){
    $('#navigation').find('.active').nextAll().removeClass('active');
        }
    if($('#navigation').find('.active').prevAll().hasClass('visited')){
    $('#navigation').find('.active').nextAll().removeClass('visited');
        }
    $('#navigation').find('.active').nextAll().addClass('next');
    
}

$(document).ready(function(){
    $("[data-spy='scroll']").each(function(){
        var $spy = $(this).scrollspy('refresh')
    });
    $('#top').innerHeight(window.innerHeight);
//    if(window.innerHeight > 675 && $(window).innerWidth() > 768){
//       $('#main-container > div').each(function(index, elem){
//         elem.setAttribute('style','height:'+window.innerHeight+'px');
//        }) 
//    }else{
//        $('#main-container > div').each(function(index, elem){
//              elem.removeAttribute('style');
//        }) 
//    }
    
    $('.rety').click(function(){
        if($(this).parent().hasClass('open')){
            $(this).parent().removeClass('open');
        }else{
            $(this).parent().addClass('open');
        }
    })
    
    smoothScroll.init();
    $('ul.navbar-nav li a.circle').click(function(elem, index){
       $(this).parent().addClass('active');
       $(this).parent().removeClass('next');
       $(this).parent().removeClass('visited');
        
       $(this).parent().nextAll().removeClass('active');
       $(this).parent().prevAll().removeClass('active');
        
       $(this).parent().nextAll().addClass('next');
       $(this).parent().prevAll().addClass('visited');
        
       $(this).parent().nextAll().removeClass('visited');
       $(this).parent().prevAll().removeClass('next');
    });
    
    var elem0,elem1,elem2,elem3,elem4;
       $('#main-container > div').each(function(index,elem){
           if(index==0)elem0=elem;
            if(index==1)elem1=elem;
            if(index==2)elem2=elem;
            if(index==3)elem3=elem;
            if(index==4)elem4=elem;
       })
    
    window.onscroll = function(){
        offset = window.pageYOffset || document.documentElement.scrollTop;
       To();
    }
})

document.getElementById('main-container').style.display='none';
$(window).resize(function(){
    var $spy = $(this).scrollspy('refresh')
    $('#top').innerHeight(window.innerHeight);
//     if(window.innerHeight > 675 && $(window).innerWidth() > 768){
//       $('#main-container > div').each(function(index, elem){
//         elem.setAttribute('style','height:'+window.innerHeight+'px');
//        }) 
//    }else{
//        $('#main-container > div').each(function(index, elem){
//              elem.removeAttribute('style');
//        }) 
//    }
    
})
$(window).load(function() {
    setTimeout(function(){
        $("#loading").fadeOut(500);
    document.getElementById('main-container').style.display='block';
    },100)
	
})