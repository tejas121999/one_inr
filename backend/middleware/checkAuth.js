const jwt = require('jsonwebtoken');
const models = require('../models');




module.exports = async (req, res, next) => {
    try {
      const checkToken = req.headers.authorization; 
      if (checkToken == undefined) {
        return res.status(401).send({ message: 'Unauthorized' });
      } else {
        // let checkTokenInDb = await models.users.findOne({where : { rememberToken : checkToken }})
        // if(!checkTokenInDb){
        //     res.status(401).send({message : 'Invalid Token '})
        // }
        let token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
        let userDetails = await models.users.findOne({
          where: { id: decode.id },
        });
        if (userDetails) {
        //   delete userDetails.dataValues.email_verified_at;
        //   delete userDetails.dataValues.password;
        //   delete userDetails.dataValues.remember_token;
        //   delete userDetails.dataValues.forget_id;
          req.userData = userDetails.dataValues;
          next();
        } else {
          return res.status(401).send({ message: 'Unauthorized' });
        }
      }
    } catch (err) {
      console.error(err);
      return res.send(err);
    }
  };
  
  