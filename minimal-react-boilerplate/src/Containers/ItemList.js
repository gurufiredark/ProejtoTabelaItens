import React, { useState, useEffect } from "react";
import api from "../Services/api";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.getItems().then((items) => setItems(items));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Código</b>
            </TableCell>
            <TableCell>
              <b>Descrição</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.codigo}</TableCell>
              <TableCell>{item.descricao}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Items;
