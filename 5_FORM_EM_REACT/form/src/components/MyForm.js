import './MyForm.css'
import {useState} from 'react'

const MyForm = () => {
    // 3 - gerenciamento de dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value)
    }

    // console.log(name)
    // console.log(email)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Enviando o formulario')
        console.log(name)
        console.log(email)
    }

  return (
    <div>
        {/* Simplificação de form */}
        {/* 1 - criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                type="text" 
                name="name" 
                placeholder="Digite o seu nome"
                onChange={handleName} 
                />
                {/* 2 - label envolvendo input */}
                <label>
                    <span>E-mail:</span>
                    {/* Simplificação de formulario */}
                    <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <input type="submit" value="Enviar" />
            </div>
        </form>
    </div>
  )
}

export default MyForm