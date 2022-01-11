const models = require('../models')


async function createBankData(data, t) {
    const createbankDetails = await models.bankDetails.create(
        { userId: data.userId, bankName: data.bankName, accountNumber: data.accountNumber, beneficiaryName: data.beneficiaryName, ifsc: data.ifsc }
        , { transaction: t })
    if (createbankDetails) {
        return true;
    } else {
        return false;
    }
}

module.exports = { createBankData }