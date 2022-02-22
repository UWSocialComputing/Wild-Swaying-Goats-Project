import React from "react";
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Source(props){
    return (
        <Button variant="text" href={props.link} target="_blank">
            <List>
                <ListItem>
                    <ListItemText primary={props.displayText} secondary={props.author}/>
                </ListItem>
            </List>
        </Button>
    );
}