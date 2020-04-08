import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {RecommendItem, RecommendWrapper} from "../style";

class Recommend extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <RecommendWrapper>
                {
                    list.map((item) => {
                        return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
                    })
                }
            </RecommendWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.home.get('recommendList')
});

export default connect(mapStateToProps, null)(Recommend);