import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DomainForm extends Component {
    static propTypes = {
        domain: PropTypes.object,
        update: PropTypes.func,
        setEditMode: PropTypes.func
    }

    state = {
        domain: this.props.domain
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
        this.props.update(this.state.domain);
        this.props.setEditMode(false);
    }

    handleCancelButton = () => {
        this.props.setEditMode(false);
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Domain name</label>
                        <input type="text" name="name" value={this.state.domain.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Registran email</label>
                        <input type="text" name="email" value={this.state.domain.email} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="text" name="price" value={this.state.domain.price} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button onClick={this.handleUpdateButton}>Update it!</button>
                        <a onClick={this.handleCancelButton}>Cancel</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default DomainForm;