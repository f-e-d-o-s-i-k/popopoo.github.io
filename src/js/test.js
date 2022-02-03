let options = {threshold: [0.5]};
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
