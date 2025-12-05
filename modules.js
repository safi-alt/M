// ===== MODULE MANAGEMENT FUNCTIONS =====

let currentModuleId = null;

// Initialize modules page
document.addEventListener("DOMContentLoaded", function () {
  loadModules();
});

// Show/Hide Add Module Form
function showAddModuleForm() {
  document.getElementById("addModuleForm").style.display = "block";
  document.getElementById("modulesList").style.display = "none";
  document.getElementById("moduleDetail").style.display = "none";
}

function cancelAddModule() {
  document.getElementById("addModuleForm").style.display = "none";
  document.getElementById("modulesList").style.display = "grid";
  // Clear form
  document.getElementById("moduleName").value = "";
  document.getElementById("moduleDescription").value = "";
}

// Save Module
function saveModule() {
  const name = document.getElementById("moduleName").value.trim();
  if (!name) {
    alert("Please enter a module name!");
    return;
  }

  const description = document
    .getElementById("moduleDescription")
    .value.trim();
  const color = document.querySelector(
    'input[name="moduleColor"]:checked'
  ).value;

  // Get existing modules
  const modules = getModules();

  // Create new module
  const newModule = {
    id: Date.now().toString(),
    name: name,
    description: description,
    color: color,
    createdAt: new Date().toISOString(),
    notes: [],
    flashcards: [],
    quizQuestions: [],
  };

  modules.push(newModule);
  saveModules(modules);
  updateStats();

  // Reload modules display
  loadModules();
  cancelAddModule();
}

