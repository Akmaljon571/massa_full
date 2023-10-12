import { createContext, useState } from "react";

export const State = createContext()


export const StatePriveder = ({ children }) => {
    const [hero, setHero] = useState('');
    const data = {hero, setHero}

    return <State.Provider value={data}>{ children }</State.Provider>
}