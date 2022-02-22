import './App.css';
import React from "react";
import Source from './components/Source.js';
import SliderScore from './components/SliderScore.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

function createData(source, score) {
  return { source, score };
}

const rows = [
  createData(<Source displayText={"Testing"} link={"https://www.w3schools.com/howto/howto_js_redirect_webpage.asp"}/>, <SliderScore/>),
  createData(<Source displayText={"Testing"} link={"https://www.w3schools.com/howto/howto_js_redirect_webpage.asp"}/>, <SliderScore/>),
  createData(<Source displayText={"Testing"} link={"https://www.w3schools.com/howto/howto_js_redirect_webpage.asp"}/>, <SliderScore/>),
  createData(<Source displayText={"Testing"} link={"https://www.w3schools.com/howto/howto_js_redirect_webpage.asp"}/>, <SliderScore/>),
  createData(<Source displayText={"Testing"} link={"https://www.w3schools.com/howto/howto_js_redirect_webpage.asp"}/>, <SliderScore/>)
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
      <Grid item xs={6}>
        <Item>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 250 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Source</TableCell>
                  <TableCell align="left">Score</TableCell>
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
                  <TableCell align="left">Score</TableCell>
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
    </Grid>
  );
}