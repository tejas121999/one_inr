var pdf = require("pdf-creator-node");
//let ejs = require("ejs");
// Read HTML Template
const amounttowords = require("./amountotwords")

const pdfGenerator = async (partner, html) => {
    console.log(`data coming from reciept`,partner)
    var options = {
        format: "A4",
        orientation: "landscape",
        border: "10mm",
        header: {
            // height: "45mm",
            //contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
        },
        footer: {
        }
    };
    //If the donor has a Parent then Reciept will me made in the name of parent.
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
        path: `./${recieptentName}-${Date.now()}.pdf`,
        type: "",
    };


    pdf
        .create(document, options)
        .then((res) => {
            console.log(res, "======================");
        })
        .catch((error) => {
            console.error(error);
        });

}


module.exports = {
    pdfGenerator: pdfGenerator
}