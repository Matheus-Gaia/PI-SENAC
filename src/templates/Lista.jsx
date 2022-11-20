import React from 'react'

const Lista = ({ filtrados, setLista, lista }) => {
    const listaInstituicoes = filtrados.map((inst) => (
        <li key={inst.id} className='Card'>
            <div className='Nome'>{inst.nome}</div>
            <div className='Outros'>{inst.endereco.cidade}</div>
            <div className='Outros'>{inst.endereco.logradouro} - nº{inst.endereco.numero}</div>
            <div className='Outros'>{inst.tel}</div>
        </li>
    ))

    return (
        <>
            <header className='header header2'>
                <button className="return" onClick={() => setLista(!lista)}></button>
                LISTAGEM
            </header>
            <div className='Lista'>
                <ul>
                    {listaInstituicoes}
                </ul>
            </div>
        </>
    )
}

export default Lista