import {Link} from 'react-router-dom';
import ContrastIcon from '@mui/icons-material/Contrast';
import Grid from "@mui/material/Grid";

export default function LandingPage(props) {
  
  let navLinks = props.store.discussions.map(function(i) {
    return(
      <Grid item container direction="row">
        <Grid item>
          <ContrastIcon/>
        </Grid>
        <Grid item style={{ marginLeft: "10px" }}>
          <h3>
            <Link to={i.url}>{i.data.discussionTitle}</Link>
          </h3>
        </Grid>
      </Grid>
    );
  });

  return (
    <Grid container style={{ marginLeft: "15px", marginTop: "100px" }} direction="column" columnSpacing={9}>
      {navLinks}
    </Grid >
  );
}