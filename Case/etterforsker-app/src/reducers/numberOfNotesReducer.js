const numberOfNotesReducer = (state = 0, action) =>{
    switch (action.type){
        case "INCREMENT_NOTE":
        return state + 1; 
        case "DECREMENT_NOTE":
         return state -1;
        case "RESET_NOTE":
         return state = 0;
         default:
             return state;
    }
}

export default numberOfNotesReducer;