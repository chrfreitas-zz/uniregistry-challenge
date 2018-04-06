import React, { Component } from 'react';
import Table from '../../components/Table/Table.component';
import PropTypes from 'prop-types';

class Home extends Component {
    static propTypes = {
        items: PropTypes.array
    }

    render() {
        return (
            <Table items={this.props.items}/>
        )
    }
}


export default Home;