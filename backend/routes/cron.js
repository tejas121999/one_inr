const models = require('../models')
const sequelize = models.sequelize;
var express = require('express');
var router = express.Router();
const {wrapper} =require('../utils/errorWrap');
const checkAuth = require('../middleware/checkAuth');

///Create Cron Type 
router.post('/',checkAuth,wrapper(async function (req, res) {
    let data;
    await sequelize.transaction(async (t) => {
        data = await models.cronType.create({ type: req.body.type})
    })
    if (data) {
        return res.status(201).json({
            message: "Success"
        })
    } else {
        return res.status(400).json({
            message: "Failed"
        })
    }

}))



module.exports = router;





// async function createCronType () {
    //     let data;
    //     await sequelize.transaction(async (t) => {
    //         data = await models.createCronType.create({ type })
    //     })
    //     if(data){
    //         return res.status(201).json({
    //             message : "Success"
    //         })
    //     }else{
    //         return res.status(400).json({
    //             message : "Failed"
    //         })
    //     }
    //}