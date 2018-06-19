
import React, { Component } from 'react';

class Investors extends Component {

    render() {
        const {match:{params}} = this.props;
		return (
			<div>
                <h1>Investors </h1>
                <p>{params.investor}</p>
            </div>
		);
    }
}

export default Investors;
