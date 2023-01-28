import { click } from '@syncfusion/ej2-react-grids';
import React ,{createContext,useContext , useState} from 'react';

const StateContext = createContext();
const initialState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}

export const ContextProvider =({children})=>{
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const handleClick =(clicked)=>{
        setIsClicked({...initialState,[clicked]:true})
    }

    // For dont show menubar in Mobile Mode
    const [screenSize, setScreenSize] = useState(undefined)

    return (
        <StateContext.Provider value={{activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screenSize, setScreenSize}}>
            {children}
        </StateContext.Provider>
    )
}
// For using as Custom Hook in Components  
export const useStateContext=()=>useContext(StateContext);