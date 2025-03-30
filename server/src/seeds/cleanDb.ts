import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    // Check if the model exists and has the necessary properties
    if (models[modelName]?.db?.db) {
      let modelExists = await models[modelName].db.db.listCollections({
        name: collectionName
      }).toArray();

      if (modelExists && modelExists.length) {
        await db.dropCollection(collectionName);
      }
    }
  } catch (err) {
    throw err;
  }
}
