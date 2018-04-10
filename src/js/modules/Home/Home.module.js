import React, { Component } from 'react';

import DomainsTable from '../../components/DomainsTable/DomainsTable.component';
import DomainForm from '../../components/DomainForm/DomainForm.component';

class Home extends Component {
    state = {
        domains: [],
        editMode: false,
        selectedDomain: {}
    }

    componentWillMount() {
        fetch('src/data/domains.json')
            .then(response => response.json())
            .then(data => {
                this.setState({ domains: data.domains })
            });
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
        this.setState({
            selectedDomain: this.state.domains.find(item => item.id === domain.id)
        });
    }

    setEditMode = (option = false) => {
        this.setState({ editMode: option });
    }

    getClassState() {
        if(this.state.editMode){
            return 'col is-editing';
        }

        return 'col';
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className={this.getClassState()}>
                        <div className="row domain-table">
                            <div className="col-12">
                                <DomainsTable domains={this.state.domains} goEdit={this.goEdit}/>
                            </div>
                        </div>

                        <div className="row justify-content-center domain-form">
                            <div className="col-6">
                                { this.state.editMode && <DomainForm domain={this.state.selectedDomain} update={this.update} setEditMode={this.setEditMode} /> }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Home;