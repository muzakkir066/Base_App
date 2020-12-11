import React from 'react';

function BreakFast(props) {
    return (
        <div>
            <h3>We are serving Break Fast</h3>
            <li>{props.nameOf}</li>
            <li>{props.Tea}</li>
        </div>
    );
}
export default BreakFast;