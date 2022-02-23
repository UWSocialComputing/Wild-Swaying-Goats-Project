import './App.css';
import React from "react";
import Source from './components/Source.js';
import SliderScore from './components/SliderScore.js';
import { styled } from '@mui/material/styles';
import { 
  Button, 
  Grid, 
  Paper, 
  TableHead, 
  TableRow, 
  TableContainer, 
  TableCell, 
  TableBody, 
  Table 
} from "@material-ui/core";
import {Link} from "react-router-dom";

function createData(source, score) {
  return { source, score };
}

const rows = [
  createData(<Source displayText={"Title"} author={"Author"} link={"https://www.w3schools.com/howto/howto_js_redirect_webpage.asp"}/>, <SliderScore/>),
  createData(<Source displayText={"Title"} author={"Author"} link={"https://www.w3schools.com/howto/howto_js_redirect_webpage.asp"}/>, <SliderScore/>),
  createData(<Source displayText={"Title"} author={"Author"} link={"https://www.w3schools.com/howto/howto_js_redirect_webpage.asp"}/>, <SliderScore/>),
  createData(<Source displayText={"Title"} author={"Author"} link={"https://www.w3schools.com/howto/howto_js_redirect_webpage.asp"}/>, <SliderScore/>),
  createData(<Source displayText={"Title"} author={"Author"} link={"https://www.w3schools.com/howto/howto_js_redirect_webpage.asp"}/>, <SliderScore/>)
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
    <Grid container p={2} spacing={5}>
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
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 250 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Source</TableCell>
                  <TableCell align="left">Quality</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">{row.source}</TableCell>
                    <TableCell align="left">{row.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Item>
      </Grid>

      <Grid item xs={6}>
        <Item>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 250 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Source</TableCell>
                  <TableCell align="left">Quality</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">{row.source}</TableCell>
                    <TableCell align="left">{row.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Item>
      </Grid>

      <Link to="/add-source">
        <Button backgroundColor="#b4c5ed">
          Add New Source
        </Button>
        <Button color="#b4c5ed">
          Add New Source
        </Button>
      </Link>

    </Grid>

  );
}