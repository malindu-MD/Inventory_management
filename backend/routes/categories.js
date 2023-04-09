const router = require("express").Router();
let Category = require("../models/Category");

// create new
router.route("/add_category").post((req, res) => {

    const category_name = req.body.category_name;
    const category_desc = req.body.category_desc;
    const Status = Number(req.body.Status);
    const Image=req.body.Image;
    const newCategory = new Category({

        category_name,
        category_desc,
        Status,
        Image

    })
    //then is java script promise
    newCategory.save().then(() => {

        res.json("Category Added");

    }).catch((err) => {
        console.log(err);
    })//pass object to database


})

//read or display all category
router.route("/").get((req, res) => {
    Category.find().then((categories) => {
        res.json(categories)
    }).catch((err) => {
        console.log(err);
    })
})
//http//localhost:8070/categories/update/id
//use collon
//can using post
router.route("/update/:id").put(async (req, res) => {
    let catId = req.params.id;//same to url id for fetch
    const { category_name, category_desc, Status,Image } = req.body;
    const updateCategory = {
        category_name,
        category_desc,
        Status,
        Image
    }

    const update = await Category.findByIdAndUpdate(catId, updateCategory).then(() => {

        res.status(200).send({ status: "user updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating category", error: err.message })
    })
    //await mean please wait update complete 



})

router.route("/delete/:catid").delete(async (req, res) => {
    let catId = req.params.catid;
    await Category.findByIdAndDelete(catId).then(() => {
        res.status(200).send({ status: "user deleted" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with delete category", error: err.message })
    })

})

router.route("/get/:id").get(async (req, res) => {
    let catId = req.params.id;
    await Category.findById(catId).then((category) => {
        res.json(category)
    }).catch((err) => {

        res.status(500).send({ status: "Error with fetch category", error: err.message })

    })
    //category.findone(email)
})
module.exports = router;
