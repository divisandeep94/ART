const initialState = {
    counter: 0
}

export default function (state=initialState, action) {
    switch (action.type) {
        case 'inc':
            return {
                ...state,
                counter : state.counter + 1    
            }
         case 'dec':
             return {
                 counter: state.counter - 1
             }
             default:  
            return state   
    }
}