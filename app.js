// ===== SHARED UTILITY FUNCTIONS =====

// Load and display statistics on dashboard
function loadStats() {
  const modules = JSON.parse(localStorage.getItem("medStudyModules")) || [];
  const stats = JSON.parse(localStorage.getItem("medStudyStats")) || {
    totalStudyTime: 0,
    totalFlashcards: 0,
    quizzesTaken: 0,
    totalScore: 0,
  };

  // Update dashboard if elements exist
  const timeElement = document.getElementById("totalStudyTime");
  const flashcardsElement = document.getElementById("totalFlashcards");
  const modulesElement = document.getElementById("modulesCompleted");

  if (timeElement) {
    const hours = Math.floor(stats.totalStudyTime / 60);
    const minutes = stats.totalStudyTime % 60;
    timeElement.textContent = `${hours}h ${minutes}m`;
  }

  if (flashcardsElement) {
    flashcardsElement.textContent = stats.totalFlashcards;
  }

  if (modulesElement) {
    modulesElement.textContent = modules.length;
  }

  const totalSessionsElement = document.getElementById("totalSessions");
  if (totalSessionsElement) {
    const timerStats = JSON.parse(localStorage.getItem("timerStats")) || {
      totalSessions: 0,
    };
    totalSessionsElement.textContent = timerStats.totalSessions || 0;
  }
}

// Update statistics in localStorage
function updateStats() {
  const modules = JSON.parse(localStorage.getItem("medStudyModules")) || [];
  const stats = JSON.parse(localStorage.getItem("medStudyStats")) || {
    totalStudyTime: 0,
    totalFlashcards: 0,
    quizzesTaken: 0,
    totalScore: 0,
  };

  // Count total flashcards across all modules
  stats.totalFlashcards = modules.reduce(
    (sum, m) => sum + m.flashcards.length,
    0
  );

  localStorage.setItem("medStudyStats", JSON.stringify(stats));
  loadStats();
}

// Get all modules
function getModules() {
  return JSON.parse(localStorage.getItem("medStudyModules")) || [];
}

// Get a specific module by ID
function getModuleById(moduleId) {
  const modules = getModules();
  return modules.find((m) => m.id === moduleId);
}

// Save modules to localStorage
function saveModules(modules) {
  localStorage.setItem("medStudyModules", JSON.stringify(modules));
}

// Set active navigation tab
function setActiveNav(pageName) {
  const navLinks = document.querySelectorAll(".nav-tab");
  navLinks.forEach((link) => {
    if (link.getAttribute("data-page") === pageName) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Initialize common elements on page load
document.addEventListener("DOMContentLoaded", function () {
  loadStats();
});
