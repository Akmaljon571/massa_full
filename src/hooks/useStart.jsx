import { useContext } from "react";
import { State } from '../context/start'

function useStart() {
   const {hero, setHero} = useContext(State)

   return {hero, setHero}
}

export default useStart;