const Challenge = () => {
    const a = 10
    const b = 20

    const SomarValor = () => {
        console.log(a + b)
    }

    return (
        <div>
            <h1>Tarefa</h1>
            <p>1º valor: {a}</p>
            <p>2º valor: {b}</p>

            <button onClick={SomarValor}>Soma!</button>
        </div>
    )
}

export default Challenge;