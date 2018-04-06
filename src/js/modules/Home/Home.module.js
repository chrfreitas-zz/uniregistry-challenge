import React, { Component } from 'react';
import DomainsTable from '../../components/DomainsTable/DomainsTable.component';
import PropTypes from 'prop-types';

class Home extends Component {
    static propTypes = {
        items: PropTypes.array
    }

    render() {
        return (
            <DomainsTable items={this.props.items}/>
        )
    }
}


export default Home;