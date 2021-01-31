export type CounterBlockType = {
    count: number
    error: string
    minValue: number
    maxValue: number
    mode: boolean

}

export type SetNumbersActionType = {
    type: "SET-NUMBERS"
    maxVal: number
    minVal: number
}
export type ChangeValueActionType = {
    type: "CHANGE-VALUE"
    value: number
}


export type IncrementCounterActionType = {
    type: "INCREMENT-COUNTER"
    maxNumber: number
}
export type DecrementCounterActionType = {
    type: "DECREMENT-COUNTER"

}
export type SetNumActionType = {
    type: "SET-NUMBERS"
    minVal: number
    maxVal: number

}
export type SetMaxValueActionType = {
    type: "SET-MAX-VALUE"
    value: number
}
export type SetMinValueActionType = {
    type: "SET-MIN-VALUE"
    value: number
}

export type ActionTypes = IncrementCounterActionType
    | DecrementCounterActionType
    | SetNumActionType
    | ChangeValueActionType
    | SetMinValueActionType
    | SetMaxValueActionType

let InitialState: CounterBlockType = {

    count: 0,
    error: '',
    minValue: 4,
    maxValue: 11,
    mode: false

}


const counterReducer = (state = InitialState, action: ActionTypes): CounterBlockType => {

    switch (action.type) {
        case "INCREMENT-COUNTER": {
            console.log("Increment works")
            return state.count < action.maxNumber ? {...state, count: state.count + 1} : state

        }
        case "DECREMENT-COUNTER": {
            console.log("Decrement works")
            return (state.count !== state.minValue ? {...state, count: state.minValue} : state);

        }
        case "SET-NUMBERS": {


            return {...state, minValue: action.minVal, count: action.minVal, maxValue: action.maxVal, mode: true};
        }
        case "SET-MIN-VALUE": {
            let copyState = {...state}
            if(copyState.maxValue > copyState.minValue && copyState.maxValue > 0) {
                copyState.error = "set value";
                copyState.minValue = action.value;
            }
            return copyState;
        }
        case "SET-MAX-VALUE": {
            return {...state, maxValue: action.value}
        }

        default:
            return state
    }

}


export const SetNumbersAC = (minVal: number, maxVal: number): SetNumActionType => {
    return {
        type: "SET-NUMBERS",
        maxVal: maxVal,
        minVal: minVal,

    }
}

export const setMaxValueAC = (value: number): SetMaxValueActionType => {
    return {
        type: "SET-MAX-VALUE",
        value: value
    }
}

export const setMinValueAC = (value: number): SetMinValueActionType => {
    return {
        type: "SET-MIN-VALUE",
        value: value
    }
}

export const changeValueAC = (value: number): ChangeValueActionType => {
    return {
        type: "CHANGE-VALUE",
        value: value
    }
}

export const IncrementCounterAC = (maxNumber: number): IncrementCounterActionType => {
    return {
        type: "INCREMENT-COUNTER",
        maxNumber: maxNumber
    }
}

export const DecrementCounterAC = (): DecrementCounterActionType => {
    return {
        type: "DECREMENT-COUNTER",

    }
}


export default counterReducer;