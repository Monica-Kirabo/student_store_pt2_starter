const db=require("../db")

class Store{
static async listProducts(){
    const productsResult = await db.query(`
    SELECT * FROM products
    `);
  const products = productsResult.rows;
  return products;
// const results=await db.query(
    
//     // SELECT p.id,
//     //        p.name,
//     //        p.category,
//     //        p.image,
//     //        p.description,
//     //        p.price,
//     //         FROM products As p 
//     // JOIN users As u ON u.id=p.id
//     // ORDER BY p.created_at DESC

// )
// return results.rows
}
}

module.exports=Store