import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DomainsTable extends Component {

    static propTypes = {
        domains: PropTypes.array
    }

    renderContent(domains = []) {
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
                    <th>
                        <td>
                            Domains name
                        </td>
                    </th>
                    <th>
                        <td>
                            Uniregistry
                        </td>
                    </th>
                    <th>
                        <td>
                            Price
                        </td>
                    </th>
                </thead>
                <tbody>
                    { this.renderContent(this.props.domains) }
                </tbody>
            </table>
        )
    }
}

export default DomainsTable;