import React from 'react'

function Produto() {

    React.useEffect(() => {
        // pode definir functions
        function handleScroll (event) {
            console.log(event)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            // usa para mostrar os dados na tela
            window.removeEventListener('scroll', handleScroll) // precisa declarar uma função
        }
    }, [])



    return (
        <div style={{height: '200vh'}}>
            <p>Meu produto</p>

            
        </div>
    )
}

export default Produto
