import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
    const arr = ['Item 1', 'Item 2']
    return (
        <div>
            <Input label="E-mail" required/>
            <Input label="Password" type="password" required/>
            <Button items={arr}/>
        </div>
    )
}

export default Form
