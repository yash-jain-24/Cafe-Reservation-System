const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const User = require("./databaseconnection");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname));

app.get("/Project_home.html", (req, res) => {
  res.sendFile(path.join(__dirname, "Project_home.html"));
});
app.get("/Project_reservations.html", (req, res) => {
  res.sendFile(path.join(__dirname, "Project_reservations.html"));
});
app.get("/Project_menu.html", (req, res) => {
  res.sendFile(path.join(__dirname, "Project_menu.html"));
});
app.get("/Project_locations.html", (req, res) => {
  res.sendFile(path.join(__dirname, "Project_locations.html"));
});
app.get("/Project_ourstory.html", (req, res) => {
  res.sendFile(path.join(__dirname, "Project_ourstory.html"));
});
app.get("/Project_contact.html", (req, res) => {
  res.sendFile(path.join(__dirname, "Project_contact.html"));
});
app.get("/Project_login.html", (req, res) => {
  res.sendFile(path.join(__dirname, "Project_login.html"));
});
app.get("/Project_signup.html", (req, res) => {
  res.sendFile(path.join(__dirname, "Project_signup.html"));
});

app.post("/Project_reservations.html", async (req, res) => {
  try {
    const ouruser = new User.User({
      date: req.body.date,
      time: req.body.time,
      seats: req.body.seats,
      name: req.body.name,
      contact: req.body.contact,
      email: req.body.email,
    });
    const reserved = await ouruser.save();
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/Project_login.html", async (req, res) => {
  try {
    let lusername = req.body.lusername;
    let lpassword = req.body.lpassword;

    let check = await User.Signup.findOne({ username: lusername });
    // res.send(check.password);
    if (check.password === lpassword) {
      User.User.find({}, { _id: 0 }, (err, result) => {
        res.render("Project_result.ejs", {
          passname: result,
        });
        res.sendFile(path.join(__dirname, "Project_result.ejs"));
      });
    } else {
      res.sendFile(path.join(__dirname, "Project_home.html"));
    }
  } catch (error) {
    res.sendFile(path.join(__dirname, "Project_home.html"));
  }
});

app.post("/Project_signup.html", async (req, res) => {
  try {
    const ouruser = new User.Signup({
    email : req.body.email,
    username : req.body.username,
    password : req.body.password
    });
    const reserved = await ouruser.save();
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/Project_home.html`);
});
