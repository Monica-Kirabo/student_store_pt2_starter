
const order=require("../models/Order")
router.get("/", (req, res) => {
    const products =order.listOrdersForUser();
    res.status(200).json({ orders: orders });
  });


router.post("/", (req, res) => {
    const products = order.createOrder();
    res.status(200).json({ orders: orders });
  });