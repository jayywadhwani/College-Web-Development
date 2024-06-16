const sliders = document.querySelectorAll(".slider");
let counter=0;
sliders.forEach((slider,index)=>{
    slider.style.left = `${index * 100}%`;
});
const gonext = () =>{
    counter++;
    sliderss();
}
const goprev = () =>{
    counter--;
    sliderss();
}
const sliderss = () =>{
    sliders.forEach((slide)=>{
        if(counter===sliders.length){
            counter=0;
            slide.style.transform = `translateX(-${counter * 100}%)`;
        }else{
            slide.style.transform = `translateX(-${counter * 100}%)`;
        }
    });
}