import React from "react";

class Form extends React.Component {
    state = {
        firstName: '',
        email: '',
        message: '',
        select: '',
        subscription: false,
        gender: '',
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleCheckboxChange = (event) => {
        this.setState({[event.target.name]: event.target.checked })
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
        const {firstName, email,message, select, subscription, gender} = this.state
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
            <br />
            <textarea 
            cols='45'
            rows='10'
            name="message"
            value={message}
            onChange={this.handleChange}
            />
            <br />
            <select name="select" value={select} onChange={this.handleChange}>
                <option value="" disabled></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <br />
            <label>
            <input 
            type="checkbox" 
            name="subscription" 
            checked={subscription}
            onChange={this.handleCheckboxChange}
            />
            Subscription
            </label>
            <br />
            <input type="radio" name="gender" value="male" onChange={this.handleChange} checked={gender === 'male'}/> Male
            <input type="radio" name="gender" value="female" onChange={this.handleChange} checked={gender === 'female'}/> Female
            
        </div>
        
    }
}

export {Form}