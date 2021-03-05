import React from 'react'
import Input from './Input'
import Button from './Button'

function form() {
    return (
        <form>
            <p>
                <label htmlFor="nome">Nome</label>
                <Input/>
            </p>

            <p>
                <label htmlFor="mail">E-mail</label>
                <Input/>
            </p>
            <Button/>
            
        </form>
    )
}

export default form