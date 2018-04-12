import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CheckIcon from '../UI/Icons/Check.icon';

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
                <th className="text-center">Uniregistry</th>
                <th>Price</th>
            </tr>
        )
    }

    renderBody(domains = []) {
        return domains.map((domain) => {
            return (
                <tr key={domain.id} onClick={ this.handleClickRow.bind(this, domain) }>
                    <td>{ domain.description }</td>
                    <td className="text-center">{ domain.uniregistry && <CheckIcon /> }</td>
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