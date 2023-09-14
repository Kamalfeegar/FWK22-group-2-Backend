const articles = [
  { title: "Title1", description: "description" },
  { title: "Title2", description: "description2" },
];



const getAllArticles = async (req, res) => {
  try {
    /* res.json(await article.find()); */
    res.status(200).json({
      data: articles,
    });
  } catch (error) {
    console.log({ message: error });
  }
};
const postArticle = async (req, res) => {
    try {
      const newItem = {
        title: req.body.title,
        description: req.body.description,
      };
  
      articles.push(newItem);
  
      res.status(201).json(newItem); // Respond with the newly created item
  
  } catch (error) {
    console.log({ message: error });
  } 
};

const getArticle = async (req, res) => {
  try {
    res.json(await articles.find());
  } catch (error) {
    console.log({ message: error });
  } 
};

const deleteArticle = async (req, res) => {
   try {
    res.json(await articles.deleteOne({ _id: req.params.itemId })); 
  } catch (error) {
    console.log({ message: error });
  } 
};

const uppdateArticle = async (req, res) => {
   try {
   const updatedArticle = await articles.updateOne(
      { _id: req.params.itemId },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    res.json(updatedArticle);
  } catch (error) {
    console.log({ message: error });
  } 
};
module.exports = {
  getAllArticles,
  postArticle,
  getArticle,
  deleteArticle,
  uppdateArticle,
  articles,
};
