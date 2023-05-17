const { Router } = require("express");
const router = Router();

const ListProduct = [
  {
    item: "milk",
    quantity: 2,
  },
  {
    item: "number one",
    quantity: "3",
  },
];

router.get("/", (request, response) => {
  response.cookie('visited',true,{
    "amount":3,
    maxAge:3000
  })
  response.send(ListProduct);
});

// Get Route Parameters
router.get("/:item", (request, response) => {
  const { item } = request.params;
  const ProductItem = ListProduct.find((g) => g.item === item);
  response.send(ProductItem);
});

router.post("/", (request, response) => {
  console.log(request.body);
  ListProduct.push(request.body);
  response.send(201);
});


module.exports = router;
