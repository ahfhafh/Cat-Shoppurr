import React from 'react';

export default function Message(props) {
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
            <h1> {props.children} </h1>
        </div>
    )
}