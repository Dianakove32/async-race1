import React, { useState, useContext  } from 'react';
import { ApiContext } from "../../context/Context";



export default function UpdateCar() {
    const context = useContext(ApiContext);
    const [data, setData] = useState({ color: '', name: '' })
    function setCarColor(e) {
        let color = e.target.value
        if (!color) return
        setData({
            ...data,
            color: color
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



    async function updateCar() {

          let id=context.state.id
          console.log(id)
        await fetch(`http://localhost:3000/garage/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
          context.getCar()
    }
    return (
        <div>
            <input type='text' onChange={(e) => setCarModel(e)} />
            <input type="color"  onChange={(e) => setCarColor(e)} />
            <button className="btn" onClick={updateCar} >Update car</button>


        </div>
    )
}

