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

const rows = [
  createData(<Source displayText={"Title"} author={"Author"} link={"https://www.w3schools.com/howto/howto_js_redirect_webpage.asp"}/>, <SliderScore average={3.6}/>),
  createData(<Source displayText={"Title"} author={"Author"} link={"https://www.w3schools.com/howto/howto_js_redirect_webpage.asp"}/>, <SliderScore average={3.8}/>),
  createData(<Source displayText={"Title"} author={"Author"} link={"https://www.w3schools.com/howto/howto_js_redirect_webpage.asp"}/>, <SliderScore average={3.2}/>),
  createData(<Source displayText={"Title"} author={"Author"} link={"https://www.w3schools.com/howto/howto_js_redirect_webpage.asp"}/>, <SliderScore average={5.0}/>),
  createData(<Source displayText={"Title"} author={"Author"} link={"https://www.w3schools.com/howto/howto_js_redirect_webpage.asp"}/>, <SliderScore average={4.5}/>)
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BibliograpyPage() {
  let data = require('./data/sources.json')[0];
  let discussionTitle = data.discussionTitle;
  let side1 = data.side1;
  let side2 = data.side2;
  let side1Sources = data.side1Sources.map(function(i) {return createData(<Source displayText={i.title} author={i.authors} link={i.sourceLink} date={i.date}/>, <SliderScore average={i.average}/>)});
  let side2Sources = data.side2Sources.map(function(i) {return createData(<Source displayText={i.title} author={i.authors} link={i.sourceLink} date={i.date}/>, <SliderScore average={i.average}/>)});
  return (
    <div>
      <Grid container p={2} spacing={2}>
        <Grid item xs={12}>
          <Item>
            {discussionTitle}
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            {side1}
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            {side2}
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