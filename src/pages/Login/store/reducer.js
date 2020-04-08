import { fromJS } from 'immutable';
import { contants } from './';

const defaultStore = fromJS({
    loginFlag: false
});

export default (state = defaultStore, action) => {
    switch(action.type) {
        case contants.CHANGE_LOGIN:
            return state.set('loginFlag', action.flag);
        case contants.LOGINOUT:
            return state.set('loginFlag', action.flag);
        default: return state;
    }
}