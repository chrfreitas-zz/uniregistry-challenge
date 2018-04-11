import React, { Component } from 'react';

import DomainTable from '../../components/DomainTable/DomainTable.component';
import DomainForm from '../../components/DomainForm/DomainForm.component';
import Domain from '../../classes/Domain.class';

class Home extends Component {
    state = {
        domains: [],
        editMode: false,
        selectedDomainId: {}
    }

    componentDidMount() {
        Domain.clear();

        Domain.load().then(domains => {
            this.setState({ domains })
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
        this.setSelectedDomain(domain.id);
    }

    setSelectedDomain(id) {
        this.setState({
            selectedDomainId: id
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
                        <div className="row justify-content-center">
                            <div className="col-6">
                                <div className="domain-table">
                                    { !this.state.editMode && <DomainTable domains={this.state.domains} goEdit={this.goEdit}/> }
                                </div>
                                <div className="domain-form">
                                    { this.state.editMode && <DomainForm domainId={this.state.selectedDomainId} update={this.update} setEditMode={this.setEditMode} /> }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Home;