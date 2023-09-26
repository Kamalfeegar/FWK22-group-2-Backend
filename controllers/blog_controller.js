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
    const articleId = req.params.id;

    const articleIndex = articles.findIndex((article) => article.id == articleId)
    articles.splice(articleIndex, 1);

    res.status(200).json({
      status: "success",
    })

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
