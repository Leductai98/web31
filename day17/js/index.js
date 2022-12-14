function isTable(node) {
  return node.tagName === "TABLE";
}

const table = Array.from(document.body.children).find(isTable);

const rows = table.rows;
for (let i = 0; i < rows.length; i++) {
  rows[i].cells[i].style.backgroundColor = "red";
}

for (let i = 0; i < rows.length; i++) {
  rows[i].cells[rows.length - 1 - i].style.backgroundColor = "red";
}
querySelectorAll(".box")