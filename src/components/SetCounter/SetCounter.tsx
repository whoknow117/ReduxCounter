import React from 'react';
import SupperInput from "../common/SupperInput/SupperInput";
import {SupperButton} from "../common/SupperButton/SupperButton";
import {CounterBlockType, setMaxValueAC, setMinValueAC, SetNumbersAC} from "../../redux/counter-reducer";
import {useDispatch} from "react-redux";


export type SetCounterPropsType = {
    counter: CounterBlockType
}

export const SetCounter:React.FC<SetCounterPropsType> = ({counter}) => {

    const dispatch = useDispatch();

    const MinValue = (value: number) => {

        dispatch(setMinValueAC(value ))}
    const  MaxValue = (value: number) => {
        dispatch(setMaxValueAC(value))
    }

    const setNumbers = () => {dispatch(SetNumbersAC(counter.minValue, counter.maxValue))}

    return  <div>
            <SupperInput value={counter.count} counter={counter} onChangeInput={MinValue}/>
            <SupperInput value={counter.count} counter={counter} onChangeInput={MaxValue}/>
            <SupperButton disabled={counter.mode === true || counter.minValue >= counter.maxValue || counter.minValue < 0} changeValue={setNumbers}>set</SupperButton>

    </div>
}