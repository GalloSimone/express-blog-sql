const express = require("express");
const router = express.Router();
const posts =require("../data/posts.js")
const postsController = require("../controllers/postscontroller.js")


 //INDEX
     router.get('/',postsController.index);
 //SHOW 
     router.get("/:id",postsController.show);
 //STORE
 router.post("/",postsController.store);
 //UPDATE
router.put("/:id",postsController.update) 
//DESTROY
 router.delete('/:id',postsController.destroy)


module.exports = router;