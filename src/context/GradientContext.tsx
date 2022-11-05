import React,{ createContext } from "react";
import {useState} from 'react';
import { Image } from 'react-native';

interface ImageColors{
    primary:string,
    secondary:string,
}
interface ContextProps{
    colors:ImageColors,
    prevColors:ImageColors,
    setMainColors: (colors: ImageColors) => void,
    setPrevMainColors: (colors: ImageColors) => void,
}

const initialState:ImageColors={
    primary:'transparent',
    secondary:'transparent',
    
}

export const GradientContext=createContext({} as ContextProps) // [x]TODO: definir tipo


export const GradientProvider=({children}:any)=>{

    const [colors, setColors] = useState<ImageColors>(initialState)
    const [prevColors, setPrevColors] = useState<ImageColors>(initialState)

    const setMainColors=(colors :ImageColors)=>{

        setColors(colors)
    }

    const setPrevMainColors=(colors:ImageColors)=>{

        setPrevColors(colors)
    }

    return(
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors,
        }}>

            {children}


        </GradientContext.Provider>
    )
}