const express =require("express")
const app = express()
const bodyparser = require("body-parser")
const {MongoClient} = require("mongodb")

const port = 3000
const uri = "mongodb+srv://Hauwah:KUD917aPCc3i0OPD@mongodemo.8oanb.mongodb.net/?retryWrites=true&w=majority&appName=MongoDemo"
const client = new MongoClient(uri)

async function connectMongo() {
    try{
        await client.connect()
        console.log("Connected to mongoDB")
    } catch (err) {
        console.error("Error connecting to mongoDB:", err)
    }
}
connectMongo()

