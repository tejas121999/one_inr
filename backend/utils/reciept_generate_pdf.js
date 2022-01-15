var pdf = require("pdf-creator-node");
const amounttowords = require("./amountotwords")

const recieptGenerator = async (partner, html) => {
    var options = {
        format: "A5",
        orientation: "landscape",
        // // border: "10mm",
        // header: {
        //     // height: "45mm",
        //     //contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
        // },
        // footer: {
        // }
    };
    
    let recieptentName = partner.user.name
    if(partner.dataValues.user.parentId != 0){
        recieptentName = partner.user.user.name 
    }
    const amountInWords = amounttowords(partner.dataValues.amount)

    var document = {
        html: html,
        data: {
            
            name : recieptentName,
            receipt_number : partner.dataValues.receipt_number,
            amount : partner.dataValues.amount,
            createdAt :  partner.dataValues.createdAt,
            amountInWords: amountInWords,
            
        },
        path: `./public/uploads/userReceipts/${recieptentName}-${Date.now()}.pdf`,
        type: "",
    };


    pdf
        .create(document, options)
        .then((res) => {
        })
        .catch((error) => {
            console.error(error);
        });

}


module.exports = {
    recieptGenerator: recieptGenerator
}