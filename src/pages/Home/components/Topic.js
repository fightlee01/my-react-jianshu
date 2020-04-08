import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    TopicItem,
    TopicWrapper
} from "../style";

class Topic extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img
                                    alt={"d"}
                                    className='topic-pic'
                                    src={item.get('imgUrl')}/>
                                    {item.get('topic')}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.home.get('topicList')
});
export default connect(mapStateToProps, null)(Topic);