import './App.css';
import React from "react";
import Source from './components/Source.js';
import SliderScore from './components/SliderScore.js';
import BibTable from './components/BibTable.js';
import { styled } from '@mui/material/styles';
import { 
  Button, 
  Grid, 
  Paper
} from "@material-ui/core";

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
  let side1Sources = data.side1Sources.map(function(i) {return createData(<Source displayText={i.title} author={i.authors} link={i.sourceLink} date={i.date}/>, <SliderScore average={i.average}/>)});
  let side2Sources = data.side2Sources.map(function(i) {return createData(<Source displayText={i.title} author={i.authors} link={i.sourceLink} date={i.date}/>, <SliderScore average={i.average}/>)});
  return (
    <div style={{ marginLeft: "20px", marginRight: "20px", marginTop: "150px" }}>
      <Grid container p={2} spacing={2}>
        <Grid item xs={12}>
          <Item>
            <h2>
              {discussionTitle}
            </h2>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <h3>
              {side1}
            </h3>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <h3>
              {side2}
            </h3>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <BibTable rows={side1Sources}/>
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>
            <BibTable rows={side2Sources}/>
          </Item>
        </Grid>
        
        <Grid item xs={6}>
          <Item>
            <Button backgroundColor="#b4c5ed" href="/add-source">
              Add New Source
            </Button>
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>
            <Button backgroundColor="#b4c5ed" href="/add-source">
              Add New Source
            </Button>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}