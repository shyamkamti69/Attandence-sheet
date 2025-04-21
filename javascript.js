
function markAttendance(button) {
    const row = button.parentElement.parentElement;
    const statusCell = row.querySelector('.status');
  
    if (statusCell.textContent === "Absent") {
      statusCell.textContent = "Present";
      button.textContent = "Undo";
      button.classList.add("marked");
    } else {
      statusCell.textContent = "Absent";
      button.textContent = "Present";
      button.classList.remove("marked");
    }
  }
  