import React, {useEffect, useState} from 'react';
import classes from './Counter.module.scss';
import {SupperButton} from "../common/SupperButton/SupperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {
    changeValueAC,
    CounterBlockType,
    DecrementCounterAC,
    IncrementCounterAC, setMaxValueAC, setMinValueAC,
    SetNumbersAC
} from "../../redux/counter-reducer";
import {IncrementCounterActionType} from "../../redux/counter-reducer";
import SupperInput from "../common/SupperInput/SupperInput";


export type CounterPropsType = {
    error: string
    setError: (error: string) => void
}


export const Counter:React.FC<CounterPropsType> = ({error,setError}) => {

    const dispatch = useDispatch();
    const counter = useSelector<AppRootStateType, CounterBlockType>( state => state.counter);



    (counter.minValue >= counter.maxValue || counter.minValue < 0  ? setError('incorrect value') : setError('setValue'))



    const incrementValue = () => {dispatch(IncrementCounterAC( counter.maxValue ))}
    const decrementValue = () => {dispatch(DecrementCounterAC())}
    const setNum = () => {dispatch(SetNumbersAC(counter.minValue,counter.maxValue))}




    const MinValue = (value: number) => {

       dispatch(setMinValueAC(value ))}
    const  MaxValue = (value: number) => {
        dispatch(setMaxValueAC(value))
    }



    return  <div className={classes.counter}>
        <span>{counter.mode ? counter.count : error}</span>
        <SupperInput value={counter.minValue} error={counter.minValue >= counter.maxValue} counter={counter}  onChangeInput={MinValue}/>
        <SupperInput value={counter.maxValue} error={counter.maxValue <= counter.minValue || counter.maxValue <= 0 } counter={counter}  onChangeInput={MaxValue}/>
        <SupperButton changeValue={incrementValue}>inc</SupperButton>
        <SupperButton disabled={counter.count === counter.minValue} changeValue={decrementValue}>res</SupperButton>
        <SupperButton changeValue={setNum}>set</SupperButton>



    </div>
}