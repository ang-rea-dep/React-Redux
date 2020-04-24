import React, { useState, useEffect } from "react"
import Counter from "./Counter"


const CounterList = () =>{
    const [initcounters, setInitcounters] = useState([
        {
            id: 1,
            val: 6
        },
        {
            id: 2,
            val: 3
        },
        {
            id: 3,
            val: 10
        },
        {
            id: 4,
            val: 3
        },
    ])

    useEffect(() => {
        setInitcounters(initcounters)
    })

    const increment = counter => {
        const counters = [...initcounters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        counters[index].val++
        setInitcounters(counters)
    }

    function decrement(counter){
        const counters = [...initcounters]
        const index = counters.indexOf(counter)
        counters[index] = {...counter}
        if(counters[index].val >0 )
            counters[index].val--
        setInitcounters(counters)
    }

    function Delete(id){
        let counters = initcounters.filter(counter => counter.id !== id)
        setInitcounters(counters)
    }

    function counterCreate(){
        let addId = initcounters.length + 1
        setInitcounters([...initcounters, {id: addId, val: 0}])
        console.log(initcounters[0].id)
    }

    function counterReset(){
        const counters = [...initcounters]
        counters.map(counter => counter.val = 0)
        setInitcounters(counters)
    }

    const counterLength = () => {
        const counters =  initcounters.filter(counter => counter.val > 0)
        return counters.length
    }
    return(
        <>
            <div className="container">
                <div>
                    <h3>{counterLength()}</h3>
                </div>
                <button type="button" className="btn btn-info mr-3" onClick={counterCreate}>add</button>
                <button type="button" className="btn btn-secondary" onClick={counterReset}>reset</button>
                {initcounters.map(counter =><Counter key={counter.id} initcounter={counter} counterDelete={Delete} counterIncrement={increment} counterDecrement={decrement}/>)}
            </div>
        </>
    )
}

export default CounterList