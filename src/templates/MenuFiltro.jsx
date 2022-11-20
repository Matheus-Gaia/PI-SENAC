import instituicoes from '../data/instituicoes';

const MenuFiltro = ({ setLista, lista, setFiltrados }) => {

    const filterHandle = (dispositivo) => {
        setFiltrados(instituicoes.filter(inst => inst.prioridade === dispositivo))
    }


    return (
        <div className='MenuFiltro'>
            <div className='title'>
                <h3>Grupos Digitais</h3>
            </div>
            <div className='btns'>
                <button className='menuItem' value="Computador" onClick={e => filterHandle(e.target.value)}>Computador</button>
                <button className='menuItem' value="Notebook" onClick={e => filterHandle(e.target.value)}>Notebook</button>
                <button className='menuItem' value="Tablet" onClick={e => filterHandle(e.target.value)}>Tablet</button>
                <button className='menuItem' value="Smartphone" onClick={e => filterHandle(e.target.value)}>Smartphone</button>
                <button className='menuItem' value="Perifericos" onClick={e => filterHandle(e.target.value)}>Periféricos</button>
            </div>
            <button className='botaoFiltro' value={lista} onClick={() => setLista(!lista)}>Listar</button>
        </div>
    )
}

export default MenuFiltro