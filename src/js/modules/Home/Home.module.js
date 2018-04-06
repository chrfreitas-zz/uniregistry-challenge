import React, { Component } from 'react';

import DomainsTable from '../../components/DomainsTable/DomainsTable.component';
import Modal from '../../components/Modal/Modal.component';

class Home extends Component {
    state = {
        domains: [
            {
                name: 'foolfighter.lol',
                uniregistry: 'yes',
                price: '$12.00'
            },
            {
                name: 'selfdriving.cars',
                uniregistry: 'yes',
                price: '$16.00'
            },
            {
                name: 'greendiamondsky.com',
                uniregistry: 'no',
                price: '$9.00'
            },
        ]
    }

    render() {
        return (
            <div>
                <DomainsTable domains={this.state.domains}/>
                <Modal />
            </div>
        )
    }
}


export default Home;