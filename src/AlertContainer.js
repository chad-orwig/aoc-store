import React from 'react';

import Alert from 'react-bootstrap/Alert';

function AlertContainer({alerts}) {
    const alertComponents = alerts.map(({ heading, variant, message}, index) => (
        <Alert variant={variant} key={index}>
            <Alert.Heading>{heading}</Alert.Heading>
            <p>{message}</p>
        </Alert>
    ));
    return (
        <div className="fixed-top">
            { alertComponents }
        </div>
    );
}

export default AlertContainer;