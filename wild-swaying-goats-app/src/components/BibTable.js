import React from "react";
import {
    TableHead, 
    TableRow, 
    TableCell, 
    TableBody, 
    Table 
  } from "@material-ui/core";

export default function BibTable(props) {
    return(
        <Table sx={{ minWidth: 250 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ width: "60%" }} align="left">Source</TableCell>
                <TableCell style={{ width: "20%" }} align="left">Quality</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell style={{ width: "60%" }} align="left">{row.source}</TableCell>
                  <TableCell style={{ width: "20%" }} align="left">{row.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
    );
}