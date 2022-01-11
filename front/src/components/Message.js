import React from 'react';

export default function Message(props) {
    return (
        <div className={`alert alert-${props.variant || 'info'}`} id="alert_message">
            <h1>{props.children}</h1>
        </div>
    )
}