var pdf = require("pdf-creator-node");
//let ejs = require("ejs");
// Read HTML Template


const pdfGenerator = async (partner,html) => {
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
    

    //var ejsFile = ejs.renderFile("utils/demo.ejs",users)
    
    //console.log(users);
    
    var document = {
        html: html,
        data: { 
            partner: partner 
        },
        path: `./${Date.now()}-output.pdf`,
        type: "",
    };
    
    console.log(document.data);
    
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