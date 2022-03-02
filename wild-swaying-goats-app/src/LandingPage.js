import {Link} from 'react-router-dom';
import { Box, Grid, Card, CardContent } from "@mui/material";

export default function LandingPage(props) {
  
  let navLinks = props.store.discussions.map(function(i) {
    return(
      <Box key={i.url} style={{ marginLeft: "100px", marginRight: "25px" }}>
        <Card variant="outlined" style={{ marginTop: "20px" }}>
          <CardContent style={{ marginTop: "15px" }}>
            <h3>
              <Link to={i.url}>{i.data.discussionTitle}</Link>
            </h3>
          </CardContent>
        </Card>
      </Box>
    );
  });

  return (
    <Grid container style={{ marginTop: "100px" }} direction="column" columnSpacing={9}>
      {navLinks}
    </Grid >
  );
}