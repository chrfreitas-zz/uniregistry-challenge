import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Domain from '../../classes/Domain.class';

class DomainForm extends Component {
    static propTypes = {
        domain: PropTypes.object,
        domainId: PropTypes.number,
        update: PropTypes.func,
        setEditMode: PropTypes.func
    }

    state = {
        domain: new Domain()
    }

    componentDidMount() {
        Domain.get(this.props.domainId)
            .then(domain => {
                this.setState({ domain })
            });
    }

    handleChange = (event) => {
        const newState = {
            domain: {
                ...this.state.domain,
                [event.target.name]: event.target.value
            }
        }

        this.setState(newState);
    }

    handleUpdateButton = (e) => {
        e.preventDefault();

        Domain.update(this.state.domain);
        this.props.update(this.state.domain);
        this.props.setEditMode(false);
    }

    handleCancelButton = () => {
        this.props.setEditMode(false);
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Domain name</label>
                    <input type="text" className="form-control" name="description" value={this.state.domain.description} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Registran email</label>
                    <input type="text" className="form-control" name="email" value={this.state.domain.email} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="text" className="form-control" name="price" value={this.state.domain.price} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={this.handleUpdateButton}>Update it!</button>
                    <a className="btn btn-link" onClick={this.handleCancelButton}>Cancel</a>
                </div>
            </form>
        );
    }
}

export default DomainForm;