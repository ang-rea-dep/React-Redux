import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor"

function Car(){
    const [count, setCount] = useState(0)
    const [answer, setAnswer] = useState("Zero")
    const [color, setColor] = useState("")
    const [stop, setStop] = useState(false)
    const [timer, setTimer] = useState(null);

    function increment(){
        setCount(precount => precount + 1)
        if(count < 0){
            setAnswer("No")
        }
        else{
            setAnswer("Yes")
        }
    }
    function decrement(){
        setCount(precount => precount -1)
        if(count < 0){
            setAnswer("No")
        }
        else{
            setAnswer("Yes")
        }
    }

    useEffect(() => {
        if(stop){
            clearInterval(timer)
        }
        else{
            const intervalId = setInterval(() => {
                setCount(precount => precount + 1)
            }, 1000)
            setTimer(intervalId);
        }
        return () => clearInterval(timer)
        },[stop])

    useEffect(() => {
        setColor(randomcolor())
    }, [answer, count])

    return(
        <>
            <h1 style={{color: color}}>{count}</h1>
            <p style={{color: color}}>{answer}</p>
            <button type="button" onClick={increment}>increment</button>
            <button type="button" onClick={decrement}>decrement</button>
            <button type="button" onClick={() => setStop(true)}>stop</button>
        </>
    )
}
export default Car;