// 30 predefined mazes for the game
// 0 = path, 1 = wall, 2 = dog (start), 3 = prize (end)
const mazes = [
    // Maze 1 - Very Easy
    [
        [2, 0, 0, 0, 3],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ],
    // Maze 2 - Easy
    [
        [2, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 3]
    ],
    // Maze 3
    [
        [2, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1],
        [0, 0, 0, 0, 3]
    ],
    // Maze 4
    [
        [2, 0, 0, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 3]
    ],
    // Maze 5
    [
        [0, 0, 2, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 3, 0, 0]
    ],
    // Maze 6
    [
        [2, 1, 0, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 3]
    ],
    // Maze 7
    [
        [2, 0, 0, 0, 0],
        [1, 1, 1, 0, 1],
        [0, 0, 0, 0, 0],
        [1, 0, 1, 1, 1],
        [3, 0, 0, 0, 0]
    ],
    // Maze 8
    [
        [0, 0, 2, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 3, 0, 0]
    ],
    // Maze 9
    [
        [2, 0, 1, 0, 3],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0]
    ],
    // Maze 10
    [
        [2, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 3, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0]
    ],
    // Maze 11
    [
        [0, 0, 0, 0, 2],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [3, 0, 0, 0, 0]
    ],
    // Maze 12
    [
        [2, 1, 0, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 0, 0, 3]
    ],
    // Maze 13
    [
        [2, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 3]
    ],
    // Maze 14
    [
        [0, 2, 0, 0, 0],
        [0, 0, 0, 1, 0],
        [1, 1, 0, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 3]
    ],
    // Maze 15
    [
        [2, 0, 0, 1, 0],
        [1, 1, 0, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 0, 1, 1],
        [0, 1, 0, 0, 3]
    ],
    // Maze 16
    [
        [0, 0, 0, 0, 2],
        [1, 1, 0, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 0, 1, 1],
        [3, 0, 0, 0, 0]
    ],
    // Maze 17
    [
        [2, 0, 0, 0, 0],
        [1, 0, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 0, 1],
        [0, 0, 0, 0, 3]
    ],
    // Maze 18
    [
        [3, 0, 0, 0, 0],
        [1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1],
        [0, 0, 0, 0, 2]
    ],
    // Maze 19
    [
        [2, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 1],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 3]
    ],
    // Maze 20
    [
        [0, 1, 0, 0, 2],
        [0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0],
        [3, 1, 0, 0, 0]
    ],
    // Maze 21
    [
        [2, 0, 0, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 0, 0, 3]
    ],
    // Maze 22
    [
        [0, 0, 2, 0, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 0, 3, 0, 0]
    ],
    // Maze 23
    [
        [2, 0, 0, 1, 0],
        [0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1],
        [0, 0, 0, 0, 0],
        [0, 1, 0, 0, 3]
    ],
    // Maze 24
    [
        [0, 0, 0, 0, 2],
        [0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [3, 0, 0, 0, 0]
    ],
    // Maze 25
    [
        [2, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 3]
    ],
    // Maze 26
    [
        [0, 1, 0, 1, 2],
        [0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0],
        [3, 1, 0, 1, 0]
    ],
    // Maze 27
    [
        [2, 0, 0, 0, 0],
        [1, 1, 0, 1, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 1, 1, 3]
    ],
    // Maze 28
    [
        [0, 0, 1, 0, 2],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [3, 0, 1, 0, 0]
    ],
    // Maze 29
    [
        [2, 0, 0, 1, 3],
        [0, 1, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
    ],
    // Maze 30
    [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 3, 0, 0],
        [0, 1, 1, 1, 0],
        [2, 0, 0, 0, 0]
    ]
];

// Encouraging messages in Chinese
const encourageMessages = [
    "太棒了！你真是个聪明的小朋友！",
    "哇！你成功了！你真厉害！",
    "真棒！小狗很高兴找到了奖品！",
    "你太聪明了！继续加油！",
    "好厉害！你是迷宫小高手！",
    "成功啦！你真是太优秀了！",
    "恭喜你！小狗非常开心！",
    "你做到了！真了不起！"
];

