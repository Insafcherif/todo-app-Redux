import { ADD_TASK, DELETE_TASK, UPADATE_TASK, DONE_TASK, FILTER_TASK } from "./Type";
const initState = [
    { id: 0, desc: "Going to the gym", done: false },
    { id: 1, desc: "doing my home_work", done: false },
    { id: 2, desc: "cleaning my room", done: false },
];

const Reducer = (state = initState, action) => {

    switch (action.type) {
        case DELETE_TASK:
            return state.filter((elt) => elt.id !== action.playload)
        case ADD_TASK:
            return [...state, action.payload];
        case UPADATE_TASK:
            return state.map((elt) => {
                if (elt.id === action.payload.id) {
                    return { ...elt, desc: action.payload.desc }
                }
                else return elt;
            })
        case DONE_TASK: return state.map((elt) => {
            if (elt.id === action.payload && elt.done) {
                return { ...elt, done: false };
            }
            if (elt.id === action.payload && !elt.done) {
                return { ...elt, done: true };
            }
            else { return elt; }
        }
        )
        case FILTER_TASK: return state.filter((elt) => elt.done===true)
          
        default: return state;
    }

}
export default Reducer; 