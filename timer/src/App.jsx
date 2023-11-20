import React, { Component } from 'react';
import './App.css';


class App extends Component {
    state = {
        seconds: 0,
        interval: null
    }


    handleStart = () => {
        this.setState((state) => {
            return {
                ...state,
                interval: setInterval(() => {
                    this.setState((state) => {
                        return {
                            ...state,
                            seconds: state.seconds - 1,
                        }
                    })
                }, 1000)
            }
        })
    }
    handleStop = () => {
        clearInterval(this.state.interval)
        this.setState((state) => {
            return {
                ...state,
                interval: null
            }
        })
    }

    handleIncrement = () => {
        this.setState((state) => {
            return {
                ...state,
                seconds: state.seconds + 5
            }
        })
    }
    handleDecrement = () => {
            this.setState((state) => {
                return {
                    ...state,
                    seconds: state.seconds - 5
                }
            })        
    }
    componentDidUpdate() {
        if (this.state.seconds === 0) {
            clearInterval(this.state.interval)
            if (this.state.interval) {
                this.setState((state) => {
                    return {
                        ...state,
                        interval: null
                    }
                })
            }
        }
        
    }
    componentWillUnmount() {
        clearInterval(this.state.interval)
    }
    render() {
        return (
            <>
                <div className='timer'>
                    <button onClick={this.handleStart} disabled={!!this.state.interval }>start</button>
                    <h3>{this.state.seconds}</h3>
                    <button onClick={this.handleStop}>stop</button>
                </div>
                <div className='buttons'>
                    <button onClick={this.handleIncrement} disabled={!!this.state.interval}>+</button>
                    <button onClick={this.handleDecrement} disabled={!!this.state.interval || this.state.seconds <= 5 ? true : false}>-</button>
                </div>
            </>


        )
    }
}


export default App;
