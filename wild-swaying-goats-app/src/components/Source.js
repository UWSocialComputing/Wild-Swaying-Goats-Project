import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

/*
The source link and description portion of the table.
*/

export default function Source(props){
    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Box sx={{ my: 3, mx: 2 }}>
                <Grid container alignItems="center">
                    <Link variant="h5" href={props.link} target="_blank" rel="noopener" underline="hover">
                        {props.displayText}
                    </Link>
                </Grid>
                <Grid item>
                    <Typography color="text.secondary" variant="body2" style={{marginTop:"10px"}}>
                        {props.author}
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                        {props.date}
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                        {props.type}
                    </Typography>
                    <Typography color="text.secondary" variant="subtitle2" style={{marginTop:"10px"}}>
                        {"\"" + props.quote + "\""}
                    </Typography>
                </Grid>
            </Box>
        </Box>
    );
}