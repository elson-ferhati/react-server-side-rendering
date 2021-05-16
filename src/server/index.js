import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import Home from '@Components/Home';

const app = express();

const PORT = 9600;

app.get('/', (req, res) => {
  const jsx = renderToString(<Home />);
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My SSR App</title>
        </head>
        <body>
            <div id='root-app'>${jsx}</div>
        </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
