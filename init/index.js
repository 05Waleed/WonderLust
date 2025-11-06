const mongoose = require("mongoose")
const initData = require("./data.js")
const Listing = require("../models/listing.js")

main()
    .then(res => { console.log("connect to DB") })
    .then(err => { console.log(err) })

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const initDB = async () => {
    await Listing.deleteMany({})
    initData.data = initData.data.map((obj) => ({...obj, owner: "68fd1a6d6eba9c345b274075"}))
    await Listing.insertMany(initData.data)
    console.log("data was initialized")
}

initDB()