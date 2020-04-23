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

    function Delete(id){
        console.log("delete", id)
        let counters = initcounters.filter(counter => counter.id !== id)
        setInitcounters(counters)
    }

    function counterCreate(){
        let addId = initcounters.length + 1
        setInitcounters([...initcounters, {id: addId, val: 0}])
        console.log(initcounters[0].id)
    }
    return(
        <>
            <div className="container">
                <div>
                    <h3>{initcounters.length}</h3>
                </div>
                <button type="button" className="btn btn-info" onClick={counterCreate}>add</button>
                {initcounters.map(counter =><Counter key={counter.id} initcounter={counter} counterDelete={Delete} />)}
            </div>
        </>
    )
}

export default CounterList