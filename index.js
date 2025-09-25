const express = require('express');
const users = require('./MOCK_DATA.json');

const app = express();
const PORT = 8000;

// ROUTES
app.get('/users',(req, res) => {
    const html = `
        <ul> 
          ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;

    res.send(html);
});

// REST API
app.get('/api/users', (req, res) => {
    return res.json(users);
});

// To access the users dynamically
// app.get("/api/users/:id", (req, res) => {

//     const id = Number(req.params.id);
//     const user = users.find((user) =>  user.id === id);

//     res.json(user);
// })


app 
   .route("/api/users/:id")
   .get((req, res) => {

      const id = Number(req.params.id);
      const user = users.find((user) => user.id === id);

      return res.json(user);
   })
   .patch((req, res) => {
    return res.json({status : "Pending"});
   })
   .delete((req, res) => {
    return res.json({status : "Pending"});
   })

// create a new user
app.post("/api/users", (req, res) => {
    return res.json({status: "Pending"});
})

// edit the user with user id
// app.patch("/api/users/:id", (req, res) => {
//     return res.json({status: 'Pending'});
// })

// Delete the user with the user id
// app.delete("/api/users/:id", (req, res) => {
//     return res.json({status : "Pending"});
// })



app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));