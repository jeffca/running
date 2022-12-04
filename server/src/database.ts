import * as mongodb from "mongodb";
import { Run } from "./run";
 
export const collections: {
   runs?: mongodb.Collection<Run>;
} = {};
 
export async function connectToDatabase(uri: string) {
   const client = new mongodb.MongoClient(uri);
   await client.connect();
 
   const db = client.db("meanStackExample");
   await applySchemaValidation(db);
 
   const runsCollection = db.collection<Run>("runs");
   collections.runs = runsCollection;
}
 
// Update our existing collection with JSON schema validation so we know our documents will always match the shape of our Employee model, even if added elsewhere.
// For more information about schema validation, see this blog series: https://www.mongodb.com/blog/post/json-schema-validation--locking-down-your-model-the-smart-way
async function applySchemaValidation(db: mongodb.Db) {
   const jsonSchema = {
       $jsonSchema: {
           bsonType: "object",
           required: ["location", "distance"],
           additionalProperties: false,
           properties: {
               _id: {},
               location: {
                   bsonType: "string",
                   description: "'location' is required and is a string",
               },
               distance: {
                   bsonType: "integer",
                   description: "'distance' is required and is an integer",
               },
           },
       },
   };
 
   // Try applying the modification to the collection, if the collection doesn't exist, create it
  await db.command({
       collMod: "runs",
       validator: jsonSchema
   }).catch(async (error: mongodb.MongoServerError) => {
       if (error.codeName === 'NamespaceNotFound') {
           await db.createCollection("runs", {validator: jsonSchema});
       }
   });
}
