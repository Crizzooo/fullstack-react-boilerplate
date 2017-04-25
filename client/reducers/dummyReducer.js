/* Dependencies */


/* Action Types */
const SAMPLE = 'SAMPLE';


/* Action Creators */
export const receiveData = (data) => ({
  type: SAMPLE,
  data
});


/* Initial State */
const initialState = {
  data: []
};

/* Reducer Function */
export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {

    case SAMPLE:
        break;

    default:
        return state;
  }
  return newState;
}
