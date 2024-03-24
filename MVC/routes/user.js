const express = require("express");
const router = express.Router();
const { handelGetAllUsers, handelFindByUsers, handelCreate, handelUpdateUser, handelDeleteUser } = require("../controllers/user");


router.route("/")
    .get(handelGetAllUsers)
    .post(handelCreate)


router.route("/:id")
    .get(handelFindByUsers)
    .patch(handelUpdateUser)
    .delete(handelDeleteUser);

module.exports = router;
