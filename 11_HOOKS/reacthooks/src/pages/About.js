import React from "react";

import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

const About = () => {
    const { contextValue } = useContext(SomeContext);

    return (
        <div>
            <h2>Valor do contexto: {contextValue}</h2>
        </div>
    );
};

export default About;
