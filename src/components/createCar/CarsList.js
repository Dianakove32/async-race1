import React, { useContext, useEffect } from "react";
import { ApiContext } from "../../context/Context"; import Pagination from "../Pagination/Pagination";
import Spinner from "../Spinner";
import Cars from './Cars';
import './carsList.scss'

let winnersObg = [];

export default function CarsList(props) {
    const context = useContext(ApiContext);

    useEffect(() => {
        setCurrentData()
    }, [context.state.currentPage])

    const deleteItem = async (id) => {
        await fetch(`http://localhost:3000/garage/${id}`, {
            method: 'DELETE',
        })
        await fetch(`http://localhost:3000/winners/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .catch(console.log('e'))
        context.getCar()
    };

    const findItem = (arr, id) => arr.find((el) => el.id === id);
    const selectItem = (id) => {
        let element = findItem(context.state.data, id).id;
        context.setState({
            ...context.state,
            id: element
        });
    };

    const lastDataIndex = context.state.currentPage * context.state.dataPage;
    const allPages = Math.ceil(context.state.data.length / context.state.dataPage);
    const firstDataIndex = lastDataIndex - context.state.dataPage;
    const currentData = context.state.data.slice(firstDataIndex, lastDataIndex);
    const paginate = pageNumber => context.setState({
        ...context.state,
        currentPage: pageNumber
    })

    const nextPage = () => {
        if (context.state.currentPage === allPages) {
            return
        } else {
            context.setState({
                ...context.state,
                currentPage: context.state.currentPage + 1
            })
        }
    }
    function setCurrentData() {

        context.setState({
            ...context.state,
            currentDataCar: currentData
        })

    }

    function prevPage() {
        if (context.state.currentPage === 1) {
            return
        } else {
            context.setState({
                ...context.state,
                currentPage: context.state.currentPage - 1
            })
        }
    }

    return (
        <div className="carsList">
            <h3>Garage ({context.state.data.length})</h3>
            <Pagination paginate={paginate} nextPage={nextPage} prevPage={prevPage} allPages={allPages} />
            {currentData.map(el => <Cars key={el.id} data={el} winnersObg={winnersObg} deleteItem={deleteItem} selectItem={selectItem} />)}

        </div>
    )
}

    // const screenWidth = window.screen.width - 220;
    // console.log(screenWidth)
    // let speed = Math.random() * (80 - 50) + 50;
    // function draw(myRef, data) {
    //     let start = new Date().getTime();
    //     let timer = setInterval(function () {
    //         let timePassed = new Date().getTime() - start;
    //         let newDistance = (0 + (timePassed / 1000) * speed)
    //         myRef.current.style.transform = 'translateX(' + newDistance + 'px)';
    //         // myRef.current.style.transform = 'translateX(' + Math.min(timePassed / 5) + 'px)';
    //         if (newDistance > screenWidth) {
    //             winnersObg.push(data);
    //             clearInterval(timer);

    //         };
    //     }, 20);


    //}

        // const deleteItem =  (id) => {
    //     fetch(`http://localhost:3000/garage/${id}`, {
    //         method: 'DELETE',
    //     }).then((data) => {
    //         console.log(data);
    //       })
    //     .catch(error => console.log(error.message))
    //     .then(
    //         fetch(`http://localhost:3000/winners/${id}`, {
    //             method: 'DELETE',
    //         })
    //         .then(res => res.json())
    //         .catch(console.log('e')))
    //     context.getCar()
    // };