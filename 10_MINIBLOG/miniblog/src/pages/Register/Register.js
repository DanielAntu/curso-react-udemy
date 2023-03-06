import { useAuthentication } from '../../hooks/useAuthentication'
import styles from './Register.module.css'

import {useState, useEffect} from 'react'

const Register = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const {createUser, error: authError, loading} = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")

        const user = {
            displayName,
            email,
            password
        }

        if (password !== confirmpassword) {
            setError('As senhas precisam ser iguais!')
            return
        }

        const res = await createUser(user)

        console.log(res)
    }

    useEffect(() => {
        if(authError) {
            setError(authError)
        }
    }, [authError])

  return (
    <div className={styles.register}>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuário e compartilhe suas histórias</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input 
                type="text" 
                name='displayName' 
                required 
                placeholder='Nome do usuário'
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                />
            </label>

            <label>
                <span>E-mail:</span>
                <input 
                type="email" 
                name='email' 
                required 
                placeholder='E-mail do usuário'
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                />
            </label>

            <label>
                <span>Senha:</span>
                <input 
                type="password" 
                name='password' 
                required 
                placeholder='Senha do usuário'
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                />
            </label>

            <label>
                <span>Confirme sua Senha:</span>
                <input 
                type="password" 
                name='confirmpassword' 
                required 
                placeholder='Confirme a senha'
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </label>

            {!loading && <button className='btn'>Cadastrar</button>}
            {loading && <button className='btn' disabled>Aguarde...</button>}
            {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}

export default Register