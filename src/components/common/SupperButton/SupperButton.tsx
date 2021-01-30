import React from 'react';
import classes from './SupperButton.module.scss';
import {IncrementCounterAC} from "../../../redux/counter-reducer";
import {useDispatch} from "react-redux";


export type SupperButtonPropsType = {
    changeValue: () => void

}





export const SupperButton:React.FC<SupperButtonPropsType> = ({changeValue}) => {



    return <button onClick={changeValue}>increment</button>
}