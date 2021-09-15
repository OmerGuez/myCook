const express = require("express");
const authJwt = require("../Middlewares/authJwt");
const usersController = require("../controllers/usersController");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/OurProject/test/FreeInfromation", usersController.allAccess);
  
  app.get("/OurProject/test/UsersInformations", authJwt.verifyToken, usersController.userBoard);


const router = express.Router();

router
  .route("/")
router
  .route("/:id")
}