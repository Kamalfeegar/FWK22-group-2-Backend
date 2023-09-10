const article = require('../models/blog_model.js')

const getAllArticles = async (req,res) =>{
    try {
        res.json(await article.find());
      } catch (error) {
        console.log({ message: error });
      }
}
const postArticle = async (req,res) =>{
    try {
        const createItem = new article({
        title: req.body.title,
          description: req.body.description,
        });
        res.json(await createItem.save());
      } catch (error) {
        console.log({ message: error });
      }
}

const getArticle = async (req,res) =>{
    try {
        res.json(await article.find());
      } catch (error) {
        console.log({ message: error });
      }
}

const deleteArticle = async (req,res) =>{
    try {
        res.json(await article.deleteOne({ _id: req.params.itemId }));
      } catch (error) {
        console.log({ message: error });
      }
}

const uppdateArticle = async (req,res) =>{
    try {
        res.json()
    } catch (error) {
        console.log({ message: error });
    }
}
module.exports = {
    getAllArticles,
    postArticle,
    getArticle,
    deleteArticle,
    uppdateArticle,
  };