let currentMaze = 0;
let dogPosition = { row: 0, col: 0 };
let prizePosition = { row: 0, col: 0 };
let gameGrid = [];

// Initialize the game
function init() {
    populateMazeSelector();
    loadMaze(currentMaze);
    setupControls();
}

// Populate the maze selector dropdown
function populateMazeSelector() {
    const select = document.getElementById('maze-select');
    for (let i = 0; i < mazes.length; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `迷宫 ${i + 1}`;
        select.appendChild(option);
    }
    select.addEventListener('change', (e) => {
        currentMaze = parseInt(e.target.value);
        loadMaze(currentMaze);
    });
}

// Load a specific maze
function loadMaze(mazeIndex) {
    // Deep copy the maze
    gameGrid = mazes[mazeIndex].map(row => [...row]);
    
    // Find dog and prize positions
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (gameGrid[row][col] === 2) {
                dogPosition = { row, col };
            } else if (gameGrid[row][col] === 3) {
                prizePosition = { row, col };
            }
        }
    }
    
    renderMaze();
}

// Render the maze grid
function renderMaze() {
    const mazeElement = document.getElementById('maze-grid');
    mazeElement.innerHTML = '';
    
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            
            const value = gameGrid[row][col];
            if (value === 1) {
                cell.classList.add('wall');
                cell.textContent = '🧱';
            } else if (value === 2) {
                cell.classList.add('dog');
                cell.textContent = '🐕';
            } else if (value === 3) {
                cell.classList.add('prize');
                cell.textContent = '🏆';
            } else {
                cell.classList.add('path');
            }
            
            mazeElement.appendChild(cell);
        }
    }
}

// Setup game controls
function setupControls() {
    // Button controls
    document.getElementById('btn-up').addEventListener('click', () => moveDog(-1, 0));
    document.getElementById('btn-down').addEventListener('click', () => moveDog(1, 0));
    document.getElementById('btn-left').addEventListener('click', () => moveDog(0, -1));
    document.getElementById('btn-right').addEventListener('click', () => moveDog(0, 1));
    
    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'ArrowUp':
                e.preventDefault();
                moveDog(-1, 0);
                break;
            case 'ArrowDown':
                e.preventDefault();
                moveDog(1, 0);
                break;
            case 'ArrowLeft':
                e.preventDefault();
                moveDog(0, -1);
                break;
            case 'ArrowRight':
                e.preventDefault();
                moveDog(0, 1);
                break;
        }
    });
    
    // Play again button
    document.getElementById('play-again').addEventListener('click', () => {
        document.getElementById('win-dialog').classList.add('hidden');
        // Go to next maze or loop back to first
        currentMaze = (currentMaze + 1) % mazes.length;
        document.getElementById('maze-select').value = currentMaze;
        loadMaze(currentMaze);
    });
}

// Move the dog
function moveDog(rowDelta, colDelta) {
    const newRow = dogPosition.row + rowDelta;
    const newCol = dogPosition.col + colDelta;
    
    // Check boundaries
    if (newRow < 0 || newRow >= 5 || newCol < 0 || newCol >= 5) {
        return;
    }
    
    // Check for wall
    if (gameGrid[newRow][newCol] === 1) {
        return;
    }
    
    // Move the dog
    gameGrid[dogPosition.row][dogPosition.col] = 0;
    dogPosition.row = newRow;
    dogPosition.col = newCol;
    
    // Check for win condition
    if (newRow === prizePosition.row && newCol === prizePosition.col) {
        gameGrid[newRow][newCol] = 2;
        renderMaze();
        showWinDialog();
        return;
    }
    
    gameGrid[newRow][newCol] = 2;
    renderMaze();
}

// Show the winning dialog
function showWinDialog() {
    const dialog = document.getElementById('win-dialog');
    const message = document.getElementById('win-message');
    
    // Select a random encouraging message
    const randomMessage = encourageMessages[Math.floor(Math.random() * encourageMessages.length)];
    message.textContent = randomMessage;
    
    dialog.classList.remove('hidden');
}

// Start the game when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
