import * as type from '../action/type.js';
import { combineReducers } from 'redux';
const permissionData = (state = { status:true, defaultPath: "", data :[]}, action) => {
    
    switch(action.type){
        case type.SET_PERMISSION:
        return {...state , status:true, data:action.data, defaultPath: action.defaultPath, auths: action.auths}
        default: 
        return {...state}
    }
}

export default combineReducers({
    permissionData
});
