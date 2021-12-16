
const XLSX = require('xlsx')
const fsPath = require('fs-path');
// const path = require('path')
// console.log(path.dirname(__dirname))
// console.log(__dirname.concat("/download.csv"))
async function generateUserReceiptsExcel(partnerData,res) {

    //console.log(partnerData,"+++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    const date = Date.now();
    // var xls = json2xls(finalData);
    
    // setTimeout(async function () {
    //     fs.readFile(path, (err, data) => {

    //         if (fs.existsSync(path)) {
    //             fs.unlinkSync(path);
    //         }
    //     });
    // }, 50000);

    const table =`<table class='order-data'>
        <tbody>
        <tr>
            <th>Donor Name</th>
            <th>Receipt No</th>
            <th>Project Name</th>
            <th>NGO Name</th>
            <th>Mail Status</th>
            <th>Receipt</th>
            <th>Created At</th>
        </tr>
<!-- Using join since return value of map is array seprated with commas(,) converting it to string with delimeter as ' ' --> 
        ${partnerData.map(singleUser=>
            `
            <tr>
            <td>${singleUser.user.dataValues.name}</td>
            <td>${singleUser.receiptNumber}</td>
            <td>${singleUser.projectId}</td>
            <td>${singleUser.ngoId}</td>
            <td>${singleUser.mailSend}</td>
            <td>${singleUser.receiptNumber}</td>
            <td>${singleUser.createdAt}</td>
        
            </tr>
        
        `
    ).join(' ')}
        
        </tbody>
    </table>` 

    let path = `./public/uploads/${date}user-receipts.xlsx`
    let pathToExport = `/uploads/${date}user-receipts.xlsx`

    const wb = XLSX.read(table,{type:'string'})
    /* generate buffer */
    const buf = XLSX.write(wb, {type:'buffer', bookType:"xlsx"});
    /* send to client */
	// return res.status(200).send(buf);
    // res.download(__dirname);
    
    let file = await fsPath.writeFileSync(path, buf, 'binary');
    // res.status(200).json({ message: 'success', url : `http://` + pathToExport });
    return {pathToExport}
}
module.exports = generateUserReceiptsExcel
