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
        ],
        modal: {
            opened: false
        }
    }

    toggleModal = () => {
        this.setState({
            modal: { opened: !this.state.modal.opened }
        })
    }

    render() {
        return (
            <div>
                <DomainsTable domains={this.state.domains} toggleModal={this.toggleModal}/>
                <Modal show={this.state.modal.opened}/>
            </div>
        )
    }
}


export default Home;