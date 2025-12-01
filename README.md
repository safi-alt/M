# Medical Study Buddy 👨‍⚕️

Your Ultimate Companion for Medical Exam Success - A complete study management web app for medical students.

## 🌟 Features

### 📊 Dashboard (index.html)
- Overview of all study statistics
- Quick access cards to all features
- Real-time stats display
- Motivational messages

### ⏰ Study Timer (timer.html)
- **Pomodoro Technique** implementation
- 25-minute focus sessions
- 5-minute short breaks
- 15-minute long breaks (after 4 sessions)
- Customizable timer durations
- Session tracking and statistics
- Sound notifications
- Auto-start option
- Visual progress circle

### 📚 Modules (modules.html)
- Create unlimited study modules (Anatomy, Physiology, etc.)
- Color-coded organization
- Each module contains:
  - **Notes** - Study notes and important information
  - **Flashcards** - Question & Answer pairs
  - **Quiz Questions** - MCQs with 4 options
- Delete individual items or entire modules
- Visual stats for each module

### 🎴 Flashcards (flashcards.html)
- View all flashcards from all modules
- Filter by specific module
- **Interactive Review Mode**:
  - Click to flip cards
  - Mark difficulty (Easy/Okay/Difficult)
  - Navigate between cards
  - Progress tracking
- Beautiful flip animations

### 📈 Progress (progress.html)
- Overall statistics display
- Module breakdown with detailed stats
- Study session history
- **6 Achievement Badges**:
  - First Module
  - Flashcard Master (50 cards)
  - 7-Day Streak
  - Dedicated Learner (10 hours)
  - Module Pro (5 modules)
  - Pomodoro Champion (100 sessions)
- Reset all data option

## 📁 Project Structure

```
M/
├── index.html          # Dashboard homepage
├── timer.html          # Pomodoro study timer
├── modules.html        # Module management
├── flashcards.html     # Flashcard review system
├── progress.html       # Progress tracking & achievements
├── styles.css          # All styling (shared across pages)
├── app.js             # Shared utility functions
├── modules.js         # Module management functions
└── README.md          # This file
```

## 🎨 Design Features

- **Modern UI** with gradient backgrounds
- **Responsive design** - works on desktop, tablet, and mobile
- **Smooth animations** and transitions
- **Color-coded modules** for easy organization
- **Professional medical theme** with purple/blue gradients
- **Font Awesome icons** throughout

## 💾 Data Storage

- All data stored in browser's **localStorage**
- No server required
- Data persists between sessions
- Automatic statistics updates
- Daily reset for timer stats

## 🚀 How to Use

1. **Open `index.html`** in any modern web browser
2. **Create modules** for your medical subjects
3. **Add content** (notes, flashcards, quiz questions) to each module
4. **Use the timer** for focused study sessions
5. **Review flashcards** from the Flashcards page
6. **Track progress** and earn achievements

## 🌐 GitHub Pages Deployment

To deploy to GitHub Pages:

1. Create a new repository on GitHub
2. Push all files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Medical Study Buddy"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select "main" branch as source
5. Your app will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

## 🔧 Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with custom properties, flexbox, grid
- **Vanilla JavaScript** - All functionality (no frameworks!)
- **localStorage API** - Data persistence
- **Web Audio API** - Timer notifications
- **Font Awesome** - Icons

## 📱 Browser Compatibility

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile browsers ✅

## ⚙️ Customization

You can easily customize:
- **Colors**: Edit CSS variables in `styles.css` (lines 7-15)
- **Timer durations**: Use the settings panel in timer.html
- **Module colors**: 6 pre-defined colors available
- **Font**: Change the font-family in `styles.css`

## 📝 Notes

- All data is stored locally in your browser
- Clearing browser data will delete all your study data
- Use the "Reset All Data" button in Progress page to start fresh
- Best viewed on modern browsers with JavaScript enabled

## 🎯 Future Enhancement Ideas

- Export/Import data as JSON
- Print flashcards
- Spaced repetition algorithm
- Study analytics charts
- Dark mode
- Mobile app version
- Cloud sync

---

Made with ❤️ by S | Study Smart, Not Just Hard

**Good luck with your medical exams!** 🩺📖

