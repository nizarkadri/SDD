
const
    MongoClient = require('mongodb').MongoClient,
    express = require('express'),
    app = express(),
    port = 8080,
    uri = "mongodb+srv://"+process.env['DB_USERNAME']+":"+process.env['DB_PASSWORD']+"@cluster01.u5iy3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.get("/", (req, res) => {  
    res.send("Perfect");
})

app.listen(port, () => {
    console.log("Running");

})
