

const router =require('express').Router(); 
const ensureAuthenticated = require('../middlewares/auth')


router.get('/products', ensureAuthenticated ,   (req,res) =>{

    console.log('---------' , req.user)

    res.status(200).json([
        {
            name : "mobile",
            price:10000
        },{
            name: "TV",
            price: 30000
        }
    ]
        

    )
})

module.exports = router