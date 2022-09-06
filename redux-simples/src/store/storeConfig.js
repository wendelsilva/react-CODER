import { legacy_createStore as createStore, combineReducers } from 'redux'

import numerosreducer from './reducers/numeros'

const reducers = combineReducers({
    numeros: numerosreducer,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig