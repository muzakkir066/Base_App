import React from 'react';
import { Button } from '@material-ui/core';
function dinner(props){
    return(
        <div className="App">
            <h1>Hello We are serving {props.dishName}</h1>
            <h1>Hello We are serving {props.sweet}</h1>
            <h1>Testing {props.hello}</h1>
            
        </div>
    );
}
export default dinner;