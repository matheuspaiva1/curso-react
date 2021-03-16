import React from 'react'
import { Titulo } from './Titulo'

export const Produtos = () => {

    const produtos = [
        {nome: 'Notebook', propriedades: ['16gb ram', '512gb']},
        {nome: 'Smartphone', propriedades: ['2gb ram', '128gb']},
    ]
    
    return (
        <div>
            <Titulo texto="Produtos"/>
            {produtos.map(({nome, propriedades}) => <section>
                <p> {nome} </p>
                {propriedades.map((dados) => <ul>
                    <li> {dados} </li>
                </ul>
            )}
            </section>
        )}
                
            
        </div>
    )
}

export default Produtos
