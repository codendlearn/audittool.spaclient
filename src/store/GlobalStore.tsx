import React, {createContext, useContext, useReducer} from 'react'
import {IGlobalState} from '../model/IGlobalState'
import IUser from "../model/IUser"
import IEngagement from "../model/IEngagement"

export enum GlobalStateAction {
    Busy,
    Idle,
    Error,
    SetCurrentEngagement,
    LogIn,
    LogOut,
}

export type GlobalAction =
    | {type: GlobalStateAction.Busy}
    | {type: GlobalStateAction.Idle}
    | {type: GlobalStateAction.Error, error: string}
    | {type: GlobalStateAction.SetCurrentEngagement, engagement: IEngagement}
    | {type: GlobalStateAction.LogIn, user: IUser}
    | {type: GlobalStateAction.LogOut}

const initialState: IGlobalState = {
    busy: false,
    error: false
}

const globalStateContext = createContext<IGlobalState>(initialState)
const globalDispatchContext = createContext<React.Dispatch<GlobalAction>>(() => { })

const reducer = (state: IGlobalState, action: GlobalAction): IGlobalState => {
    switch (action.type) {
        case GlobalStateAction.Busy:
            return {...state, busy: true}
        case GlobalStateAction.Idle:
            return {...state, busy: false}
        case GlobalStateAction.Error:
            return {...state, error: true, errorMessage: action.error}
        case GlobalStateAction.SetCurrentEngagement:
            return {...state, currentEngagement: action.engagement}
        case GlobalStateAction.LogIn:
            return {...state, user: action.user}
        case GlobalStateAction.LogOut:
            return {...state, user: undefined, }
        default:
            return state
    }
}

const GlobalStateProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer<React.Reducer<IGlobalState, GlobalAction>>(
        reducer,
        initialState
    )

    return (
        <globalStateContext.Provider value={state}>
            <globalDispatchContext.Provider value={dispatch}>
                {children}
            </globalDispatchContext.Provider>
        </globalStateContext.Provider>
    )
}

const useGlobalState = () => useContext(globalStateContext)
const useGlobalDispatch = () => useContext(globalDispatchContext)

export {GlobalStateProvider, useGlobalState, useGlobalDispatch}
