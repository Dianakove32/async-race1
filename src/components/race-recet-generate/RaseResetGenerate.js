import { Modal } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { ApiContext } from "../../context/Context";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
        '@media all and (-ms-high-contrast: none)': {
            display: 'none',

        },
    },
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

let name = ['Tesla Cybertruck', 'Mersedes Bebz', 'BMW I8', 'Ford F150', 'Lada NIVA', 'Audi A4', 'Bentley', 'Fiat 500', 'Kia NIRO',
'Tesla S', 'Mersedes S63', 'BMW X6', 'Ford Raptor','Tesla X', 'Lada VESTA', 'Kia Seltos','Tesla S Plaid', 'Audi R8', 'Bentley Muslanne','BMW M4', 'Fiat TIPO', 'Kia k5'];
function get_random_color() {
    var color = "";
    for (var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length === 1 ? "0" + sub : sub);
    }
    return "#" + color;
}

export default function RaseResetGenerate() {
    const [modal, setModal] = useState(false)
    const [time, setTime] = useState(null)
    const context = useContext(ApiContext);
    useEffect(() => {
        getCurrentData()
    },[] )

function getCurrentData(){
    return context.state.currentPage
}

    const classes = useStyles();
    const rootRef = React.useRef(null);
    console.log(context.state.currentDataCar)

    const cars = Array.from(document.querySelectorAll('.SomeElementYouWantToAnimate'))
    async function createCar() {
        const data = {
            color: '',
            name: ''
        }
        for (let i = 0; i < 50; i++) {
            function giveRandomIndex(callback, arr1) {
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

    async function raseCar() {


        let winner = null;
        for (let i = 0; i < cars.length; i++) {
console.log(context.state.currentDataCar)
            let carCharacteristics = await context.getVelocity(context.state.currentDataCar[i].id, 'started');
            let start = new Date().getTime();
            // eslint-disable-next-line no-loop-func
            let timer = setInterval(function () {
                let timePassed = new Date().getTime() - start;
                let newDistance = (0 + (timePassed / 1000) * carCharacteristics.velocity)

                try {
                    cars[i].style.transform = 'translateX(' + newDistance + 'px)';
                    if (newDistance > screenWidth) {
                        if (!winner) {
                            winner = cars[i]
                            context.putWinners(context.state.currentDataCar[i].id, context.state.currentDataCar[i].name, timePassed, context.state.currentDataCar[i].color)
                            setModal(true)
                            clearInterval(timer)
                            setTime(timePassed)
                        } else {
                            clearInterval(timer);
                            setModal(false)
                        }
                        //
                        //     context.state.currentDataCar[i].name,
                        //     timePassed, context.state.currentDataCar[i].color)

                        //
                        // setTime(timePassed)
                    };
                } catch {
                    clearInterval(timer);
                }
            }, 20);
        }
    }

    setTimeout(() => {
        setModal(false)
    }, 3000);

    function resetCar() {

        for (let i = 0; i < cars.length; i++) {
            try {
                cars[i].style.transform = '';
                // ARef.current.style.color = ""
                // BRef.current.style.color = ""

            } catch {

            }

        }
    }



    return (
        <div>
            <button className='btn' onClick={raseCar}>Race</button>
            <button className='btn' onClick={resetCar}>Reset</button>
            <button className='btn' onClick={createCar}>Generate cars</button>
            <Modal
                open={modal}
                className={classes.modal}
                container={() => rootRef.current}>
                <div>
                    {/* <h2><b>{data.name}</b> finished in {(time / 1000).toFixed(2)} second</h2> */}
                    <h2>The best time  {(time / 1000).toFixed(2)} second</h2>
                </div>
            </Modal>
        </div>
    )
}

// const requests = Array(1000)
//   .fill(this.garageService.generateRandomCar())
//   .map(opt => this.api.createCar(opt));
// await Promise.all(requests)

//  context.state.currentDataCar.forEach(async (element) => {
//     console.log(element.id)
//       let carCharacteristics = await context.getVelocity(element.id, 'started');
//         let start = new Date().getTime();

//         let timer = setInterval(function () {
//             let timePassed = new Date().getTime() - start;
//             let newDistance = (0 + (timePassed / 1000) * carCharacteristics.velocity)
//             console.log(newDistance  )
//             try {
//                 element.style.transform = 'translateX(' + newDistance + 'px)';
//                 // myRef.current.style.transform = 'translateX(' + Math.min(timePassed / 5) + 'px)';
//                 if (newDistance > screenWidth) {
//                     context.putWinners(element.id, element.name, timePassed, element.color)
//                     clearInterval(timer);
//                     // setModal(true)
//                     // setTime(timePassed)
//                 };
//             } catch {
//                 clearInterval(timer);
//             }
//         }, 20);
//        });