import React, {useState} from 'react';
import classes from './SetCounter.module.scss';
import SupperInput from "../common/SupperInput/SupperInput";
import {SupperButton} from "../common/SupperButton/SupperButton";
import {CounterBlockType, setMaxValueAC, setMinValueAC, SetNumbersAC} from "../../redux/counter-reducer";
import {useDispatch} from "react-redux";


export type SetCounterPropsType = {
    counter: CounterBlockType
}

export const SetCounter:React.FC<SetCounterPropsType> = ({counter}) => {

    const dispatch = useDispatch();
    const [mode, setMode] = useState<boolean>(true);

    const MinValue = (value: number) => {

        dispatch(setMinValueAC(value ))}
    const  MaxValue = (value: number) => {
        dispatch(setMaxValueAC(value))
    }

    const setNumbers = () => {
        // setMode(!mode);
        dispatch(SetNumbersAC(counter.minValue, counter.maxValue))}

    return  <div className={`${classes.setCounter}  ${ counter.mode ? classes.animClass : ""}`}>
            <div>
                min <SupperInput value={counter.count} counter={counter} onChangeInput={MinValue}/>

            </div>
           <div>
               max  <SupperInput value={counter.count} counter={counter} onChangeInput={MaxValue}/>

           </div>
            <SupperButton disabled={counter.mode === true || counter.minValue >= counter.maxValue || counter.minValue < 0} changeValue={setNumbers}>set</SupperButton>

     </div>
}