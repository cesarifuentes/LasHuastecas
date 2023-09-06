// const { faker } = require("@faker-js/faker");
const MongoClient = require("mongodb").MongoClient;
// const _ = require("lodash");

// import products from "../server/constants/index";
const products = require("../server/constants/index");

async function main() {
  const uri = "mongodb://localhost://27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const categoriesCollection = client
      .db("las-huastecas")
      .collection("categories");

    let categories = ["Tacos", "Platters", "Breakfast", "Broth"].map(
      (category) => {
        return { name: category };
      }
    );
    await categoriesCollection.insertMany(categories);

    const productsCollection = client
      .db("las-huastecas")
      .collection("products");

    console.log(products);

    await productsCollection.insertMany(products);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main();
