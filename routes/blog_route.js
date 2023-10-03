// NPM packeges 
const express = require("express")
const mongoose = require("mongoose");
const controllers = require("../controllers/blog_controller");
const router = express.Router();

// Routers pointing to endpoint
router.get("/", controllers.getAllArticles);
router.post("/", controllers.postArticle);
router.get("/:id", controllers.getArticle);
router.delete("/:id", controllers.deleteArticle);
router.patch("/:id", controllers.updateArticle);

// export
module.exports = router;