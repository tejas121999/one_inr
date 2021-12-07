var pdf = require("pdf-creator-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("pdf_generator.html", "utf8");
var options = {
    format: "A4",
    orientation: "landscape",
    border: "10mm",
    // header: {
    //     height: "45mm",
    //     contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
    // },
    // footer: {
    //     height: "28mm",
    //     contents: {
    //         first: 'Cover page',
    //         2: 'Second page', // Any page number is working. 1-based index
    //         default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
    //         last: 'Last Page'
    //     }
    // }
};

const user = { name: "Surya", age: 24, gender: "male"}

var document = {
    html: html,
    data: {
      users: users,
    },
    path: `./${Date.now()}-output.pdf`,
    type: "",
  };


pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });