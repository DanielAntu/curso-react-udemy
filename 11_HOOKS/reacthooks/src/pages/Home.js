// useContext
import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";

import React from "react";
import HookUseState from "../components/HookUseState";
import HookUseReducer from "../components/HookUseReducer";
import HookuseEffect from "../components/HookuseEffect";
import HookUseRef from "../components/HookUseRef";

const Home = () => {
    const { contextValue } = useContext(SomeContext);

    return (
        <div>
            <HookUseState />
            <HookUseReducer />
            <HookuseEffect />
            <h2>useContext</h2>
            <p>Valor do context: {contextValue}</p>
            <hr />
            <HookUseRef />
        </div>
    );
};

export default Home;
