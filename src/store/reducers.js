import { combineReducers } from 'redux'
import { reducer as indexReducer } from '../pages/index/store'
import { reducer as firstReducer } from '../pages/first/store'
import { reducer as secondReducer } from '../pages/secend/store'
import { reducer as addReducer } from '../pages/add/store'
import { reducer as toastReducer } from '../components/toast/store'
import { reducer as modalReducer } from '../components/modal/store'

export default combineReducers({
	indexReducer,
	firstReducer,
	secondReducer,
	addReducer,
	toastReducer,
	modalReducer
})
