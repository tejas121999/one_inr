const models = require('../models');
const _ = require("lodash")


let bulkUserUploadService = async (dataArray, fileId) => {
    try{
    if (dataArray.length == 0) {
        //csvUpload = bulkUpload
        await models.csvUpload.update(
            { status: "error" },
            { where: { id: fileId } },
        );
        return { status: 422, success: false, message: "Incorrect excel file" };
    }
    //check data
    let keys = ['name','email','mobile','IMEI','os_type','balance','razorpay_payment_id','razorpay_payment_date','plan','role_id','email_verified_at','password','invoice_id','profile_image','auth_key','parent_id','created_at','deleted_at','user_id','is_priyank','balance_renew_date','balance_next_renew_date'];
    let checkData = _.keysIn(dataArray[0]);
    let checkValues = _.difference(keys, checkData)
    if (checkValues.length != 0) {
        await models.csvUpload.update(
            { status: "error" },
            { where: { id: fileId } },
        );
        return { status: 422, success: false, message: "Incorrect excel file" };
    }
    for (const ele of dataArray) {
        ele.fileId = fileId;
        // ele.user_status = ele.user_status.toLocaleLowerCase().trim();
    }
    // const defaultAray = [{
    //     name: '',
    //     email: '',
    //     mobile: null,
    //     IMEI: '',
    //     osType: '',
    //     balance: null,
    //     razorpayPaymentId: null,
    //     razorpayPaymentDate: null,
    //     plan: '',
    //     roleId: null,
    //     emailVerifiedAt: null,
    //     password: '',
    //     invoiceId: null,
    //     profileImage: '',
    //     authKey: '',
    //     parentId: null,
    //     createdAt: null,
    //     deletedAt: null,
    //     userId: null,
    //     isPriyank: 'false',
    //     balanceRenewDate: null,
    //     balanceNextRenewDate: null,
    //     fileId: 6
    //   },
    //   {
    //     name: '',
    //     email: '',
    //     mobile: null,
    //     IMEI: '',
    //     osType: '',
    //     balance: null,
    //     razorpayPaymentId: null,
    //     razorpayPaymentDate: null,
    //     plan: '',
    //     roleId: null,
    //     emailVerifiedAt: null,
    //     password: '',
    //     invoiceId: null,
    //     profileImage: '',
    //     authKey: '',
    //     parentId: null,
    //     createdAt: null,
    //     deletedAt: null,
    //     userId: null,
    //     isPriyank: 'false',
    //     balanceRenewDate: null,
    //     balanceNextRenewDate: null,
    //     fileId: 6
    //   }]
    const users = await models.bulkUserUpload.bulkCreate(
        dataArray,
        {
            returning: true,
        }
    );


    if (!users) {
        await models.csvUpload.update(
            { status: "failed" },
            { where: { id: fileId } },

        );
        return { status: 422, success: false, message: "data not created" };
    }

    return { users, success: true, status:200 }
}
catch(err){
    console.log(err)
}
}

module.exports = {
    bulkUserUploadService : bulkUserUploadService
}