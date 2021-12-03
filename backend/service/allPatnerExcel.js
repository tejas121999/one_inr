
const XLSX = require('xlsx')
function generateAllUserExcel(partnerData,res) {
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
            <td>${singleUser.mobile}</td>
            <td>${singleUser.email}</td>
            <td>${singleUser.gstNumber}</td>
            <td>${singleUser.panNumber}</td>
            <td>${singleUser.gstImage}</td>
            <td>${singleUser.panImage}</td>
            <td>${singleUser.companyName}</td>
            <td>${singleUser.Address}</td>
            </tr>
        
        `
    ).join(' ')}
        
        </tbody>
    </table>` 

    const wb = XLSX.read(table,{type:'string'})
    /* generate buffer */
    const buf = XLSX.write(wb, {type:'buffer', bookType:"xlsx"});
    /* send to client */
	return res.status(200).send(buf);
}
module.exports = generateAllUserExcel
