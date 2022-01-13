const models = require('../models');
const saltRounds = 10;
const twinBcrypt = require('twin-bcrypt');
const moment = require('moment');
const { paginationWithFromTo } = require('../utils/pagination')
const sequelize = models.Sequelize;
const Op = sequelize.Op;


exports.myProfile = async (req, res) => {
    const id = req.userData.id
    const data = await models.users.findOne({ where: { id } })
    if (!data) {
        res.status(400).json({
            message: "Failed to find user "
        })
    }
    res.status(200).json({
        message: "Success",
        data: data
    })
}
//update self profile
exports.updateProfile = async (req, res) => {
    const id = req.userData.id
    const { name, email, mobile, profileImage } = req.body
    const findUser = await models.users.findOne({ where: { id } })
    if (!findUser) {
        res.status(400).json({ message: "User not found" })
    }
    const data = await models.users.bulkCreate([{ name, email, mobile, profileImage }], { updateOnDuplicate: ['email'] }).then(() => { return models.users.update({ name, email, mobile, profileImage }, { where: { email: req.userData.email } }) })
    if (!data[0]) {
        return res.status(400).json({
            message: "Already Updated."
        })
    }
    return res.status(200).json({ message: "User Profile Updated Successfully." })
}

//update self password
exports.updateProfilePassword = async (req, res) => {
    const id = req.userData.id
    const { currentPassword, newPassword } = req.body;
    console.log(newPassword, currentPassword)


    let userData = await models.users.findOne({ where: { id } })
    if (!userData) {
        return res.status(400).json({
            message: "User does not exists"
        })
    }
    const result = await twinBcrypt.compareSync(currentPassword, userData.dataValues.password);
    if (result == false) {
        return res.status(401).json({
            message: "Wrong Credentials."
        })
    }
    const hash = await twinBcrypt.hashSync(newPassword, saltRounds);
    const updatePassword = await models.users.bulkCreate([{ password: hash }], { updateOnDuplicate: ['password'] }).then(() => { return models.users.update({ password: hash }, { where: { email: userData.dataValues.email } }) })
    if (!updatePassword[0]) {
        return res.status(400).json({
            message: "Password Reset Failed."
        })
    }
    return res.status(200).json({ message: "Password Reset Successful." })

}

//Create Users  by Admin
exports.createUser = async (req, res) => {
    let { name, email, mobile, role_id, password, parentId } = req.body

    var new_date = moment().add(365, 'days').format()
    const hash = await twinBcrypt.hashSync(password, saltRounds);

    let userData = await models.users.create({ name, email, mobile, role_id, password: hash, parentId, balanceNextRenewDate: new_date })
    if (!userData) {
        return res.status(401).json({
            message: "Failed to create a user"
        })
    }
    else {
        return res.status(200).json({
            message: "User created successfully",
        })
    }
}


//Get all Users 
exports.getAllUser = async (req, res) => {
    const { search, offset, pageSize } = paginationWithFromTo(
        req.query.search,
        req.query.from,
        req.query.to
    );
    let query = {};

    const searchQuery = {
        [Op.and]: [query, {
            [Op.or]: {
                name: { [Op.like]: search + "%" },
                email: { [Op.like]: search + '%' },
                mobile: { [Op.like]: search + '%' },
            },
        }]
    };
    const data = await models.users.findAll({
        offset: offset,
        limit: pageSize,
        where: searchQuery,
        attributes: ['id', 'name', 'email', 'mobile'],
        include: [{ model: models.role, attributes: ['id', 'roleName'] }]
    })
    if (!data) {
        return res.status(400).json({
            message: "Failed to get all data."
        })

    }
    return res.status(200).json({
        message: "Success",
        data: data,

    })
}