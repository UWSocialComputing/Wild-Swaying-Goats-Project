import './App.css';
import React from "react";
import Source from './components/Source.js';
import SliderScore from './components/SliderScore.js';
import BibTable from './components/BibTable.js';
import { styled } from '@mui/material/styles';
import { 
  Button, 
  Grid, 
  Paper,
  Typography,
  Divider
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function createData(source, score) {
  return { source, score };
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BibliograpyPage(props) {
  let store = props.store;
  let discussions = store.discussions;
  let data;
  discussions.forEach((i) => {
    if (i.url === props.url) {
      data = i.data; 
    }
  })
  
  let discussionTitle = data.discussionTitle;
  let side1 = data.side1;
  let side2 = data.side2;
  let side1Sources = data.side1Sources.map(function(i) {return createData(<Source displayText={i.title} author={i.authors} link={i.sourceLink} date={i.date} type={i.type} quote={i.quote}/>, <SliderScore title={i.title} scores={i.scores} average={i.average} dispatch={props.dispatch}/>)});
  let side2Sources = data.side2Sources.map(function(i) {return createData(<Source displayText={i.title} author={i.authors} link={i.sourceLink} date={i.date} type={i.type} quote={i.quote}/>, <SliderScore title={i.title} scores={i.scores} average={i.average} dispatch={props.dispatch}/>)});
  
  let navigate = useNavigate();
  return (
    <div style={{ marginLeft: "20px", marginRight: "20px", marginTop: "100px" }}>
      <Grid container p={2} spacing={2}>
        <Grid item xs={2}>
          <Item>
            <Button onClick={() => {
              navigate("/");
            }}>
              Go Home
            </Button>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" align="center" gutterBottom>
            {discussionTitle}
          </Typography>
        </Grid>
        <Grid container>
          <Grid container xs direction="column" style={{margin:"30px"}}>
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                {side1}
              </Typography>
            </Grid>
            <Grid item>
                <BibTable rows={side1Sources}/>
            </Grid>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid container xs direction="column" style={{margin:"30px"}}>
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                {side2}
              </Typography>
            </Grid>
            <Grid item>
                <BibTable rows={side2Sources}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Button onClick={() => {
              navigate(props.url + "/add-source");
            }}>
              Add New Source
            </Button>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}