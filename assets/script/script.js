/// Scroll Bar
const progressbar = document.querySelector('.progress-bar');

window.addEventListener('scroll', ()=>{
    const winScroll = window.pageYOffset;
   const height = document.documentElement.scrollHeight - window.innerHeight;
   const scrolled = (winScroll/height) * 100;
   progressbar.style.width = `${scrolled}%`
   
})
//// end scroll
/// fading header background
const bg = document.querySelector('.frontpage');

window.addEventListener('scroll', function(){
    bg.style.opacity = 1 - +window.pageYOffset/600
})
//// end fading
/// to top button
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll',function(){
    if(window.pageYOffset > 400){
        toTop.classList.add('active');
    }else{
        toTop.classList.remove('active');
    }
})
//// end top button
/// text animation 
const text = ['Clean . Slick . Pixel Perfect'];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";


(function type(){

    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

   document.querySelector('.header_titel').textContent = letter;
   if(letter.length === currentText.length){
       count++;
       index =0;
   }

   setTimeout(type, 200)

})()
//// end text animation
/// video player board
const videoPlayer = document.querySelector('#videoPlayer');
const myVideo = document.querySelector('#myVideo');


function stopPlayer(){
    videoPlayer.style.display = 'none';
}

function playVideo(file){
    myVideo.src = file
    videoPlayer.style.display = 'block'
}
//// end video player board
/// counting form character
(function(){
    document.addEventListener('keyup',  (event)=>{
        if(event.target.matches('.count-chars')){
            const value = event.target.value;
            const valueLength = event.target.value.length;
            const maxChars = event.target.getAttribute('data-max-chars');
            const remaining = maxChars - valueLength;
            const charleft=document.querySelector(".textlength")
            if(valueLength > maxChars){
                event.target.value = value.substr(0, maxChars);
                return;
            }
            charleft.innerHTML = remaining + " Character Remains"
        }
    })
})();
//// end counting form character
/// counter section
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 1500;

        if(c<target){
            counter.innerText = Math.ceil(c + increment);
            setTimeout(updateCounter, 1)
        }else{
            counter.innerText = target
        }

    }

    updateCounter()

})
//// end counter section
/// slider testimonial
const slides = document.querySelector('.testimonial').children;
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const totalSlide = slides.length;
console.log(slides)
let index2 = 0;
let duration = 8000;

next.onclick = ()=>{
    slide('next');
}

prev.onclick = ()=>{
    slide('prev');
}


function slide(direction){
    progress()
    if(direction=='next'){
        if(index2 == totalSlide-1){
            index2 = 0;
        }else{
            index2 ++;
        }
    }

    if(direction=='prev'){
        if(index2 == 0){
            index2= totalSlide-1
        }else{
            index2 --;
        }
    }


    clearInterval(timer);
    timer = setInterval(autoSlide, duration)
    
    for(let i =0; i<slides.length; i++){
        slides[i].classList.remove('active')
    }

    slides[index2].classList.add('active')
  
}
function progress(){
    document.querySelector('.progress-silder').innerHTML = '';
    const div = document.createElement('div');
        div.style.height = '5px';
        div.style.width = '0px';
        div.style.position = 'absolute';
        div.style.top = '0';
        div.style.left = '0';
        div.style.backgroundColor= 'red';
        div.id = 'progress';
        div.style.animation = 'progress' + duration/1000 + "s linear";
        document.querySelector('.progress').appendChild(div)
}



function autoSlide(){
    slide('next');
}

let timer = setInterval(autoSlide, duration)

progress();


//// end slider testimonial
//// entrance gif
const intro = document.querySelector(".intro");


window.addEventListener('DOMContentLoaded', function(){
    setTimeout(() => {
        intro.style.top = "-100vh"
    },3000)
})
///end entrance gif
//// side menu
const sidebar = document.querySelector('.sidebar');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    sidebar.style.visibility = 'visible';
})
/// end side menu