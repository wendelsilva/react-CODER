export function reducer(state, action) {
    switch(action.type) {
        case 'ADD2':
            return {...state, number: state.number + 2}
        case 'MULTIPLY':
            return {...state, number: state.number * 7}
        case 'DIVIDE':
            return {...state, number: state.number / 25}
        case 'PARSER':
            return {...state, number: parseInt(state.number)}
        case 'ADDX':
            return {...state, number: state.number + action.payload}
        case 'LOGIN':
            return {...state, user: {name: action.payload}}
        default:
            return state
    }
}