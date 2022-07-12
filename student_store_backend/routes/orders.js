const security=require( "../middleware/security")
const order=require("../models/Order")
router.get("/", (req, res,next) => {
    try{
        const {user}=res.locals
        const orders =order.listOrdersForUser({user,orders:req.body});
        res.status(200).json({ orders: orders });
    }catch(err){
        next(err)
    }
  });


router.post("/", security.requireAuthenticatedUser,(req, res,next) => {
    try{
        const {user}=res.locals
        const orders = order.createOrder({user,orders:req.body});
        res.status(200).json({ orders: orders });
    }catch(err){
        next(err)
    }
   
  });