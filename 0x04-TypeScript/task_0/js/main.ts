export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

export const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 47,
  location: "LA",
};

export const student2: Student = {
  firstName: "iman",
  lastName: "Doe",
  age: 22,
  location: "MA",
};

export const studentsList: Student[] = [student1, student2];

const tbStyle = `
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
table {
    border: 1px solid black;
    background: #d3d3d3;
    border-collapse: collapse;
}

td {
    border: 1px solid black;
}
`;

const table = document.createElement("table");

studentsList.forEach((student) => {
  const tr = document.createElement("tr");
  const tdFirstName = document.createElement("td");
  const tdLocation = document.createElement("td");

  tdFirstName.textContent = student.firstName;
  tr.append(tdFirstName);
  tdLocation.textContent = student.location;
  tr.append(tdLocation);

  table.append(tr);
});

document.body.append(table);
const tableStyle = document.createElement("style");
tableStyle.innerHTML = tbStyle;
document.head.appendChild(tableStyle);
