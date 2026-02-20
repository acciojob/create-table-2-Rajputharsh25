function createTable() {
  // 1. Get the number of rows and columns from the user
  const rn = prompt("Input number of rows");
  const cn = prompt("Input number of columns");

  // 2. Convert inputs to numbers
  const rows = parseInt(rn);
  const cols = parseInt(cn);

  // 3. Validation: Check if inputs are numbers and greater than 0
  if (isNaN(rows) || isNaN(cols)) {
    return; // Ignore non-numeric values
  }

  if (rows <= 0 || cols <= 0) {
    alert("Please enter positive values only.");
    return;
  }

  // 4. Reference the table element and clear any existing content
  const table = document.getElementById("myTable");
  table.innerHTML = "";

  // 5. Generate the Table
  for (let i = 0; i < rows; i++) {
    // Create a new row
    const tr = document.createElement("tr");

    for (let j = 0; j < cols; j++) {
      // Create a new cell
      const td = document.createElement("td");
      
      // Set the text content in Row-i Column-j format
      td.textContent = `Row-${i} Column-${j}`;
      
      // Append the cell to the row
      tr.appendChild(td);
    }

    // Append the row to the table
    table.appendChild(tr);
  }
}