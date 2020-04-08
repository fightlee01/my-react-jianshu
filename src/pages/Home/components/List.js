import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListContent, ListItem, AddMore } from "../style";
import { actionCreators } from "../store";
import Link from "react-router-dom/es/Link";

class List extends PureComponent {
    render() {
        const { getMoreData, list, page } = this.props;
        return (
            <div>
                {
                    list.map((item) => {
                        return (
                            <Link to={'/detail/' + item.get('id')} key={item.get('id')}>
                                <ListItem>
                                    <ListContent>
                                        <h3>{item.get('title')}</h3>
                                        <p>{item.get('content')}</p>
                                    </ListContent>
                                    <img
                                        alt=''
                                        className='pic'
                                        src={item.get('imgUrl')}/>
                                </ListItem>
                            </Link>
                        );
                    })
                }
                <AddMore onClick={() => getMoreData(page)}>加载更多</AddMore>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    list: state.home.get('acticleList'),
    page: state.home.get('acticlePage')
});

const mapDispathToProps = (dispath) => ({
    getMoreData(page) {
        dispath(actionCreators.getMoreList(page));
    }

});

export default connect(mapStateToProps, mapDispathToProps)(List);