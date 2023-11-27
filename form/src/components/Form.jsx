import React from "react";

class Form extends React.Component {
    state = {
        firstName: '',
        email: '',
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    validateName = () => {
        if (this.state.firstName.length < 5) {
            alert('Нужно больше букв')
        }
    }

    validateEmail = () => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(this.state.email)) {
            alert ("введите почту")
        }
    }

    render () {
        const {firstName, email} = this.state
        return <div>
            <input 
            onChange={this.handleChange}
            type="text" 
            name="firstName" 
            placeholder="firstName"
            value ={firstName}
            onBlur={this.validateName}
            />
            <input 
            onChange={this.handleChange}
            type="email" 
            name="email" 
            placeholder="email"
            value ={email}
            onBlur={this.validateEmail}
            />
        </div>
    }
}

export {Form}