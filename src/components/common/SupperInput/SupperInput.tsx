import React,{KeyboardEvent,ButtonHTMLAttributes, ChangeEvent, DetailedHTMLProps,InputHTMLAttributes} from 'react';
import {CounterBlockType} from "../../../redux/counter-reducer";
import classes from './SupperInput.module.scss';

type DefaultPropsType =  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type SupperInputType = DefaultPropsType & {
    counter: CounterBlockType
    onChangeInput:(value: number) => void
    error?: boolean
    value: number;
}

const SupperInput:React.FC<SupperInputType> = ({value,error,counter,onChange, onChangeInput, ...restProps}) => {

    const onChangeCallback = (e:ChangeEvent<HTMLInputElement>) => {
        counter.mode = false;
        onChange && onChange(e)
        onChangeInput && onChangeInput(+e.currentTarget.value)
    }


    return <input  className={`${classes.input} ${counter.minValue >= counter.maxValue || counter.minValue < 0 ? classes.error : ""}`} onChange={onChangeCallback} {...restProps}  type="number"/>
}


export default SupperInput;