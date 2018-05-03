const router = require("express").Router();
const bookRoutes = require("./books");
//const htmlRoutes = require("./htmlRoutes");


// Book routes
router.use("/books", bookRoutes);

module.exports = router;
