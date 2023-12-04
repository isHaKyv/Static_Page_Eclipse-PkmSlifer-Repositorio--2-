import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const TablaPedidos = () => {
  const [pedidos, setPedidos] = useState([
    {
      id: 1,
      cantidadProductos: 3,
      direccion: "Calle Principal 123",
      pais: "País A",
      ciudad: "Ciudad X",
      costoPedido: 50.0,
    },
    // Agrega más pedidos según sea necesario
  ]);

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const sortedPedidos = [...pedidos].sort((a, b) => {
    if (sortConfig.direction === "ascending") {
      return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
    } else if (sortConfig.direction === "descending") {
      return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
    }
    return 0;
  });

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                onClick={() => requestSort("id")}
                className={getClassNamesFor("id")}
              >
                ID Pedido{" "}
                {sortConfig &&
                  sortConfig.key === "id" &&
                  (sortConfig.direction === "ascending" ? (
                    <ArrowUpwardIcon />
                  ) : (
                    <ArrowDownwardIcon />
                  ))}
              </TableCell>
              <TableCell
                onClick={() => requestSort("cantidadProductos")}
                className={getClassNamesFor("cantidadProductos")}
              >
                Cantidad de Productos{" "}
                {sortConfig &&
                  sortConfig.key === "cantidadProductos" &&
                  (sortConfig.direction === "ascending" ? (
                    <ArrowUpwardIcon />
                  ) : (
                    <ArrowDownwardIcon />
                  ))}
              </TableCell>
              <TableCell>Dirección</TableCell>
              <TableCell
                onClick={() => requestSort("pais")}
                className={getClassNamesFor("pais")}
              >
                País{" "}
                {sortConfig &&
                  sortConfig.key === "pais" &&
                  (sortConfig.direction === "ascending" ? (
                    <ArrowUpwardIcon />
                  ) : (
                    <ArrowDownwardIcon />
                  ))}
              </TableCell>
              <TableCell
                onClick={() => requestSort("ciudad")}
                className={getClassNamesFor("ciudad")}
              >
                Ciudad{" "}
                {sortConfig &&
                  sortConfig.key === "ciudad" &&
                  (sortConfig.direction === "ascending" ? (
                    <ArrowUpwardIcon />
                  ) : (
                    <ArrowDownwardIcon />
                  ))}
              </TableCell>
              <TableCell
                onClick={() => requestSort("costoPedido")}
                className={getClassNamesFor("costoPedido")}
              >
                Costo del Pedido{" "}
                {sortConfig &&
                  sortConfig.key === "costoPedido" &&
                  (sortConfig.direction === "ascending" ? (
                    <ArrowUpwardIcon />
                  ) : (
                    <ArrowDownwardIcon />
                  ))}
              </TableCell>
              <TableCell>Opciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedPedidos.map((pedido, index) => (
              <TableRow key={index}>
                <TableCell>{pedido.id}</TableCell>
                <TableCell>{pedido.cantidadProductos}</TableCell>
                <TableCell>{pedido.direccion}</TableCell>
                <TableCell>{pedido.pais}</TableCell>
                <TableCell>{pedido.ciudad}</TableCell>
                <TableCell>{pedido.costoPedido}</TableCell>
                <TableCell>
                  <Button onClick={() => handleAceptarPedido(index)}>
                    Aceptar
                  </Button>
                  <Button onClick={() => handleDeclinarPedido(index)}>
                    Declinar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TablaPedidos;
