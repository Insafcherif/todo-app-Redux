import {ADD_TASK, DELETE_TASK, UPADATE_TASK, DONE_TASK, FILTER_TASK} from "./Type";

export const addTask=(task)=> {
   
    return {type: ADD_TASK, payload: task}
}
export const deletTask=(id)=> {
    return {type: DELETE_TASK, payload : id}
}
export const updatTask=(id, desc)=> {
    return {type: UPADATE_TASK, payload:{id,desc}}
}
export const doneTask=(id)=> {
    return {type: DONE_TASK, payload:id}
}
export const filtreTask=(done)=> {
    return {type: FILTER_TASK, payload:done }
}

