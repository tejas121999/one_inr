const models = require('../models');
const check = require('../lib/checkLib');
const sequelize = models.Sequelize
const Op = sequelize.Op
module.exports = async (req,res,next ) =>{
    try {
        const userId =  req.userData.id;
        const id = req.userData.roleId;
        const requestInfo = { 'method': req.method, 'baseUrl': req.baseUrl, 'path': req.route.path }

        let data = await models.rolePermission.findOne({where : {roleId : id}})
        let permissions = data.dataValues.permissions
        let arrayPermissions = permissions.split(",")
        // console.log(`array`,arrayPermissions)

        const systemInfoData = await models.permissionSystemInfo.findAll({
            where: { permissionId: { [Op.in]: arrayPermissions } },
            attributes: ['systemInfo']
        });
         const systemInfo = systemInfoData.map(data =>  data.systemInfo )

        const access = checkAccess(requestInfo, systemInfo);
        if (!access) {
            return res.status(403).json({ message: 'access denied' })
        }
        next();
    } catch (error) {
        return res.send(error);
    }
}
const checkAccess = (requestInfo, systemInfo) => {
    if (check.isEmpty(systemInfo)) {
        return false
    }
    for (let data of systemInfo) {
        if (data.method.toLowerCase() === requestInfo.method.toLowerCase() && data.baseUrl.toLowerCase() === requestInfo.baseUrl.toLowerCase() && data.path.toLowerCase() === requestInfo.path.toLowerCase()) {
            return true
        }
    }
    return false
}
