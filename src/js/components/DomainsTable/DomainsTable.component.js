import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DomainsTable extends Component {

    static propTypes = {
        domains: PropTypes.array
    }

    renderHeader() {
        return (
            <th>
                <td>Domains name</td>
                <td>Uniregistry</td>
                <td>Price</td>
            </th>
        )
    }

    renderBody(domains = []) {
        return domains.map((item, index) => {
            return (
                <tr key={index}>
                    <td>item.name</td>
                    <td>item.uniregistry</td>
                    <td>item.price</td>
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