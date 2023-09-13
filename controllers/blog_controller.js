const articles = [
  { title: "Title1", description: "description1" },
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
    const createItem = new article({
      title: req.body.title,
      description: req.body.description,
    });

    res.json(await createItem.save()); 

  } catch (error) {
    console.log({ message: error });
  } 
};

const getArticle = async (req, res) => {
  try {
    res.json(await article.find());
  } catch (error) {
    console.log({ message: error });
  } 
};

const deleteArticle = async (req, res) => {
   try {
    res.json(await article.deleteOne({ _id: req.params.itemId })); 
  } catch (error) {
    console.log({ message: error });
  } 
};

const uppdateArticle = async (req, res) => {
   try {
   const updatedArticle = await article.updateOne(
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
