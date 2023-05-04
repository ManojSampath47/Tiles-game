alert(`Hi Again!\n\nWelcome to my first game made in HTML, CSS and JS!!!\n\nThe game is very simple: Click the tile when it turns red colour. Your score will increase as you click the red tiles.\n\nHope you'll like my first game!\n\nAlso, do comment your high scores!\n\nUpdate: Add timer of 1 Minute\n\nBest Of Luck 👍`);

window.score = 0;
    window.seconds = 0;
    window.ended=false;
    setInterval(() => {
    if (window.ended==false){
        let randomTile = Math.floor(Math.random() * 9);
        document.querySelectorAll('.tile')[randomTile].style.backgroundColor = 'red';
        document.querySelectorAll('.tile')[randomTile].setAttribute('onclick', 'window.score++;this. style.backgroundColor="#ccc";this.removeAttribute("onclick");');
        document.querySelector('.score').innerText = 'Score: ' + window.score;
        setTimeout(() => {
        try{
            document.querySelectorAll('.tile')[randomTile].style.backgroundColor = '#ccc';
            document.querySelectorAll('.tile')[randomTile].removeAttribute('onclick');
            }catch{}
        }, 500);
        }
    }, 500);
    setInterval(() => {
    if (seconds==60){
    window.seconds++;
        window.ended=true;
        document.write('');
        alert('Your Score is '+score+' in 1 minute!');
    }
    else{
    if (window.ended==false){
        window.seconds++;
        document.querySelector('.time').innerText = 'Seconds: ' + seconds;
        }
        }
    }, 1000);