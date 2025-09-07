const rawData = ``;

// Step 1: Split the rows
const rows = rawData.trim().split('\n');

// Step 2: Extract headers
const headers = rows[0].split('\t');

// Step 3: Convert to array of objects
let  result = rows.slice(1).map(row => {
  const values = row.split('\t');
  const obj = {};
  headers.forEach((header, index) => {
    obj[header.trim()] = values[index] ? values[index].trim() : '';
  });
  return obj;
});

result = result.map((item)=>{
    return {name:item['ITEM NAME'],code:item['ITEM CODE'],brand:item['Range'],finish:item['Color finish'],area:item['Instalation area'],mounting:item['type of mounting'],size:item['catridge MM'],quantity:item['Flow rate'],flow:item['Flow Type'],state:item['State'],imageSrc:'/public/products images/faucets/DELUXE/',details:'',imagesdata:[]}
})
