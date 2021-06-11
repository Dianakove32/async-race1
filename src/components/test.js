import React from 'react'

export default function Test() {
    const myRef = React.createRef()
    function draw() {
        console.log(myRef.current.style)
        let start = Date.now();
        let timer = setInterval(function () {
            let timePassed = Date.now() - start;
            myRef.current.style.left = timePassed / 5 + 'px';
            if (timePassed > 4000) clearInterval(timer);
        }, 20);
    }
    return (
        <div>
            <img id="train" src="https://js.cx/clipart/train.gif" alt='' ref={myRef} onClick={draw}/>
        </div>
    )
}
