const { v4: uuidv4 } = require("uuid");
const fs = require("fs").promises

function generateUniqueID() {
  let uniqueID = uuidv4();
  return uniqueID;
}

const createdDate = Date.now();

// const articles = [
//   { date: (new Date (createdDate)), id: 1, title: "TestProfile", description: "description" },
//   { date: (new Date (createdDate)), id: generateUniqueID(), title: "Title2", description: "description2" },
// ];

//__________________________________________

const getAllArticles = async (req, res) => {
  try {
    const data = await fs.readFile("data.json");
    const jsonData = JSON.parse(data);
    res.status(200).json({data: jsonData})
  } catch (error) {
    res.status(500).json({message: "Internal server error"});
  }
}

//_______________________________________

const postArticle = async (req, res) => {
  try {

    const {title, description} = req.body

    const data = await fs.readFile("data.json");
    const articles = JSON.parse(data);

    const newItem = {
      title: req.body.title,
      description: req.body.description,
      id: generateUniqueID(),
      date: (new Date (createdDate)),
    };

    articles.push(newItem);

    fs.writeFile("data.json", JSON.stringify(articles, null, 2));

    res.status(201).json(newItem); // Respond with the newly created item
  } catch (error) {
    console.log({ message: error });
  }
};

//______________________________________

const getArticle = async (req, res) => {
  try {
    const articleId = req.params.id;

    const data = await fs.readFile("data.json");
    const jsonData = JSON.parse(data);
    const findArticle = jsonData.find((article) => article.id === articleId)

    res.status(200).json({data: findArticle})
  } catch (error) {
    res.status(500).json({message: "Internal server error"});
  }
}

const deleteArticle = async (req, res) => {
  try {
    const articleIdToDelete = req.params.id;

    const data = await fs.readFile("data.json");
    const jsonData = JSON.parse(data);
    const findArticle = jsonData.findIndex((dataArticle) => dataArticle.id === articleIdToDelete)
    const deleteArticle = jsonData.splice(findArticle, 1)
    fs.writeFile("data.json", JSON.stringify(jsonData, null, 2))

    res.status(200).json({data: deleteArticle})
  } catch (error) {
    res.status(500).json({message: "Internal server error"});
  }
}

const updateArticle = async (req, res) => {
  try {
    
    const articleToUpdate = req.params.id;
    const articleBodyToUpdate = req.body;

    const data = await fs.readFile("data.json")
    const jsonData = JSON.parse(data);
    const findArticle = jsonData.findIndex((article) => article.id === articleToUpdate);
    jsonData[findArticle] = {...jsonData[findArticle], ...articleBodyToUpdate}
    fs.writeFile("data.json", JSON.stringify(jsonData, null, 2))

    res.status(200).json({data: jsonData[findArticle]})
  } catch (error) {
    res.status(500).json({message: "Internal server error"});
  }
}

module.exports = {
  getAllArticles,
  postArticle,
  getArticle,
  deleteArticle,
  updateArticle,
};
