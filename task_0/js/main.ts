interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "London",
  };
  
  const studentsList: Student[] = [student1, student2];
  
  // Create table
  const table: HTMLTableElement = document.createElement("table");
  table.border = "1";
  
  // Optional header
  const headerRow: HTMLTableRowElement = document.createElement("tr");
  
  const nameHeader: HTMLTableCellElement = document.createElement("th");
  nameHeader.textContent = "First Name";
  
  const locationHeader: HTMLTableCellElement = document.createElement("th");
  locationHeader.textContent = "Location";
  
  headerRow.appendChild(nameHeader);
  headerRow.appendChild(locationHeader);
  table.appendChild(headerRow);
  
  // Add student rows
  studentsList.forEach((student: Student): void => {
    const row: HTMLTableRowElement = document.createElement("tr");
  
    const firstNameCell: HTMLTableCellElement = document.createElement("td");
    firstNameCell.textContent = student.firstName;
  
    const locationCell: HTMLTableCellElement = document.createElement("td");
    locationCell.textContent = student.location;
  
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
  
    table.appendChild(row);
  });
  
  // Render table
  document.body.appendChild(table);
