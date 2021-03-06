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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

/*
Populates the page with bibliography tables and sources.
*/

function createData(source, score) {
  return { source, score };
}

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
        <Grid item xs={12}>
          <Button
            size="large"
            startIcon={ <ArrowBackIosIcon /> }
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </Button>
          <Typography variant="h3" align="center" gutterBottom>
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
        <Grid item xs={12} align="center">
            <Button 
              color="primary"
              variant="contained" 
              onClick={() => {
                navigate(props.url + "/add-source");
              }}
              style={{marginTop:"15px", marginBottom:"15px", padding:"10px 20px"}}
            >
              Add New Source
            </Button>
        </Grid>
      </Grid>
    </div>
  );
}