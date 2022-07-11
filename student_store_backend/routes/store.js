const store=require("../models/store")
const router = express.Router()
const {listProducts}=require("../models/store")



router.get("/", (req, res) => {
    const products = store.listProducts();
    res.status(200).json({ products: products });
  });


module.exports = router;