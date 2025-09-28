const express = require("express"); //bring in express
const app = express(); //create an "app" object
const port = 3000; //define a port

app.use(express.static("public"));

app.get("/create-mad-libs", (req, res) => {
    console.log("request for root path") // call back funtion when someone vists the homepage
  const name = req.query.name; //get the name from the query string
  const adj1 = req.query.adjective1; ///get the adjective from the query string
  const noun = req.query.noun1; //get the noun from the query string
  const verb = req.query.verb;    //get the verb from the query string
  const adj2 = req.query.adjective2; //get the second adjective from the query string
  const noun2 = req.query.noun2; //get the second noun from the query string

  //log the values to the console
  console.log("Name: ", name);
  console.log("Adjective: ", adj1);
  console.log("noun: ", noun);
  console.log("verb: ", verb);
  console.log("Adjective 2: ", adj2);
  console.log("noun 2: ", noun2);

  //create the story
  const story = `One lovely day ${name} had a ${adj1} ${noun} that loved to ${verb}. One day ${name} stumbles upon a ${adj2} ${noun2}, and everything changed! `;
 
  //send only happens once, it ends the response and this is what goes back to the client 
  res.send(`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Mad Lib Story</title>
  <!-- Bootstrap CSS CDN -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body">
        <h1 class="card-title">Your Mad Lib Story</h1>
        <p class="card-text">${story}</p>
        <a href="/mad-libs-form.html" class="btn btn-primary">Create Another Story</a>
      </div>
    </div>
  </div>
</body>
</html>
    `
    
);
});

//start the server, listening on port 3000
app.listen(port, () => {
    //log to the console that the server is running
  console.log("Server is running on ports: " + port);
});
