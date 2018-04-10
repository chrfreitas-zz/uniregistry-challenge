import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DomainTable extends Component {
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
                <tr key={domain.id} onClick={ this.handleClickRow.bind(this, domain) }>
                    <td>{ domain.description }</td>
                    <td>{ domain.uniregistry }</td>
                    <td>{ domain.price }</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <table className="table table-hover">
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

export default DomainTable;