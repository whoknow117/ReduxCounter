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
    counter: CounterBlockType
}


export const Counter:React.FC<CounterPropsType> = ({counter,error,setError}) => {

    const dispatch = useDispatch();




    (counter.minValue >= counter.maxValue || counter.minValue < 0  ? setError('incorrect value') : setError('setValue'))



    const incrementValue = () => {dispatch(IncrementCounterAC( counter.maxValue ))}
    const decrementValue = () => {dispatch(DecrementCounterAC())}









    return  <div className={classes.counter}>
        <span className={classes.count}>{counter.mode ? counter.count : error}</span>

       <div className={classes.btns}>
           <SupperButton changeValue={incrementValue}>+</SupperButton>
           <SupperButton disabled={counter.count === counter.minValue} changeValue={decrementValue}>Reset</SupperButton>
       </div>




    </div>
}