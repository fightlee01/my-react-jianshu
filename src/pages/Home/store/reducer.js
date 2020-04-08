import { fromJS } from 'immutable';
import { contants } from './';

const defaultStore = fromJS({
    topicList: [],
    acticleList: [],
    recommendList: [],
    acticlePage: 1,
    showBackTop: false
});

export default (state = defaultStore, action) => {
    switch(action.type) {
        case contants.CHANGE_HOME_LIST:
            return state.merge({
                topicList: fromJS(action.topicList),
                acticleList: fromJS(action.acticleList),
                recommendList: fromJS(action.recommendList)
            });
        case contants.GET_MORE_LIST:
            return state.merge({
                acticleList: state.get('acticleList').concat(fromJS(action.list)),
                acticlePage: action.nextPage
            });
        case contants.CHANGE_SCROLL_STATE:
            return state.set('showBackTop', action.flag);
        default: return state;
    }
}