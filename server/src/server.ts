import express from "express";

const app = express();

app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, nome: 'Anúncio 1' },
    { id: 2, nome: 'Anúncio 2' },
    { id: 3, nome: 'Anúncio 3' },
    { id: 4, nome: 'Anúncio 4' },
    { id: 5, nome: 'Anúncio 5' }
  ]);
});

app.listen(3333);