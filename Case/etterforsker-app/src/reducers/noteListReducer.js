import { stat } from "fs";

const noteListReducer = (state = ["Case 44 is solved", "Remember to feed the police dogs"], action) => {
    switch (action.type) {
      case "ADD_NOTE":
        const notes = state.map( note => note);
        notes.push(action.newNote);
        return notes;
      default:
        return state;
    }
}
export default noteListReducer;
