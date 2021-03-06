var pdf = require("pdf-creator-node");
//let ejs = require("ejs");
// Read HTML Template


const pdfGenerator = async (partner,filePath,html) => {
    // console.log(partner[0].user.dataValues.name)
    var options = {
        format: "A2",
        orientation: "portrait",
        border: "10mm",
        header: {
            height: "45mm",
            //contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
        },
        footer: {
            height: "28mm",
            contents: {
                first: 'Cover page',
                2: 'Second page', // Any page number is working. 1-based index
                default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
                last: 'Last Page'
            }
        }
    };
    
    const pathForPdf = `./public/uploads/${filePath}-${Date.now()}.pdf`;
    const pathForStorage = `/uploads/${filePath}-${Date.now()}.pdf`;
    var document = {
        html: html,
        data: { partner: partner },
        path: pathForPdf,
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


    return { path:pathForStorage}
        
}


module.exports = {
    pdfGenerator: pdfGenerator
}