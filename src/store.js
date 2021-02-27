import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from './rootReducer'

const initialtore = createStore(rootReducer, applyMiddleware(thunk))

export default initialtore
