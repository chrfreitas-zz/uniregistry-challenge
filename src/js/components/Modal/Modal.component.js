import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
    static propTypes = {
        show: PropTypes.bool,
        domain: PropTypes.object
    }

    getClass() {
        let className = 'modal';

        if(!this.props.show){
            className += ' hide';
        }

        return className;
    }

    render() {
        return (
            <div className={ this.getClass() }>
                <form action="">
                    <div>
                        <label>Domain name</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Registran email</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Price</label>
                        <input type="text"/>
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