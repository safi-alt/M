# 📚 Medical Study Buddy - Complete User Guide

**Your Ultimate Companion for Medical Exam Success**

Made with ❤️ by S | Study Smart, Not Just Hard

---

## 📋 Table of Contents

1. [Introduction](#-introduction)
2. [Getting Started](#-getting-started)
3. [Dashboard](#-dashboard-indexhtml)
4. [Study Timer](#-study-timer-timerhtml)
5. [Modules](#-modules-moduleshtml)
6. [Flashcards](#-flashcards-flashcardshtml)
7. [Progress & Achievements](#-progress--achievements-progresshtml)
8. [Data Management](#-data-management)
9. [Mobile Usage](#-mobile-usage)
10. [Tips & Best Practices](#-tips--best-practices)
11. [FAQ](#-frequently-asked-questions)

---

## 🌟 Introduction

Medical Study Buddy is a free, browser-based study application designed specifically for medical students preparing for their exams. The app runs entirely in your browser - no downloads, no accounts, no internet required after initial load!

### Key Features:
- ⏱️ **Pomodoro Timer** - Stay focused with timed study sessions
- 📝 **Notes** - Organize your study notes by module
- 🃏 **Flashcards** - Create and review Q&A flashcards
- ⭐ **Starred Items** - Mark important notes and flashcards
- 🏆 **Achievements** - Earn badges as you progress
- 📊 **Progress Tracking** - Monitor your study statistics
- 💾 **Export/Import** - Backup and sync your data across devices

---

## 🚀 Getting Started

### First Time Setup:
1. Open the website in your browser
2. You'll land on the **Dashboard** - your home base
3. Start by creating your first **Module** (e.g., "Anatomy")
4. Add **Notes** and **Flashcards** to your module
5. Use the **Timer** for focused study sessions
6. Track your **Progress** and earn achievements!

### Navigation:
The app has 5 main pages, accessible via the navigation tabs at the top:

| Tab | Icon | Purpose |
|-----|------|---------|
| Dashboard | 🏠 | Overview and quick stats |
| Study Timer | ⏰ | Pomodoro timer for focused study |
| Modules | 📚 | Manage your study modules, notes, and flashcards |
| Flashcards | 🃏 | Review all your flashcards |
| Progress | 📈 | View stats, achievements, and manage data |

---

## 🏠 Dashboard (index.html)

The Dashboard is your home page - it shows an overview of all your study activity.

### What You'll See:

#### 📊 Statistics Cards:
- **Total Study Time** - Combined time from all completed focus sessions
- **Total Flashcards** - Number of flashcards you've created across all modules
- **Modules Completed** - Number of study modules you've created
- **Total Sessions** - Number of Pomodoro focus sessions completed

#### 🎯 Quick Actions:
- **Start Studying** - Jump to the Study Timer
- **Create Module** - Go to Modules page to add content
- **Review Cards** - Go to Flashcards for review
- **View Progress** - See your achievements and detailed stats

### How to Use:
Simply click on any card or navigation tab to go to that section. The Dashboard automatically updates whenever you complete sessions or add content.

---

## ⏱️ Study Timer (timer.html)

The Study Timer uses the **Pomodoro Technique** - a proven method for maintaining focus and avoiding burnout.

### How the Pomodoro Technique Works:
1. **Focus Session** (25 min) - Study without distractions
2. **Short Break** (5 min) - Rest your mind
3. **Repeat** 4 times
4. **Long Break** (15 min) - Take a longer rest after 4 sessions

### Timer Features:

#### 🎛️ Mode Selection:
- **Focus** - 25-minute study session (default)
- **Short Break** - 5-minute break
- **Long Break** - 15-minute break

#### ▶️ Controls:
- **Start** - Begin the timer
- **Pause** - Pause the timer (you can resume anytime)
- **Reset** - Reset the current timer to full duration

#### 📈 Stats Display:
- **Total Sessions** - All-time completed focus sessions
- **Sessions Today** - Sessions completed today (resets at midnight)
- **Time Today** - Total focus time today

#### ⚙️ Settings (click the gear icon):
- **Focus Duration** - Change from default 25 minutes
- **Short Break** - Change from default 5 minutes
- **Long Break** - Change from default 15 minutes
- **Auto-start** - Automatically start next session after break
- **Sound notifications** - Enable/disable completion sound

### How Sessions Are Counted:
- Only **Focus sessions** are counted (not breaks)
- Sessions count toward your achievements
- Time is added to your total study time

### What Happens When Timer Completes:
1. 🔔 Sound notification plays (repeating beep)
2. 📱 System notification appears (if permitted)
3. 🎉 Popup modal shows completion message
4. Click **OK** to stop the sound
5. Timer automatically switches to break (or focus after break)

### Screen Sleep Feature:
The timer uses timestamp-based timing, so it continues accurately even if:
- Your phone screen turns off
- You switch to another app
- You close the browser tab (it will resume when you return)

---

## 📚 Modules (modules.html)

Modules are containers for organizing your study content by subject.

### Creating a Module:

1. Click **"+ Add Module"** button
2. Enter a **Module Name** (e.g., "Anatomy", "Physiology")
3. Add a **Description** (optional)
4. Choose a **Color** for easy identification
5. Click **"Save Module"**

### Module Card Actions:
When you hover over a module card:
- ✏️ **Edit** - Change name, description, or color
- 🗑️ **Delete** - Remove module and all its content
- Click the card to **Open** it

### Inside a Module:

Each module has two tabs:

#### 📝 Notes Tab:

**Adding a Note:**
1. Click **"+ Add Note"**
2. Enter a **Title**
3. Write your **Note Content** (supports multiple paragraphs)
4. Click **"Save Note"**

**Note Features:**
- ⭐ **Star** - Click the star to mark important notes
- ✏️ **Edit** - Modify title or content
- 🗑️ **Delete** - Remove the note

**Filtering Notes:**
- Click **"Show Starred"** to see only starred notes
- Click **"Show All"** to see all notes again

#### 🃏 Flashcards Tab:

**Adding a Flashcard:**
1. Click **"+ Add Flashcard"**
2. Enter the **Question** (front of card)
3. Enter the **Answer** (back of card)
4. Click **"Save Flashcard"**

**Flashcard Features:**
- ⭐ **Star** - Mark important flashcards
- ✏️ **Edit** - Modify question or answer
- 🗑️ **Delete** - Remove the flashcard
- 🏷️ **Difficulty Tag** - Shows if marked during review

**Filtering Flashcards:**
- Click **"Show Starred"** to see only starred flashcards
- Click **"Show All"** to see all flashcards

### Module Stats:
Each module card shows:
- Number of **Notes**
- Number of **Flashcards**

---

## 🃏 Flashcards (flashcards.html)

The Flashcards page lets you review all your flashcards in one place.

### Viewing Flashcards:

**Filtering by Module:**
- Use the **dropdown** at the top to select:
  - "All Modules" - See every flashcard
  - Specific module - See only that module's flashcards

**Flashcard List:**
- Shows all flashcards with question and answer visible
- Color dot indicates which module it belongs to
- Difficulty tag shows if previously marked

### Starting a Review:

**Two ways to start:**
1. **Click any flashcard** in the list - Starts review from that card
2. **Change the filter dropdown** - Shows filtered list, then click a card

### Review Mode:

#### 🃏 The Flashcard:
- **Front** shows the Question
- **Click** to flip and see the Answer
- **Click again** to flip back

#### 📍 Current Difficulty:
If you've previously marked this card, the difficulty tag shows at the top:
- 🔴 **Difficult** - Red tag
- 🟡 **Okay** - Yellow tag
- 🟢 **Easy** - Green tag

#### 🎯 Marking Difficulty:
After viewing the answer, mark how well you knew it:
- **Difficult** - Didn't know / Need more practice
- **Okay** - Partially knew / Review again
- **Easy** - Knew it well / Confident

*Note: Clicking a difficulty button stays on the current card. Use Next to move forward.*

#### ⬅️➡️ Navigation:
- **Previous** - Go to previous card
- **Next** - Go to next card
- **Progress** - Shows "3 / 15" (current card / total cards)

#### 🚪 Exit Review:
Click **"Exit Review"** to return to the flashcard list.
Your difficulty markings are automatically saved!

---

## 📈 Progress & Achievements (progress.html)

Track your study progress and earn achievement badges!

### Overview Statistics:

#### 📊 Main Stats:
- **Total Study Time** - All-time accumulated focus session time
- **Total Modules** - Number of modules created
- **Total Flashcards** - Total flashcards across all modules
- **Total Sessions** - All-time completed focus sessions

#### 📅 Study Session History:
- **Today's Sessions** - Sessions completed today
- **Today's Study Time** - Focus time today
- **Total Sessions** - All-time session count

### Module Breakdown:

Shows each module with:
- Module name and creation date
- Number of Notes
- Number of Flashcards

### 🏆 Achievements:

Earn badges by reaching milestones! Badges glow and show confetti when you hover over unlocked ones.

#### Module Achievements:
| Badge | Name | Requirement |
|-------|------|-------------|
| ⭐ | First Module | Create 1 module |
| 🎓 | Module Pro | Create 3 modules |

#### Note Achievements:
| Badge | Name | Requirement |
|-------|------|-------------|
| 📝 | Note Taker | Create 10 notes |
| 📖 | Note Master | Create 50 notes |
| 📜 | Note Legend | Create 100 notes |

#### Flashcard Achievements:
| Badge | Name | Requirement |
|-------|------|-------------|
| 🃏 | Card Creator | Create 10 flashcards |
| 📚 | Flashcard Master | Create 50 flashcards |
| 🆔 | Flashcard Legend | Create 100 flashcards |

#### Session Achievements:
| Badge | Name | Requirement |
|-------|------|-------------|
| 🏆 | 10 Sessions | Complete 10 focus sessions |
| 🥇 | Dedicated Learner | Complete 50 focus sessions |
| 🧠 | Pomodoro Champion | Complete 100 focus sessions |

### 💾 Data Management:

#### Export Data:
1. Click **"Export Data"**
2. A JSON file downloads to your device
3. File is named `study-buddy-backup-YYYY-MM-DD.json`
4. Keep this file safe for backup!

#### Import Data:
1. Click **"Import Data"**
2. Select your backup JSON file
3. Confirm to replace current data
4. Page reloads with imported data

**Use Cases:**
- Backup your data regularly
- Move data to a new device
- Switch between browsers
- Share progress between phone and laptop

### ⚠️ Reset All Data:

At the bottom of the page:
- Click **"Reset All Data"**
- Requires double confirmation
- **Permanently deletes** all modules, notes, flashcards, and stats
- Cannot be undone!

---

## 💾 Data Management

### Where is my data stored?

All data is stored in your browser's **localStorage**:
- Data stays on YOUR device only
- Not uploaded to any server
- Not shared with anyone
- Persists until you clear browser data

### Data Limits:

| Storage Limit | ~5 MB (all browsers) |
|---------------|----------------------|
| Notes (2 paragraphs each) | ~3,000 notes |
| Flashcards | ~5,000 flashcards |
| Combined realistic use | 1,500 notes + 3,000 flashcards |

### What can delete my data?

⚠️ Your data will be lost if you:
- Clear browser cache/cookies/data
- Use incognito/private browsing mode
- Uninstall the browser
- Reset your device

✅ Your data is SAFE when you:
- Close the browser
- Restart your device
- Turn off your phone
- Navigate away from the page

### Best Practice:
**Export your data regularly!** Use the Export feature weekly or after major study sessions.

---

## 📱 Mobile Usage

The app is fully responsive and works on:
- 📱 iPhone (Safari, Chrome)
- 📱 Android (Chrome, Firefox)
- 📱 Tablets (iPad, Android tablets)

### Mobile-Specific Features:

- **Smaller images** on mobile screens
- **Stacked buttons** for easy tapping
- **Touch-friendly** inputs and controls
- **No zoom** on input focus (font size optimized)

### Adding to Home Screen:

**iPhone (Safari):**
1. Open the website in Safari
2. Tap the Share button (box with arrow)
3. Scroll down, tap "Add to Home Screen"
4. Name it and tap "Add"
5. Now it opens like a native app!

**Android (Chrome):**
1. Open the website in Chrome
2. Tap the menu (3 dots)
3. Tap "Add to Home Screen"
4. Tap "Add"

### Timer on Mobile:

- Timer continues when screen is off
- System notification appears on lock screen (if permitted)
- Sound plays when timer completes (if phone is not on silent)

---

## 💡 Tips & Best Practices

### For Effective Studying:

1. **Create organized modules** - One per subject/topic
2. **Use meaningful titles** - Easy to find later
3. **Star important items** - Quick access to key content
4. **Review flashcards daily** - Spaced repetition helps memory
5. **Complete full Pomodoro cycles** - Don't skip breaks!

### For the Timer:

1. **Eliminate distractions** before starting
2. **Use the long break** every 4 sessions
3. **Don't pause too often** - It breaks focus
4. **Track your sessions** - Aim for daily goals

### For Flashcards:

1. **Keep questions specific** - One concept per card
2. **Keep answers concise** - Easy to verify
3. **Mark difficulty honestly** - Helps prioritize review
4. **Review "Difficult" cards** more often

### For Data Safety:

1. **Export weekly** - Regular backups
2. **Export before clearing browser** - Don't lose progress
3. **Keep backup files** in cloud storage (Google Drive, iCloud)
4. **Test import** on another browser to verify backups work

---

## ❓ Frequently Asked Questions

### Q: Can I use this on multiple devices?
**A:** Yes! Export your data on one device, transfer the file (email, cloud, AirDrop), and import on the other device.

### Q: Will my data sync automatically?
**A:** No, there's no automatic sync. Use export/import to manually transfer data.

### Q: Can others see my data?
**A:** No. Data is stored only in YOUR browser on YOUR device.

### Q: What if I clear my browser history?
**A:** Clearing cache/cookies may delete your data. Export first!

### Q: Does the timer work offline?
**A:** Yes! Once the page is loaded, everything works offline.

### Q: How many people can use this?
**A:** Unlimited! Each person's data is separate in their own browser.

### Q: Is there a dark mode?
**A:** Not currently, but the grey gradient background is easy on the eyes.

### Q: Can I print my flashcards?
**A:** Not built-in, but you can export data and format it for printing.

### Q: Does the app work on older browsers?
**A:** Works best on modern browsers (Chrome, Safari, Firefox, Edge) updated within the last 2 years.

---

## 🎉 You're Ready!

You now know everything about Medical Study Buddy. Start creating your modules and flashcards, use the Pomodoro timer for focused sessions, and watch your progress grow!

**Good luck with your medical exams! 🩺📖**

---

*Made with ❤️ by S for M*

*Study Smart, Not Just Hard*
