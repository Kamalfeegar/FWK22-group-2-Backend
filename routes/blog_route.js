// NPM packeges 
const express = require("express")
const mongoose = require("mongoose");
const controllers = require("../controllers/blog_controller");
const router = express.Router();

// Routers pointing to endpoint
router.get("/", controllers.getAllArticles);
router.post("/", controllers.postArticle);
router.get("/:itemId", controllers.getArticle);
router.delete("/:itemId", controllers.deleteArticle);
router.patch("/:itemId", controllers.uppdateArticle);

// export
module.exports = router;