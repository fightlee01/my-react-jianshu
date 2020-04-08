import { fromJS } from 'immutable';
import { contants } from './';

const defaultStore = fromJS({
    title: '',
    content: ''
});

export default (state = defaultStore, action) => {
    switch(action.type) {
        case contants.CHANGE_DETAIL_CONTENT:
            return state.merge({
                title: action.title,
                content: action.content
            });
        default: return state;
    }
}