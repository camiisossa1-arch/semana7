const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let reportes = [];
let idCounter = 1;

app.post('/reportes', (req, res) => {
  const nuevoReporte = {
    id: idCounter++,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion,
    fecha: new Date().toISOString()
  };
  reportes.push(nuevoReporte);
  res.status(201).json(nuevoReporte);
});

app.get('/reportes', (req, res) => {
  res.json(reportes);
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en puerto ${port}`);
});