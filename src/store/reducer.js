import { reducer as headerReducers } from '../commond/header/store';
import { reducer as homeReducers } from '../pages/Home/store';
import { reducer as detailReducers } from '../pages/Detail/store';
import { reducer as loginReducers } from '../pages/Login/store';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    header: headerReducers,
    home: homeReducers,
    detail: detailReducers,
    login: loginReducers
});

export default reducer;