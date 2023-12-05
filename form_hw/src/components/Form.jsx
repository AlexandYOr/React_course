import { Component } from "react";

class Form extends Component {
    state = {
        email: '',
        checkbox: false
    }

    handleChangeInput = (e) => {
        this.setState((state) => {
            return {
                ...state,
                email: e.target.value
            }
        })
    } 

    handleChangeCheckbox = () => {
        this.setState((state) => {
            return {
                ...state,
                checkbox: !state.checkbox
            }
        })
    }
    
    validateEmail = () => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(this.state.email)) {
            alert ("Введите корректную почту! Пример: ivanov@domen.ru")
        }
    }

    handleChangeButton = () => {
        if (this.state.checkbox) {
            alert('Спасибо за подписку!')
            this.setState((state) => {
                return {
                    ...state,
                    email: '',
                    checkbox: !state.checkbox
                }
            })
        } else {
            alert('Примите согласие на использование персональных данных!')
        }
        
    }


    render () {
        return (
            <div className="form">
                <input 
                onChange={this.handleChangeInput} 
                type="text" 
                value={this.state.email}
                onBlur={this.validateEmail}
                />
                <input onChange={this.handleChangeCheckbox} type="checkbox" checked={this.state.checkbox}/> 
                <button onClick={this.handleChangeButton}>Subscribe</button>   
            </div>
        )
    }
}

export { Form }