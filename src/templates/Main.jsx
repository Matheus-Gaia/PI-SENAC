import React, { useState } from 'react'
import Map from '../components/Map'
import MenuFiltro from './MenuFiltro'
import Lista from './Lista'


const Main = () => {

    const [lista, setLista] = useState(true)
    const [filtrados, setFiltrados] = useState([])

    return (
        <>
            {lista ?
                (<>
                    <header className='header'>
                        Instituições para doação
                    </header>
                    <Map />
                    <MenuFiltro
                        setLista={setLista}
                        lista={lista}
                        setFiltrados={setFiltrados}
                    />
                </>)
                :
                (<Lista filtrados={filtrados}
                    setLista={setLista}
                    lista={lista}
                />)
            }
        </>
    )
}

export default Main