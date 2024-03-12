// script.js

document.addEventListener('DOMContentLoaded', () => {
    fetchStudents();
  });
  
  function fetchStudents() {
    fetch('/students')
      .then(response => response.json())
      .then(students => {
        const studentsContainer = document.getElementById('students');
        students.forEach(student => {
          const studentDiv = document.createElement('div');
          studentDiv.classList.add('student');
          studentDiv.innerHTML = `
            <h2>${student.student_name}</h2>
            <p>Grade: ${student.student_grade}</p>
          `;
          studentsContainer.appendChild(studentDiv);
        });
      })
      .catch(error => console.error('Error fetching students:', error));
  }
  