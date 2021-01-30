export type CounterBlockType = {
    count: number
    error: string
    minValue: number
    maxValue: number

}

export type SetNumbersActionType = {
    type: "SET-NUMBERS"
    maxVal: number
    minVal: number
}


export type IncrementCounterActionType = {
    type: "INCREMENT-COUNTER"
    maxNumber: number
}
export type DecrementCounterActionType = {
    type: "DECREMENT-COUNTER"

}

export type ActionTypes = IncrementCounterActionType | DecrementCounterActionType

let InitialState: CounterBlockType = {

    count: 0,
    error: '',
    minValue: 0,
    maxValue: 5,


}


const counterReducer = (state = InitialState, action: ActionTypes): CounterBlockType => {

    switch (action.type) {
        case "INCREMENT-COUNTER": {
            console.log("Increment works")
            return state.count < action.maxNumber ? {...state, count: state.count + 1} : state

        }
        case "DECREMENT-COUNTER": {
            console.log("Decrement works")
            return (state.count !== 0 ? {...state, count: 0} : state);

        }


        default:
            return state
    }

}


export const SetNumbersAC = (minVal: number, maxVal: number) => {
    return {
        type: "SET-NUMBERS",
        maxVal: maxVal,
        minVal: minVal
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