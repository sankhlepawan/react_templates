
import { createStore} from 'redux';
import reducers from '../reducers';

const initialState = { todos: [] };
const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop
)

export default store;
