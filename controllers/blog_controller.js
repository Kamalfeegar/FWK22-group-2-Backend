const { v4: uuidv4 } = require("uuid");

function generateUniqueID() {
  let uniqueID = uuidv4();
  return uniqueID;
}

const articles = [
  { id: generateUniqueID(), title: "Title1", description: "description" },
  { id: generateUniqueID(), title: "Title2", description: "description2" },
];

//__________________________________________

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

//_______________________________________

const postArticle = async (req, res) => {
  try {
    const newItem = {
      title: req.body.title,
      description: req.body.description,
      id: generateUniqueID(),
    };

    articles.push(newItem);

    res.status(201).json(newItem); // Respond with the newly created item
  } catch (error) {
    console.log({ message: error });
  }
};

//______________________________________

const getArticle = async (req, res) => {
  try {
    //gpt example (does not work)
    //using title as id
    /*     const articleId = req.params.title;
    const article = articles.find(item => item.title === articleId);

    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    else
    res.status(200).json({ data: article });
 */
  } catch (error) {
    console.log({ message: error });
  }
};

const deleteArticle = async (req, res) => {
  try {
    //gpt example (does not work)
    /*     const idToDelete = parseInt(req.params.id);
  
    // Find the index of the article with the specified ID in the array
    const indexToDelete = articles.findIndex(article => article.id === idToDelete);
  
  
    if (indexToDelete === -1) {
      return res.status(404).json({ message: 'Article not found' });
    }
  
    // Remove the article from the array
    articles.splice(indexToDelete, 1);
  
    res.status(204).end(); */
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
