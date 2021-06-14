import React, { useContext } from 'react';
import { ApiContext } from "../../context/Context";

// const data = {
//     color: '#fff',
//     name: 'BMW'
// }

//let color = ['#a69494', '#de2c2c', '#8b2cde', '#2c4ade', '#edeff7', '#54e38b', '#ebeb3b', '#eb610c', '#870e09'];
let name = ['Tesla', 'Mersedes', 'BMW', 'Ford', 'Lada', 'Audi', 'Bentley', 'Fiat', 'Kia'];
function get_random_color()
{
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length === 1 ? "0" + sub : sub);
    }
    return "#" + color;
}

export default function RaseResetGenerate() {
    const context = useContext(ApiContext);

    async function createCar() {
        const data = {
            color: '',
            name: ''
        }
        for (let i = 0; i < 50; i++) {
            function giveRandomIndex(callback,  arr1) {
                let randNumber = Math.floor(Math.random() * arr1.length);
                data.color = callback()
                data.name = arr1[randNumber]
            }
            giveRandomIndex(get_random_color, name)
            if (data) {
                await fetch('http://localhost:3000/garage', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
            }
            context.getCar()
        }
    }

    const screenWidth = window.screen.width - 220;
    function  raseCar(){
 context.state.currentDataCar.forEach(element => {
    console.log(element.id)
    //  let carCharacteristics =  context.getVelocity(element.id, 'started');
        let start = new Date().getTime();
        let timer = setInterval(function () {
            let timePassed = new Date().getTime() - start;
            let newDistance = (0 + (timePassed / 1000) * 50)
            console.log(newDistance  )
            try {
                element.style.transform = 'translateX(' + newDistance + 'px)';
                // myRef.current.style.transform = 'translateX(' + Math.min(timePassed / 5) + 'px)';
                if (newDistance > screenWidth) {
                    context.putWinners(element.id, element.name, timePassed, element.color)
                    clearInterval(timer);
                    // setModal(true)
                    // setTime(timePassed)
                };
            } catch {
                clearInterval(timer);
            }
        }, 20);
       });
   }

    return (
        <div>
            <button className='btn' onClick={raseCar}>Race</button>
            <button className='btn'>Reset</button>
            <button className='btn' onClick={createCar}>Generate cars</button>
        </div>
    )
}

// const requests = Array(1000)
//   .fill(this.garageService.generateRandomCar())
//   .map(opt => this.api.createCar(opt));
// await Promise.all(requests)