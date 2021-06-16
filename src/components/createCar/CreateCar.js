import React, { useState, useContext } from 'react';
import { ApiContext } from "../../context/Context";

export default function CreateCar() {
    const context = useContext(ApiContext);

    const [data, setData] = useState({ color: '', name: '' })
    function setCarColor(e) {
        let color = e.target.value
        if (!color) return
        setData({
            ...data,
            color: `${color}`
        })
    }

    function setCarModel(e) {
        let model = e.target.value
        if (!model) return
        setData({
            ...data,
            name: model
        })
    }

    async function createCar() {
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
        context.getCar()
    }


    return (
        <div>

            <input type='text' onChange={(e) => setCarModel(e)} />
            <input type="color" onChange={(e) => setCarColor(e)} />
            <button className="btn" onClick={createCar}>Create car</button>

        </div>
    )
}
