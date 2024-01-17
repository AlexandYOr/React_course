import React, { Component, useState, useEffect } from 'react';
import './App.css';


function App() {
    const [seconds, setSeconds] = useState(0)
    const [interval, setNewInterval] = useState(null)

    const handleStart = () => {
        setNewInterval(() => setInterval(() => {
            setSeconds((seconds) => seconds - 1)
        }, 1000))
    }

    const handleStop = () => {
        clearInterval(interval)
        setNewInterval(null)
    }

    const handleIncrement = () => {
        setSeconds(seconds + 5)
    }

    const handleDecrement = () => {
        setSeconds(seconds - 5)
    }

    useEffect(() => {
        if (seconds === 0) {
            handleStop()
        }
    })

    return (
        <>
            <div className='timer'>
                <button onClick={handleStart} disabled={!!interval}>start</button>
                <h3>{seconds}</h3>
                <button onClick={handleStop}>stop</button>
            </div>
            <div className='buttons'>
                <button onClick={handleIncrement} disabled={!!interval}>+</button>
                <button onClick={handleDecrement} disabled={!!interval || seconds <= 5 ? true : false}>-</button>
            </div>
        </>
    )
}


// class App extends Component {
//      = {
//         seconds: 0,
//         interval: null
//     }


//     handleStart = () => {
//         setState(() => {
//             return {
//                 ...,
//                 interval: setInterval(() => {
//                     setState(() => {
//                         return {
//                             ...,
//                             seconds: .seconds - 1,
//                         }
//                     })
//                 }, 1000)
//             }
//         })
//     }
//     handleStop = () => {
//         clearInterval(.interval)
//         setState(() => {
//             return {
//                 ...,
//                 interval: null
//             }
//         })
//     }

//     handleIncrement = () => {
//         setState(() => {
//             return {
//                 ...,
//                 seconds: .seconds + 5
//             }
//         })
//     }
//     handleDecrement = () => {
//             setState(() => {
//                 return {
//                     ...,
//                     seconds: .seconds - 5
//                 }
//             })        
//     }
//     componentDidUpdate() {
//         if (.seconds === 0) {
//             clearInterval(.interval)
//             if (.interval) {
//                 setState(() => {
//                     return {
//                         ...,
//                         interval: null
//                     }
//                 })
//             }
//         }

//     }
//     componentWillUnmount() {
//         clearInterval(.interval)
//     }
//     render() {
//         return (
//             <>
//                 <div className='timer'>
//                     <button onClick={handleStart} disabled={!!.interval }>start</button>
//                     <h3>{.seconds}</h3>
//                     <button onClick={handleStop}>stop</button>
//                 </div>
//                 <div className='buttons'>
//                     <button onClick={handleIncrement} disabled={!!.interval}>+</button>
//                     <button onClick={handleDecrement} disabled={!!.interval || .seconds <= 5 ? true : false}>-</button>
//                 </div>
//             </>


//         )
//     }
// }


export default App;
