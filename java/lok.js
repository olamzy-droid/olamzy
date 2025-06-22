// const b = document.querySelector('.b')
// const c = document.querySelector('.c')
// const d = document.querySelector('.d')
// const display = document.querySelector('.display')

// let ans = 0;

// // console.log(b)
// // console.log(c)

// b.addEventListener('click', function(){
//     ans +=1
//     display.textContent = ans;
// });

// c.addEventListener('click', function(){
//     ans -=1
//     display.textContent = ans;
// });
// d.addEventListener('click', function(){
//     ans = 0
//     display.textContent = ans;
// });

// b.addEventListener("keyup", function(event) {
//     ans +=1
//     display.textContent = ans;
//     console.log("Key pressed:", event.key);
// });

// c.addEventListener("keyup", function(event) {
//     ans -=1
//     display.textContent = ans;
//     console.log("Key pressed:", event.key);
// });

const video = document.getElementById('vid')
const playPauseBtn = document.getElementById('playPauseBtn')
const see = document.getElementById('see')

playPauseBtn.addEventListener('click', () => {
    if (video.paused || video.ended){
        video.play();
        playPauseBtn.textContent = 'pause';
        See.textcontent = 'Would you like to rate our website?';
    }
    else{
        video.pause();
        playPauseBtn.textContent = 'play';
        See.textContent = 'Would you like to rate our website?';
    }
})

