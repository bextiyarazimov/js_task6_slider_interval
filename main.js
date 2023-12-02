
let mainimg = document.querySelector('img');
let images = ['slide images/image_1.jpg', 'slide images/image_2.jpg', 'slide images/image_3.jpg', 'slide images/image_4.jpg'];
let num=0;
// const auto=true;
// const IntervalTime=3000;
let slideInterval

function next() {
    num++
    if(num>=images.length){
      num=0;
      mainimg.src=images[num]
    }else{
        mainimg.src=images[num]
    }
    
}


function back (){
    num--
    if(num<0){
        num=images.length-1
        mainimg.src=images[num]
    }else{
        mainimg.src=images[num]
    }
}
if(auto){
    slideInterval=setInterval(next,IntervalTime)
}