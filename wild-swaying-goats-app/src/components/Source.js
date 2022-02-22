import React from "react";
import Button from '@mui/material/Button';


export default function Source(displayText, link){
    return (
        <div>
            <Button
                variant="text"
                onClick={() => {
                    window.location.href = {link};
                }}
            >
                {displayText}
            </Button>
        </div>
    );
}