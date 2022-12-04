import * as express from "express";
import * as mongodb from "mongodb";
import { collections } from "./database";
 
export const runRouter = express.Router();
runRouter.use(express.json());
 
runRouter.get("/", async (_req, res) => {
   try {
       const runs = await collections.runs.find({}).toArray();
       res.status(200).send(runs);
   } catch (error) {
       res.status(500).send(error.message);
   }
});

runRouter.get("/:id", async (req, res) => {
    try {
        const id = req?.params?.id;
        const query = { _id: new mongodb.ObjectId(id) };
        const run = await collections.runs.findOne(query);
  
        if (run) {
            res.status(200).send(run);
        } else {
            res.status(404).send(`Failed to find an employee: ID ${id}`);
        }
  
    } catch (error) {
        res.status(404).send(`Failed to find an employee: ID ${req?.params?.id}`);
    }
 });

 runRouter.post("/", async (req, res) => {
    try {
        const run = req.body;
        const result = await collections.runs.insertOne(run);
  
        if (result.acknowledged) {
            res.status(201).send(`Created a new run: ID ${result.insertedId}.`);
        } else {
            res.status(500).send("Failed to create a new run.");
        }
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
 });