// Load and Display Modules
function loadModules() {
  const modules = getModules();
  const modulesList = document.getElementById("modulesList");

  if (modules.length === 0) {
    modulesList.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-book-medical"></i>
        <h3>No Modules Yet</h3>
        <p>Create your first study module to organize your medical exam preparation</p>
      </div>
    `;
    return;
  }

  modulesList.innerHTML = modules
    .map(
      (module) => `
      <div class="module-card" style="border-left: 5px solid ${module.color}" onclick="openModule('${module.id}')">
        <div class="module-icon" style="background: ${module.color}">
          <i class="fas fa-book-medical"></i>
        </div>
        <h3>${module.name}</h3>
        <p>${module.description || "No description"}</p>
        <div class="module-stats">
          <span><i class="fas fa-sticky-note"></i> ${module.notes.length} Notes</span>
          <span><i class="fas fa-layer-group"></i> ${module.flashcards.length} Cards</span>
          <span><i class="fas fa-question-circle"></i> ${module.quizQuestions.length} Quiz</span>
        </div>
      </div>
    `
    )
    .join("");
}

// Open Module Detail View
function openModule(moduleId) {
  currentModuleId = moduleId;
  const module = getModuleById(moduleId);

  if (!module) return;

  // Hide modules list, show detail view
  document.getElementById("modulesList").style.display = "none";
  document.getElementById("addModuleForm").style.display = "none";
  document.getElementById("moduleDetail").style.display = "block";

  // Update header
  document.getElementById("detailModuleName").textContent = module.name;
  document.getElementById("detailModuleName").style.color = module.color;
  document.getElementById("detailModuleDescription").textContent =
    module.description || "No description";

  // Load content
  loadModuleNotes(module);
  loadModuleFlashcards(module);
  loadModuleQuiz(module);
}

// Back to Modules List
function backToModules() {
  document.getElementById("moduleDetail").style.display = "none";
  document.getElementById("modulesList").style.display = "grid";
  currentModuleId = null;
}

// Delete Current Module
function deleteCurrentModule() {
  if (!currentModuleId) return;

  if (
    !confirm(
      "Are you sure you want to delete this module? All content will be lost!"
    )
  ) {
    return;
  }

  let modules = getModules();
  modules = modules.filter((m) => m.id !== currentModuleId);
  saveModules(modules);
  updateStats();
  backToModules();
  loadModules();
}

// Content Tab Switching
function showContentTab(tab) {
  // Remove active from all tabs and content
  document
    .querySelectorAll(".content-tab")
    .forEach((t) => t.classList.remove("active"));
  document
    .querySelectorAll(".module-content")
    .forEach((c) => c.classList.remove("active"));

  // Add active to selected
  event.target.classList.add("active");
  document.getElementById(tab + "Content").classList.add("active");
}

// Load Module Notes
function loadModuleNotes(module) {
  const notesList = document.getElementById("notesList");
  if (module.notes.length === 0) {
    notesList.innerHTML =
      '<p class="empty-message">No notes yet. Add your first note!</p>';
    return;
  }

  notesList.innerHTML = module.notes
    .map(
      (note, index) => `
      <div class="note-item">
        <div class="note-header">
          <h4>${note.title}</h4>
          <div class="note-actions">
            <button class="btn-icon btn-edit" onclick="editNote(${index})">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn-icon btn-delete" onclick="deleteNote(${index})">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
        <p>${note.content}</p>
        <small>${new Date(note.createdAt).toLocaleDateString()}</small>
      </div>
    `
    )
    .join("");
}

// Load Module Flashcards
function loadModuleFlashcards(module) {
  const flashcardsList = document.getElementById("flashcardsList");
  if (module.flashcards.length === 0) {
    flashcardsList.innerHTML =
      '<p class="empty-message">No flashcards yet. Create your first flashcard!</p>';
    return;
  }

  flashcardsList.innerHTML = module.flashcards
    .map(
      (card, index) => `
      <div class="flashcard-item">
        <div class="flashcard-header">
          <h4>Card ${index + 1}</h4>
          <div class="flashcard-actions">
            ${card.difficulty ? `<span class="difficulty-tag difficulty-${card.difficulty}">${card.difficulty}</span>` : ''}
            <button class="btn-icon" onclick="deleteFlashcard(${index})">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
        <div class="flashcard-content">
          <strong>Q:</strong> ${card.question}<br>
          <strong>A:</strong> ${card.answer}
        </div>
      </div>
    `
    )
    .join("");
}

// Load Module Quiz
function loadModuleQuiz(module) {
  const quizList = document.getElementById("quizList");
  if (module.quizQuestions.length === 0) {
    quizList.innerHTML =
      '<p class="empty-message">No quiz questions yet. Add your first question!</p>';
    return;
  }

  quizList.innerHTML = module.quizQuestions
    .map(
      (q, index) => `
      <div class="quiz-item">
        <div class="quiz-header">
          <h4>Question ${index + 1}</h4>
          <button class="btn-icon" onclick="deleteQuizQuestion(${index})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
        <p class="quiz-question">${q.question}</p>
        <div class="quiz-options">
          ${q.options
            .map(
              (opt, i) => `
            <div class="quiz-option ${i === q.correctAnswer ? "correct" : ""}">
              ${String.fromCharCode(65 + i)}. ${opt}
              ${i === q.correctAnswer ? '<i class="fas fa-check-circle"></i>' : ""}
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `
    )
    .join("");
}

// Note Modal Variables
let editingNoteIndex = null;

// Add Note - Show Modal
function addNote() {
  editingNoteIndex = null;
  document.getElementById("noteModalTitle").innerHTML = '<i class="fas fa-sticky-note"></i> Add Note';
  document.getElementById("noteTitleInput").value = "";
  document.getElementById("noteContentInput").value = "";
  document.getElementById("noteModal").style.display = "flex";
}

// Edit Note - Show Modal with existing data
function editNote(index) {
  const modules = getModules();
  const module = modules.find((m) => m.id === currentModuleId);
  
  if (module && module.notes[index]) {
    editingNoteIndex = index;
    document.getElementById("noteModalTitle").innerHTML = '<i class="fas fa-edit"></i> Edit Note';
    document.getElementById("noteTitleInput").value = module.notes[index].title;
    document.getElementById("noteContentInput").value = module.notes[index].content;
    document.getElementById("noteModal").style.display = "flex";
  }
}

// Save Note from Modal
function saveNoteFromModal() {
  const title = document.getElementById("noteTitleInput").value.trim();
  const content = document.getElementById("noteContentInput").value.trim();
  
  if (!title) {
    alert("Please enter a title!");
    return;
  }
  if (!content) {
    alert("Please enter note content!");
    return;
  }

  const modules = getModules();
  const module = modules.find((m) => m.id === currentModuleId);

  if (module) {
    if (editingNoteIndex !== null) {
      // Update existing note
      module.notes[editingNoteIndex].title = title;
      module.notes[editingNoteIndex].content = content;
      module.notes[editingNoteIndex].updatedAt = new Date().toISOString();
    } else {
      // Add new note
      module.notes.push({
        title: title,
        content: content,
        createdAt: new Date().toISOString(),
      });
    }
    saveModules(modules);
    loadModuleNotes(module);
    loadModules();
    closeNoteModal();
  }
}

// Close Note Modal
function closeNoteModal() {
  document.getElementById("noteModal").style.display = "none";
  editingNoteIndex = null;
}

// Add Flashcard
function addFlashcard() {
  const question = prompt("Enter flashcard question:");
  if (!question) return;

  const answer = prompt("Enter flashcard answer:");
  if (!answer) return;

  const modules = getModules();
  const module = modules.find((m) => m.id === currentModuleId);

  if (module) {
    module.flashcards.push({
      question: question,
      answer: answer,
      difficulty: null,
      createdAt: new Date().toISOString(),
    });
    saveModules(modules);
    updateStats();
    loadModuleFlashcards(module);
    loadModules();
  }
}

// Add Quiz Question
function addQuizQuestion() {
  const question = prompt("Enter the question:");
  if (!question) return;

  const optA = prompt("Option A:");
  if (!optA) return;
  const optB = prompt("Option B:");
  if (!optB) return;
  const optC = prompt("Option C:");
  if (!optC) return;
  const optD = prompt("Option D:");
  if (!optD) return;

  const correct = prompt("Correct answer (A/B/C/D):").toUpperCase();
  if (!["A", "B", "C", "D"].includes(correct)) {
    alert("Invalid answer!");
    return;
  }

  const modules = getModules();
  const module = modules.find((m) => m.id === currentModuleId);

  if (module) {
    module.quizQuestions.push({
      question: question,
      options: [optA, optB, optC, optD],
      correctAnswer: correct.charCodeAt(0) - 65,
      createdAt: new Date().toISOString(),
    });
    saveModules(modules);
    loadModuleQuiz(module);
    loadModules();
  }
}

// Delete Functions
function deleteNote(index) {
  if (!confirm("Delete this note?")) return;

  const modules = getModules();
  const module = modules.find((m) => m.id === currentModuleId);

  if (module) {
    module.notes.splice(index, 1);
    saveModules(modules);
    loadModuleNotes(module);
    loadModules();
  }
}

function deleteFlashcard(index) {
  if (!confirm("Delete this flashcard?")) return;

  const modules = getModules();
  const module = modules.find((m) => m.id === currentModuleId);

  if (module) {
    module.flashcards.splice(index, 1);
    saveModules(modules);
    updateStats();
    loadModuleFlashcards(module);
    loadModules();
  }
}

function deleteQuizQuestion(index) {
  if (!confirm("Delete this question?")) return;

  const modules = getModules();
  const module = modules.find((m) => m.id === currentModuleId);

  if (module) {
    module.quizQuestions.splice(index, 1);
    saveModules(modules);
    loadModuleQuiz(module);
    loadModules();
  }
}

