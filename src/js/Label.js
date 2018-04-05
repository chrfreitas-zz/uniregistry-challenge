import React from 'react';

class Label extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        return (
            <div class="label">{this.props.name}</div>
        );
    }
}

export default Label;
