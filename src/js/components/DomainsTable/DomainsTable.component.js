import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DomainsTable extends Component {
    static propTypes = {
        domains: PropTypes.array,
        goEdit: PropTypes.func
    }

    handleClickRow = (domain) => {
        this.props.goEdit(domain);
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
        return domains.map((domain) => {
            return (
                <tr key={domain.id}>
                    <td onClick={ this.handleClickRow.bind(this, domain) }>{ domain.name }</td>
                    <td>{ domain.uniregistry }</td>
                    <td>{ domain.price }</td>
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