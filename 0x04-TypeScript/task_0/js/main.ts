interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: 'Amine',
    lastName: 'Caroline',
    age: 24,
    location: 'imaginary'
}

const student2: Student = {
    firstName: 'Vicky',
    lastName: 'James',
    age: 24,
    location: 'Ohio'
}

const arr: Student[] = [student1, student2]

const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);
const head: HTMLTableSectionElement = table.createTHead();
const row: HTMLTableRowElement = head.insertRow();
const tableHead1: HTMLTableHeaderCellElement = row.insertCell(0);
const tableHead2: HTMLTableHeaderCellElement = row.insertCell(1);
tableHead1.innerHTML = ("<b>First Name</b>");
tableHead2.innerHTML = ("<b>Location</b>");
const body: HTMLTableSectionElement = table.createTBody();
for (const student of arr) { 
  const newL: HTMLTableRowElement = body.insertRow();
  const name: HTMLTableCellElement = newL.insertCell();
  name.innerHTML = student.firstName;
  const location: HTMLTableCellElement= newL.insertCell();
  location.innerHTML = student.location;
}
