score = 0;
cross = true;

audiogo = new Audio('gameover.mp3');
audio = new Audio('music.mp3');
setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown = function(e){
    console.log("The key code is : ",e.keyCode);
    if (e.keyCode==38) {
        cycle = document.querySelector('.cycle');
        cycle.classList.add('animatecycle');
        setTimeout(() => {
            cycle.classList.remove('animatecycle');
        }, 700);
    }
    if (e.keyCode==39) {
        cycle = document.querySelector('.cycle');
        cyclex = parseInt(window.getComputedStyle(cycle,null).getPropertyValue('left'));
        cycle.style.left = cyclex + 112 + 'px';
        
    }
    if (e.keyCode==37) {
        cycle = document.querySelector('.cycle');
        cyclex = parseInt(window.getComputedStyle(cycle,null).getPropertyValue('left'));
        cycle.style.left = (cyclex - 112) + 'px';
        
    }
}

setInterval(() => {
    cycle = document.querySelector('.cycle');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    cx = parseInt(window.getComputedStyle(cycle,null).getPropertyValue('left'));
    cy = parseInt(window.getComputedStyle(cycle,null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetx = Math.abs(cx-ox);
    offsety = Math.abs(cy-oy);
// console.log(offsetx , offsety)
    if (offsetx<73 && offsety<52) {
        gameover.innerHTML = 'Game Over - Reload to play again';
        obstacle.classList.remove('obstacleani');
      
        audiogo.play();
         setTimeout(() => {
            
            audio.pause();
         }, 500);
         setTimeout(() => {
             audiogo.pause();
         }, 4000);
        }
        else if(offsetx<145 && cross){
            score+=1;
            updatescore(score);
            cross=false;
            setTimeout(() => {
                cross=true;
            }, 1000);
            setTimeout(() => {
                aniduration = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
                newdur = aniduration - 0.5;
                obstacle.style.animationduration = newdur + 's';
            }, 500);
        }
}, 10);
function updatescore(score){
    scorecont.innerHTML = "Your score is : " + score;
}