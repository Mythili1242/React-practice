// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';


// const ExcelReader = () => {
//   const [excelData, setExcelData] = useState([]);

//   const handleFile = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         const data = event.target.result;
//         const workbook = XLSX.read(data, { type: 'binary' });
//         const sheetName = workbook.SheetNames[0];
//         const sheet = workbook.Sheets[sheetName];
//         const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
//         const headers = jsonData[0];
//         const formattedData = jsonData.slice(1).map((row) => {
//           const obj = {};
//           row.forEach((value, index) => {
//             obj[headers[index]] = value;
//           });
//           return obj;
//         });
//         setExcelData(formattedData);
//       };
//       reader.readAsBinaryString(file);
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFile} />
//       <pre>{JSON.stringify(excelData, null, 2)}</pre>
//     </div>
//   );
// };

// export default ExcelReader;


import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function ExcelReader(){
  const [excelData, setExcelData] = useState([]);
  const [excelData1, setExcelData1] = useState([]);
  
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        
        setExcelData(jsonData);
      };
      reader.readAsBinaryString(file);
    }
  };
console.log(excelData)
  return (
    <div>
      <input type="file" onChange={handleFile} />
      <pre>{JSON.stringify(excelData, null, 2)}</pre>
    </div>
  );
};

export default ExcelReader;
