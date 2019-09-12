const User = require('./models');// access models

module.exports = {
    index: function(req,res){
        res.render('index')
    },
    create: function(req,res){
        console.log(req.body);
        const user = new User();
        user.name = req.body.name_input;
        user.age = req.body.age_input;
        // User.create(req.body)
        user.save()
            .then(newUserData => console.log("user created: ", newUserData))
            .catch(err => console.log(err));
        res.redirect("/success");
    },
    success: function(req,res){
        User.find()
            .then(data => res.render('success', {user: data}))//I made a lot of user's data is currently an array
            .catch(err => res.json(err));
    },
}
// Export anything in this .exports object to another file "requiring" this file