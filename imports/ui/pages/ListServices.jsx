import React from 'react';

import { Link } from 'react-router-dom';

export default class ListSerivces extends React.Component {

    render() {
        const { services } = this.props;
        return (
            <div>
                <h1>List!</h1>
                { services.map((service, idx) => (
                    <Link to={`/service/${idx}`}>
                        <h3>{service.name}</h3>
                    </Link>
                ))}
            </div>
        );
    }
}