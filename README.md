# Tenzies - Dice Game

A fun and interactive dice game built with React and Vite. Roll the dice until all ten dice show the same number to win!

## 🎲 Game Rules

- **Objective**: Roll all 10 dice until they show the same number
- **How to Play**: 
  - Click the "Roll" button to roll all unfrozen dice
  - Click on any die to freeze it at its current value (it will stay that number on future rolls)
  - Continue rolling until all dice show the same number
  - Track your progress with roll counter and timer
- **Win Condition**: All dice must show the same number and be frozen

## ✨ Features

- **Interactive Dice**: Click to freeze/unfreeze individual dice
- **Roll Counter**: Track how many rolls it takes to win
- **Timer**: See how long it takes to complete the game
- **Confetti Celebration**: Enjoy a confetti animation when you win!
- **New Game**: Start a fresh game after winning
- **Responsive Design**: Works on different screen sizes

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tenzies
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🛠️ Technologies Used

- **React 19** - Frontend framework
- **Vite** - Build tool and development server
- **react-confetti** - Confetti animation library
- **react-use** - Custom React hooks
- **nanoid** - Unique ID generation
- **ESLint** - Code linting

## 📁 Project Structure

```
tenzies/
├── src/
│   ├── App.jsx          # Main game component
│   ├── Dices.jsx        # Dice container component
│   ├── Dice.jsx         # Individual die component
│   ├── App.css          # Main styles
│   └── index.css        # Global styles
├── public/              # Static assets
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🎮 How to Play

1. **Start Rolling**: Click the "Roll" button to begin
2. **Freeze Dice**: Click on any die you want to keep at its current value
3. **Strategic Play**: Decide which dice to freeze based on the most common numbers
4. **Keep Rolling**: Continue rolling unfrozen dice until you get all the same number
5. **Celebrate**: Enjoy the confetti when you win!
6. **Play Again**: Click "New Game" to start over

## 🎯 Game Strategy Tips

- Look for the most common number after each roll
- Freeze dice with the same number to build up your set
- Don't freeze too early - you might get better numbers on subsequent rolls
- Pay attention to your roll count and time for personal bests!

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Have fun playing Tenzies! 🎲✨**
