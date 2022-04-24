const express = require('express');
const routes = require('./controllers');
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require("./swagger.json");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.use(
  '/docs', 
  swaggerUI.serveFiles(swaggerDoc),
  swaggerUI.setup(swaggerDoc)
);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
