import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
    static propTypes = {
        domain: PropTypes.object
    }

    state = {
        domain: this.props.domain
    }

    handleChange = (event) => {

        const newState = {
            ...this.state.domain,
            [event.target.name]: event.target.value
        }

        this.setState({ domain: newState });
    }

    render() {
        return (
            <div className="modal">
                <form action="">
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
                        <button>Update it!</button>
                        <a href="">Cancel</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default Modal;