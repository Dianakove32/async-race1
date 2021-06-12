import React from 'react';
import '../index.scss'

export default function Test() {
const [move1,setMove]= React.useState(false)
    const myRef = React.createRef()
    const screenWidth =+ window.screen.width;
    function draw() {
        console.log(myRef.current.style)
        let start = Date.now();
        let timer = setInterval(function () {
            let timePassed = Date.now() - start;
            myRef.current.style.transform = 'translateX(' + Math.min(timePassed / 5) + 'px)';
              if (timePassed > 5000) clearInterval(timer);
        }, 20);
    }

  //  myRef.current.style.transform = 'translateX('+ Math.min(timePassed / 5 + 'px)'
    return (
        <div>
            <img id="train"  src="https://js.cx/clipart/train.gif" alt='' ref={myRef}  onClick={draw}/>
        </div>
    )
}
// className={move1 ? 'move' : null}