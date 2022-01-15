
const XLSX = require('xlsx')
const fsPath = require('fs-path');
async function generateVendorExcel(partnerData,res) {

    
    const date = Date.now();
    
    const table =`<table class='order-data'>
        <tbody>
        <tr>
            <th>name</th>
            <th>mobile</th>
            <th>email</th>
            <th>gstNumber</th>
            <th>panNumber</th>
            <th>gstImage</th>
            <th>panImage</th>
            <th>companyName</th>
            <th>Address</th>
        </tr>
<!-- Using join since return value of map is array seprated with commas(,) converting it to string with delimeter as ' ' --> 
        ${partnerData.map(singleUser=>
            `
            <tr>
            <td>${singleUser.name}</td>
            <td>${singleUser.phone}</td>
            <td>${singleUser.email}</td>
            <td>${singleUser.gst}</td>
            <td>${singleUser.pan}</td>
            <td>${singleUser.gstImage}</td>
            <td>${singleUser.panImage}</td>
            <td>${singleUser.companyName}</td>
            <td>${singleUser.address}</td>
            </tr>
        
        `
    ).join(' ')}
        
        </tbody>
    </table>` 

    let path = `./public/uploads/${date}vendor.xlsx`
    let pathToExport = `/uploads/${date}vendor.xlsx`

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

module.exports = generateVendorExcel
