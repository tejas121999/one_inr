const models = require('../models')

const getCommission = async (commission, goal) =>  {

    const configData = await models.configs.findAll();
    let gst;
    let pg;

    await configData.map(ele => {
        if (ele.dataValues.name === 'gst') {
            gst = ele.dataValues.value;
        } if (ele.dataValues.name === 'payment_gateway_percentage') {
            pg = ele.dataValues.value;
        }
    });

    let commissionModel = (Number(commission) * goal) / 100;  
    let gstCal = (commissionModel * gst) / 100;   //GST Calculaion After taking commision on goal.
    let paymentGatewayCal = (Number(goal) + commissionModel + gstCal) * pg / 100;   //Payment Gateway Calculation after calculating GST.
    let target = Number(goal) + Number(commissionModel) + Number(gstCal) + Number(paymentGatewayCal); //Calculating Target
    target = Math.round(target) //Rounding off target value.

    return target;

}

module.exports ={
    getCommission :getCommission
}