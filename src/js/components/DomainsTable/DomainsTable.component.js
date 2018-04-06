import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DomainsTable extends Component {
    static propTypes = {
        domains: PropTypes.array,
        toggleModal: PropTypes.func
    }

    handleClickRow = () => {
        this.props.toggleModal();
    }

    renderHeader() {
        return (
            <tr>
                <th>Domains name</th>
                <th>Uniregistry</th>
                <th>Price</th>
            </tr>
        )
    }

    renderBody(domains = []) {
        return domains.map((item, index) => {
            return (
                <tr key={index}>
                    <td onClick={ this.handleClickRow }>{ item.name }</td>
                    <td>{ item.uniregistry }</td>
                    <td>{ item.price }</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <table>
                <thead>
                    { this.renderHeader() }
                </thead>
                <tbody>
                    { this.renderBody(this.props.domains) }
                </tbody>
            </table>
        )
    }
}

export default DomainsTable;