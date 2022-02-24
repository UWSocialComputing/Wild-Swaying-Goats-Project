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
  createData(<Source displayText={"Title"} author={"Author"} date={"12/15/2021"} link={"https://www.w3schools.com/howto/howto_js_redirect_webpage.asp"}/>, <SliderScore average={3.6}/>),
  createData(<Source displayText={"Title"} author={"Author"} date={"12/15/2021"} link={"https://www.w3schools.com/howto/howto_js_redirect_webpage.asp"}/>, <SliderScore average={3.8}/>),
  createData(<Source displayText={"Title"} author={"Author"} date={"12/15/2021"} link={"https://www.w3schools.com/howto/howto_js_redirect_webpage.asp"}/>, <SliderScore average={3.2}/>),
  createData(<Source displayText={"Title"} author={"Author"} date={"12/15/2021"} link={"https://www.w3schools.com/howto/howto_js_redirect_webpage.asp"}/>, <SliderScore average={5.0}/>),
  createData(<Source displayText={"Title"} author={"Author"} date={"12/15/2021"} link={"https://www.w3schools.com/howto/howto_js_redirect_webpage.asp"}/>, <SliderScore average={4.5}/>)
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BibliograpyPage() {
  return (
    <div>
      <Grid container p={2} spacing={2}>
        <Grid item xs={12}>
          <Item>
            Overall Title
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            Side 1 Title
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            Side 2 Title
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <BibTable rows={rows}/>
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>
            <BibTable rows={rows}/>
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