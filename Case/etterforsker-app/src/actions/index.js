export const addNote = ( newNote ) =>{
    return{
        type: "ADD_NOTE", 
        newNote
    }
}

export const deleteNote = ( newNote ) =>{
    return{
        type: "DELETE_NOTE",
        newNote
    }
}

export const setNote = ( newNote ) =>{
    return{
        type: "RESET_NOTE",
        newNote
    }
}


export const incrementNote = () =>{
    return {
        type:"INCREMENT_NOTE"
    }
}

export const decrementNote = () =>{
    return{
        type: "DECREMENT_NOTE"
    }
}

export const resetNote = () =>{
    return{
        type: "RESET_NOTE"
    }
}