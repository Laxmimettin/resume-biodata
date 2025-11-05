function showSection(sectionId) {
  document.querySelector('.welcome-page').style.display = 'none';
  document.getElementById(sectionId).classList.remove('hidden');
}

function goBack() {
  document.querySelectorAll('.resume-section, .biodata-section').forEach(sec => sec.classList.add('hidden'));
  document.querySelector('.welcome-page').style.display = 'block';
}