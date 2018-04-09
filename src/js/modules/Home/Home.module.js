import React, { Component } from 'react';

import DomainsTable from '../../components/DomainsTable/DomainsTable.component';
import DomainForm from '../../components/DomainForm/DomainForm.component';

class Home extends Component {
    state = {
        domains: [
            {
                id: 1,
                name: 'foolfighter.lol',
                uniregistry: 'yes',
                price: '$12.00'
            },
            {
                id: 2,
                name: 'selfdriving.cars',
                uniregistry: 'yes',
                price: '$16.00'
            },
            {
                id: 3,
                name: 'greendiamondsky.com',
                uniregistry: 'no',
                price: '$9.00'
            },
        ],
        modal: {
            opened: false,
            domain: {}
        }
    }

    update = (domain) => {
        const newState = {
            domains: this.state.domains.map(elem => {
                if(elem.id === domain.id){
                    elem = domain;
                }

                return elem;
            })
        }

        this.setState(newState);
    }

    goEdit = (domain) => {
        this.setState(prevState => {
            return {
                modal: {
                    opened: !prevState.modal.opened,
                    domain: prevState.domains.find(item => item.id === domain.id)
                }
            }
        });
    }

    render() {
        return (
            <div>
                <DomainsTable domains={this.state.domains} goEdit={this.goEdit}/>
                { this.state.modal.opened && <DomainForm domain={this.state.modal.domain} update={this.update}/> }
            </div>
        )
    }
}


export default Home;