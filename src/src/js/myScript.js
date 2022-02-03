

let sum = 5000;
let tipTwo = 0;
let inv =0;
function type() {
    
   let tip = 1
    
    if (tip == 0)sum+=5000;
    
    if (tip == 1)sum+=10000;
    
    if (tip == 2)sum+=15000;
    
    if (tip == 0)tipTwo="Сайт-визитка" ;
    
    if (tip == 1)tipTwo="Корпоротивный сайт"; 
    
    if (tip == 2)tipTwo="Интернет-магазин" ; 
    
    if (tip >2)inv="Недопустимое значение";
    
    
    
    if (tip<=2) ;
    if (tip<=2) ;
    if (tip>2) ;
    
    
    
}


let invTwo = 0;
let sumTwo = 0;
let designTwo = 0;

function typeTwo() {
    
    let design = prompt (" 0 - Простой дизайн  1 - Бизнес дизайн  2 - Вау-дизайн ");
    
    if (design == 0)sumTwo+=5000;
    
    if (design == 1)sumTwo+=10000;
    
    if (design == 2)sumTwo+=15000;  
    
    if (design == 0)designTwo="Простой дизайн";
    
    if (design == 1)designTwo="Бизнес дизайн";
    
    if (design == 2)designTwo="Вау-дизайн"; 
    
    if (design >2)invTwo="Недопустимое значение";
    
    
    if (design <=2) ;
    if (design <=2) ;
    if (design >2) ;
}



let sumThree = 5000;
let invThree = 0;
let AdaptabilityTwo = 0;

function typeThree() {
    let Adaptability = prompt (" 0 - Под ПК  1 - Под Телефоны  2 - Под всё вместе ");
    
    if (Adaptability == 0)sumThree+=5000; 
    
    if (Adaptability == 1)sumThree+=10000;
    
    if (Adaptability == 2)sumThree+=15000;
        
    if (Adaptability == 0)AdaptabilityTwo="Под ПК";
    
    if (Adaptability == 1)AdaptabilityTwo="Под Телефоны";
    
    if (Adaptability == 2)AdaptabilityTwo="Под всё вместе";
    
    if (Adaptability > 2)invThree="Недопустимое значение";
    
    
    
    if (Adaptability <=2) ;
    
    if (Adaptability <=2) ;
    
    if (Adaptability >2) ;
    
    alert(sum+sumTwo+sumThree);
    
};











   





$(document).ready(function() {
    
    let options = { threshold: [1]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i,el) => {
        observer.observe(el);
    });
    
    function onEntry (entry){
  entry.forEach(change =>{
      if (change.isIntersecting){
          change.target.classList.add('show-animation');
          
      } 
});


}
    
    $(window).scroll(() =>{
    let scrollDistance = $(window).scrollTop();
    
    $(".section").each((i, el) =>{
        
        if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
            $("nav a").each((i, el) => {
                if ($(el).hasClass("active")){
                    $(el).removeClass("active");
                }
            });
            
            $('nav li:eq('+ i +')').find('a').addClass('active');
        }
    });
    
});
});



$(document).ready(function(){


});










/*
function dcf() {
    var n = document.getElementById("sel").text;
    document.getElementById("demo").innerHTML = n;
};

document.querySelector("#fgh").onclick = function(){
    let p = document.getElementById("sel").text;
  if (sel.options[sel.selectedIndex].value);
};


let n = (sel.options[sel.selectedIndex].value);
*/

document.querySelector("#fgh").onclick = function(){
    let n = (sel.options[sel.selectedIndex].value);
    if (n==1){
    newvar ="15000"};
    if (n == 2){
        newvar = "20000"
    };
    if (n == 3){
        newvar = "25000"
    };
    
    let m = (nel.options[nel.selectedIndex].value);
    

    
    if (m == 1)newvar=parseInt(newvar)+5000;
    
    if (m == 2)newvar=parseInt(newvar)+10000;
    
    if (m == 3)newvar=parseInt(newvar)+15000;
    
    
    let d = (ada.options[ada.selectedIndex].value);
    
    if (d == 1)newvar=parseInt(newvar)+5000;
    
    if (d == 2)newvar=parseInt(newvar)+10000;
    
    if (d == 3)newvar=parseInt(newvar)+15000;
    
    
    
    
    
    
    
    
  isid.innerHTML=newvar
}






