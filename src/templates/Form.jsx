import React, { useState } from 'react'

const Form = ({ setSuccess }) => {
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    
    const handleLogin = (e) => {
        e.preventDefault()
        setSuccess(true)
    }

    return (
        <>
            <form onSubmit={handleLogin} className="Login">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id='email'
                    placeholder='email@abc.com'
                    autoComplete='off'
                    onChange={e => setUser(e.target.value)}
                    value={user}
                    required
                />
                <label htmlFor="senha">Senha</label>
                <input
                    type="password"
                    id='senha'
                    placeholder='Senha (8 digitos)'
                    autoComplete='off'
                    onChange={e => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <p>Esqueceu a senha?</p>
                <button className='button'>Login</button>
            </form>
            <div className="criar">
                <p className='ou'>Ou</p>
                <p>Criar conta?</p>
            </div>
        </>
    )
}

export default Form