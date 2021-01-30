import React, {useState} from 'react';
import classes from './Counter.module.scss';
import {SupperButton} from "../common/SupperButton/SupperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {CounterBlockType, DecrementCounterAC, IncrementCounterAC, SetNumbersAC} from "../../redux/counter-reducer";
import {IncrementCounterActionType} from "../../redux/counter-reducer";


export type CounterPropsType = {

}


export const Counter:React.FC<CounterPropsType> = () => {

    const dispatch = useDispatch();
    const counter = useSelector<AppRootStateType, CounterBlockType>( state => state.counter);





    const incrementValue = () => {dispatch(IncrementCounterAC( counter.maxValue ))}
    const decrementValue = () => {dispatch(DecrementCounterAC())}
    const setNum = () => {dispatch(SetNumbersAC(counter.minValue,counter.maxValue))}


    return  <div className={classes.counter}>
        <span>{counter.count}</span>
        <SupperButton changeValue={incrementValue} />
        <SupperButton changeValue={decrementValue} />
        <SupperButton changeValue={setNum}/>



    </div>
}