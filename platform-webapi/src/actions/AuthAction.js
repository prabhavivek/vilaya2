import AuthActionType from '../actionTypes/AuthActionType';

export function handleChangeAction(e){
    return{ type: AuthActionType.HANDLE_CHANGE, payload:{name:e.target.name,value:e.target.value}}
}


