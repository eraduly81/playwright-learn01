import * as XLSX from 'xlsx';

export async function readExcelFile(filePath: string): Promise<any[]> {
  try {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // Assuming you want the first sheet
    const worksheet = workbook.Sheets[sheetName];
    const data: any[] = XLSX.utils.sheet_to_json(worksheet);
    return data;
  } catch (error) {
    console.error("Error reading Excel file:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

// Example usage (you'll need to call this function somewhere)
async function exampleUsage() {
  try {
    const excelData = await readExcelFile('path/to/your/excel/file.xlsx');
    console.log(excelData); // Process the data as needed
  } catch (error) {
    console.error("Failed to read excel file");
  }
}

//exampleUsage(); //Commented out to prevent execution during import