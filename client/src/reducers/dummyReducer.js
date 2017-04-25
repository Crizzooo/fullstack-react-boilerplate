/* Dependencies */


/* Action Types */
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

/* Action Creators */
export const updateMessage = (messageNumber) => ({
  type: UPDATE_MESSAGE,
  messageNumber
});



// Data used for Dummy Reducer
const messages = ['React', 'Express Servers', 'Live Reloading', 'Webpack Bundling', 'Modular SCSS Compiling / Importing', 'Redux Dev Tools Extension', 'Babel React/ES6 Syntax'];
export const amountOfMessages = messages.length - 1;


/* Initial State */
const initialState = {
  message: messages[0]
};

/* Reducer Function */
export default (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {

    case UPDATE_MESSAGE:
        newState.message = messages[action.messageNumber];
        break;

    default:
        return newState;
  }
  return newState;
}
