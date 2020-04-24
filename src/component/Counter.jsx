import React, { useState, useEffect } from "react";
//import randomcolor from "randomcolor"

const Counter = (props) => {
    //console.log('props', props)
    const [counter, setCounter] = useState(Number(props.initcounter.val))
    // const [color, setColor] = useState("")
    // const [pause, setPause] = useState(false)
    // const [timer, setTimer] = useState(null);

    // function increment(){
    //     setCounter(precount => precount + 1) 
    // }
    // function decrement(){
    //     setCounter(precount => precount -1)
    // }


    // useEffect(() => {
    //     if(pause){
    //         clearInterval(timer)
    //     }
    //     else{
    //         const intervalId = setInterval(() => {
    //             setCount(precount => precount + 1)
    //         }, 1000)
    //         setTimer(intervalId)
    //     }
    //     return () => {clearInterval(timer)}
    // },[pause])

    // useEffect(() => {
    //     setColor(randomcolor())   
    // }, [count])

    return(
        <>
            <div className="d-flex justify-content-center align-items-center" >
                <button type="button" className="btn btn-info mr-3" onClick={() => props.counterIncrement(props.initcounter)}>+</button>
                <h1 className="mr-3 mb-0">{props.initcounter.val}</h1>
                <button type="button" className="btn btn-warning mr-3" onClick={() => props.counterDecrement(props.initcounter)}>-</button>
                {/* <button type="button" className="btn btn-primary mr-3" onClick={() => setPause(true)}>stop</button>
                <button type="button" className="btn btn-success mr-3" onClick={() => setPause(false)}>start</button> */}
                <button type="button" className="btn btn-danger" onClick={() => props.counterDelete(props.initcounter.id)}>Delete</button>
            </div>
        </>
    )
}
export default Counter;