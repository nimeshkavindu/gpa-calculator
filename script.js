const gradeMap = {
    'A+': 4.2,
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
    'C-': 1.7,
    'D': 1.0,
    'F': 0.0,
  };
  
  function addRow() {
    const table = document.querySelector("#subjectsTable tbody");
    const row = document.createElement("tr");
  
    row.innerHTML = `
      <td class="p-2"><input type="text" class="subject w-full p-1 border rounded" placeholder="e.g., Web Services" /></td>
      <td class="p-2">
        <select class="grade w-full p-1 border rounded">
          ${Object.keys(gradeMap).map(g => `<option value="${g}">${g}</option>`).join('')}
        </select>
      </td>
      <td class="p-2"><input type="number" class="credits w-full p-1 border rounded" min="0" /></td>
      <td class="p-2 text-center"><button onclick="this.closest('tr').remove()" class="text-red-500 hover:text-red-700">🗑️</button></td>
    `;
  
    table.appendChild(row);
  }
  
  function calculateGPA() {
    const grades = document.querySelectorAll(".grade");
    const credits = document.querySelectorAll(".credits");
  
    let totalPoints = 0;
    let totalCredits = 0;
  
    grades.forEach((gradeEl, index) => {
      const grade = gradeEl.value;
      const credit = parseFloat(credits[index].value);
  
      if (!isNaN(credit)) {
        totalCredits += credit;
        totalPoints += gradeMap[grade] * credit;
      }
    });
  
    const gpa = totalCredits === 0 ? 0 : (totalPoints / totalCredits).toFixed(3);
  
    document.getElementById("gpaResult").innerText = `Your GPA is: ${gpa}`;
  }
  