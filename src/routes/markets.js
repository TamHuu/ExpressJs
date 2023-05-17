const { Router } = require("express");
const router = Router();

const supermarket = [
  {
    id: 1,
    store: "Long Hoa market",
    miles: 0.6,
  },
  {
    id: 2,
    store: "Long Hai market",
    miles: 2.5,
  },
  {
    id: 3,
    store: "Hanh Thong Tay market",
    miles: 2.8,
  },
  {
    id: 4,
    store: "Ben Thanh market",
    miles: 3.5,
  },
  {
    id: 5,
    store: "Ba Chieu market",
    miles: 1.8,
  },
];

router.get("", (request, response) => {
  const { miles } = request.query;
  const parseMiles = parseInt(miles);
  if (!isNaN(parseMiles)) {
    const filteredStore = supermarket.filter((s) => s.miles <= parseMiles);
    response.send(filteredStore);
  } else response.send(supermarket);
});

router.post("", (request, response) => {
  console.log(request.body);
  supermarket.push(request.body);
  response.send(201);
});
module.exports = router;
