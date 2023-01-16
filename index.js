const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const { users } = require("./state");

//if you have express.json you dont need body-parser. this is built-in.
app.use(express.json());

/* BEGIN - create routes here */
// get(route,callback function)
app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/1", (req, res) => {
  res.json(users[0]);
});

app.get("/users/:userId", (req, res) => {
  res.json(users.find((user) => user._id === parseInt(req.params.userId)));
});

app.post("/users", (req, res) => {
  (newUser = {
    _id: 6,
    name: "Don Stone",
    occupation: "Teacher",
    avatar:
      "http://66.media.tumblr.com/5ea59634756e3d7c162da2ef80655a39/tumblr_nvasf1WvQ61ufbniio1_400.jpg",
  }),
    users.push(newUser);
  return res.json(users);
});

// app.post("/users", (req, res) => {
//   users.push({
//     _id: counter++,
//     ...req.body,
//   });
//   res.json(users[users.length - 1]);
//   console.log(req.body);
// });

app.put("/users/:userId", (req, res) => {
  const updateUser = req.body;
  users.forEach((user) => {
    if (user._id === parseInt(req.params.userId)) {
      user.name = updateUser.name ? updateUser.name : updateUser.name;
      user.occupation = updateUser.occupation
        ? updateUser.occupation
        : updateUser.occupation;

      return res.json(user);
    }
  });
});

app.delete("/user/1", (req, res) => {
  users[0].delete;
  res.send("deleted");
});

app.delete("/users/:userId", (req, res) => {
  let findUser = users.find((user) => user._id === parseInt(req.params.userId));
  let user = findUser[0];
  if (user) {
    users.isActive = "false";
    res.send("deleted");
    res
      .status(400)
      .json({ msg: `No member with the id of ${req.params.userId} is found!` });
  }
});

/* END - create routes here */

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
