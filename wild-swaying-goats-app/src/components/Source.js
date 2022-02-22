import React from "react";
import Button from '@mui/material/Button';


export default function Source(props){
    return (
        <div>
            <Button variant="text" href={props.link} target="_blank">
                {props.displayText}
            </Button>
        </div>
    );
}