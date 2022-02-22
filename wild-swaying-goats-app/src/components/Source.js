import React from "react";
import Button from '@mui/material/Button';


export default function Source(props){
    return (
        <div>
            <Button
                variant="text"
                onClick={() => {
                    window.location.href = props.link;
                }}
            >
                {props.displayText}
            </Button>
        </div>
    );
}