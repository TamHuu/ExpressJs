const express = require("express");
const productsRoute = require("./routes/products");
const marketsRoute = require("./routes/markets")
const app = express();
const PORT = 3001;


// Get JSON
app.use(express.json());

// Get Url đã mã hóa
app.use(express.urlencoded());
// Get Params

app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next();
});


// Get Routes
app.use('/api/v1/products',productsRoute)
app.use('/api/v1/markets',marketsRoute)
app.listen(PORT, () => console.log(`Running Express Server on PORT ${PORT}`));
