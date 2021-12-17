
const XLSX = require('xlsx')
const fsPath = require('fs-path');
// const path = require('path')
// console.log(path.dirname(__dirname))
// console.log(__dirname.concat("/download.csv"))
async function generateUpcomingDonorExcel(partnerData,res) {

    
    const date = Date.now();
    
    const table =`<table class='order-data'>
        <tbody>
        <tr>
            <th>Renewal Date</th>
            <th>Name</th>
            <th>Donated</th>
            <th>Balance</th>
        </tr>
<!-- Using join since return value of map is array seprated with commas(,) converting it to string with delimeter as ' ' --> 
        ${partnerData.map(singleUser=>
            `
            <tr>
            <td>${singleUser.balanceRenewalDate}</td>
            <td>${singleUser.name}</td>
            <td>${singleUser.mobile}</td>
            <td>${singleUser.balance}</td>
            </tr>
        
        `
    ).join(' ')}
        
        </tbody>
    </table>` 

    let path = `./public/uploads/${date}donor.xlsx`
    let pathToExport = `/uploads/${date}donor.xlsx`

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

module.exports = generateUpcomingDonorExcel
