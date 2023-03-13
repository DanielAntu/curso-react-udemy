import { useEffect, useState } from "react";

const HookuseEffect = () => {
    // 1 - useEffect, sem dependências
    useEffect(() => {
        console.log("Estou sendo executado!");
    });

    const [number, SetNumber] = useState(1);

    const changeSomething = () => {
        SetNumber(number + 1);
    };

    // 2 - array de deps. vazio
    useEffect(() => {
        console.log("Serei execultado apenas uma vez!");
    }, []);

    // 3 - item no array de deps.
    const [anotherNumber, setAnotherNumber] = useState(0);
    useEffect(() => {
        if (anotherNumber > 0) {
            console.log("Sou executado apenas quando o anotherNumber muda!");
        }
    }, [anotherNumber]);

    // 4 - cleanup do useEffect
    useEffect(() => {
        // const timer = setTimeout(() => {
        //     console.log("Hello World!");
        //     setAnotherNumber(anotherNumber + 1);
        // }, 2000);
        // return () => clearTimeout(timer);
    }, [anotherNumber]);

    return (
        <div>
            <h2>useEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeSomething}>Executar</button>
            <p>Anotheer Number: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
                Mudar AnotherNumber
            </button>
            <hr />
        </div>
    );
};

export default HookuseEffect;
