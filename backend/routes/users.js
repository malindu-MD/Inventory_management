const router = require("express").Router();
let User = require("../models/User");

//register new user

router.route("/reg_user").post((req, res) => {

    const user_email = req.body.user_email;
    const password = req.body.password;

    const newUser = new User({

        user_email, password
    })

    newUser.save().then(() => {
        res.json("User Resistraion is succesfully");
    }).catch((err) => {
        console.log(err);
    })


})
router.route("/log_user").post(async (req, res) => {

    const user_email = req.body.user_email;
    const password = req.body.password;

    const user = await User.findOne({ user_email });

    if (!user) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }



    if (password !== user.password) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    req.session.userId = user._id;




    res.json({ message: 'Logged in successfully', user });











})




module.exports = router;