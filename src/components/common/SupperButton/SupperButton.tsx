import React from 'react';
import classes from './SupperButton.module.scss';




export type SupperButtonPropsType = {
    changeValue: () => void
    disabled?: boolean
}





export const SupperButton:React.FC<SupperButtonPropsType> = ({disabled,changeValue, children}) => {



    return <button disabled={disabled} onClick={changeValue}>{children}</button>
}