import { useState } from "react";

const HookUseState = () => {
    // 1 - useState
    let userName = "João";

    const [name, setName] = useState("daniel");

    const handleSubmit = (e) => {
        e.preventDefault();

        // envio a uma api
        console.log(age);
    };

    const changeNames = () => {
        userName = "João Souza";
        setName("Daniel Antunes");

        console.log(userName);
    };

    console.log(name);

    // 2 - useState e input
    const [age, setAge] = useState(18);

    return (
        <div>
            {/* 1 - useState */}
            <h2>useState</h2>
            <p>Variavel: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Mudar Nome</button>
            {/* 2 - useState e input */}
            <p>Digite a sua idade</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <input type="submit" value="Enviar" />
            </form>
            <p>Você tem {age} anos</p>
            <hr />
        </div>
    );
};

export default HookUseState;
