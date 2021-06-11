import React, { useContext } from 'react';
import { ApiContext } from "../../context/Context";

const data = {
    color: '#fff',
    name: 'BMW'
}

export default function RaseResetGenerate() {

    const context = useContext(ApiContext);
    // useEffect(() => {
    //     context.getCar()
    // }, [context, context.state.data])

    async function createCar() {
        for (let i = 0; i < 30; i++) {
            if (!data.name) {
                alert('Write model')
            } else {
                await fetch('http://localhost:3000/garage', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
            }

        }
        context.getCar()
    }


    return (
        <div>
            <button className='btn'>Race</button>
            <button className='btn'>Reset</button>
            <button className='btn' onClick={createCar}>Generate cars</button>
        </div>
    )
}

// const requests = Array(1000)
//   .fill(this.garageService.generateRandomCar())
//   .map(opt => this.api.createCar(opt));
// await Promise.all(requests);