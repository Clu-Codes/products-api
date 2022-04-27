const express = require('express');
const routes = require('./controllers');
const swaggerUI = require('swagger-ui-express');
const swaggerV1 = require('./swagger-v1.json');
const swaggerV2 = require('./swagger-v2.json');

const app = express();
const PORT = process.env.PORT || 3001;
const swaggerOptions = {
  defaultModelsExpandDepth: -1
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.use(
  '/docs/v1', 
  swaggerUI.serveFiles(swaggerV1, { swaggerOptions }),
  swaggerUI.setup(swaggerV1)
);
app.use(
  '/docs/v2', 
  swaggerUI.serveFiles(swaggerV2, { swaggerOptions }),
  swaggerUI.setup(swaggerV2)
);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
