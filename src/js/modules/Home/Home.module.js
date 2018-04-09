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
        editMode: false,
        selectedDomain: {}
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
        this.setEditMode(true);
        this.setSelectedDomain(domain);
    }

    setSelectedDomain(domain) {
        this.setState(prevState => {
            selectedDomain: prevState.domains.find(item => item.id === domain.id)
        });
    }

    setEditMode = (option = false) => {
        this.setState({ editMode: option });
    }

    render() {
        return (
            <div>
                <DomainsTable domains={this.state.domains} goEdit={this.goEdit}/>
                { this.state.editMode && <DomainForm domain={this.state.selectedDomain}
                                                    update={this.update}
                                                    setEditMode={this.setEditMode} /> }
            </div>
        )
    }
}


export default Home;