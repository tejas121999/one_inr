const models = require('../models')
const Sequelize = models.Sequelize;
const sequelize = models.sequelize;
const Op = Sequelize.Op;

exports.donate = async (req, res) => {
    const userId = req.userData.id;
    const userBalance = req.userData.balance;
    const projectId = req.params.id;
    const { amount } = req.body;
    if (userBalance <= amount) {
        return res.status(400).json({ message: "Insufficient Balance! Please add funds in your wallet." })
    }
    let projectIntervalId = await findProjectIntervalId(projectId)
    await sequelize.transaction(async (t) => {
        await models.users.decrement({ balance: amount }, { where: { id: userId, } },{ transaction: t }) //Removing user balance from user wallet.
        await models.projects.increment({ funded: amount }, { where: { id: projectId } },{ transaction: t }) //Adding user balance in project fund balance.
        if (projectIntervalId) await models.projectInterval.increment({ funded: amount }, { where: { id: projectId } },{ transaction: t })  //Adding user balance in project interval fund balance.
        await models.donations.create({ userId, projectId, projectIntervalId },{ transaction: t }) //Creating a record in donation ledger.
    })
    return res.status(200).json({ message: "Donation Successful." })
}


async function findProjectIntervalId(projectId) {
    let data = await models.projectInterval.findOne({ where: { projectId, isActive: true } }, { attributes: ['id'] })
    return data.id;
}