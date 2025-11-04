// Главная логика приложения
let completedTasks = new Set();

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadTaskContents();
    updateProgress();
});

function initializeApp() {
    // Разблокируем первое задание
    unlockTask(1);
    
    // Загружаем сохраненный прогресс
    loadProgress();
}

// Загрузка содержимого заданий на страницу
function loadTaskContents() {
    // Задание 1
    const task1Text = document.getElementById('task-text1');
    if (task1Text) {
        task1Text.textContent = generateTask1File();
    }
    
    // Задание 2
    const task2Text = document.getElementById('task-text2');
    if (task2Text) {
        task2Text.textContent = generateTask2File();
    }
    
    // Задание 3
    const task3Text = document.getElementById('task-text3');
    if (task3Text) {
        task3Text.textContent = generateTask3File();
    }
    
    // Задание 4
    const task4Text = document.getElementById('task-text4');
    if (task4Text) {
        task4Text.textContent = generateTask4File();
    }
    
    // Задание 5
    const task5Text = document.getElementById('task-text5');
    if (task5Text) {
        task5Text.textContent = generateTask5File();
    }
}


// Проверка ответа
function checkAnswer(taskNumber) {
    const input = document.getElementById(`answer${taskNumber}`);
    const message = document.getElementById(`message${taskNumber}`);
    const answer = input.value.trim();
    const correctAnswer = CHALLENGES[taskNumber].answer;
    
    // Убираем предыдущие сообщения
    message.className = 'message';
    message.textContent = '';
    
    if (answer === correctAnswer) {
        // Правильный ответ
        message.className = 'message success';
        message.textContent = `✓ ПРАВИЛЬНО! Доступ к заданию ${taskNumber + 1} открыт...`;
        
        completedTasks.add(taskNumber);
        saveProgress();
        
        // Разблокируем следующее задание
        if (taskNumber < 5) {
            setTimeout(() => {
                unlockTask(taskNumber + 1);
            }, 1000);
        } else {
            // Финальное задание завершено
            message.textContent = '✓ ФЛАГ ПРИНЯТ! Вы мастер стеганографии!';
            showVictory();
        }
        
        updateProgress();
        updateTaskStatus(taskNumber, true);
    } else {
        // Неправильный ответ
        message.className = 'message error';
        message.textContent = '✗ НЕПРАВИЛЬНО. Попробуйте еще раз...';
    }
}

// Разблокировка задания
function unlockTask(taskNumber) {
    const task = document.getElementById(`task${taskNumber}`);
    if (task) {
        task.classList.remove('hidden');
        updateTaskStatus(taskNumber, false);
    }
}

// Обновление статуса задания
function updateTaskStatus(taskNumber, completed) {
    const status = document.getElementById(`status${taskNumber}`);
    if (status) {
        if (completed) {
            status.textContent = '[ ЗАВЕРШЕНО ]';
            status.classList.add('completed');
        } else {
            status.textContent = '[ АКТИВНО ]';
            status.classList.remove('completed');
        }
    }
}

// Обновление прогресс-бара
function updateProgress() {
    const progress = document.getElementById('progress');
    const percentage = (completedTasks.size / 5) * 100;
    progress.style.width = percentage + '%';
}

// Сохранение прогресса
function saveProgress() {
    localStorage.setItem('steganographyProgress', JSON.stringify(Array.from(completedTasks)));
    localStorage.setItem('steganographyUnlocked', JSON.stringify(getUnlockedTasks()));
}

// Загрузка прогресса
function loadProgress() {
    const saved = localStorage.getItem('steganographyProgress');
    if (saved) {
        completedTasks = new Set(JSON.parse(saved));
        completedTasks.forEach(taskNum => {
            updateTaskStatus(taskNum, true);
            if (taskNum < 5) {
                unlockTask(taskNum + 1);
            }
        });
    }
    
    const unlocked = localStorage.getItem('steganographyUnlocked');
    if (unlocked) {
        const unlockedTasks = JSON.parse(unlocked);
        unlockedTasks.forEach(taskNum => {
            unlockTask(taskNum);
        });
    }
    
    updateProgress();
}

// Получить список разблокированных заданий
function getUnlockedTasks() {
    const unlocked = [1]; // Первое всегда разблокировано
    completedTasks.forEach(taskNum => {
        if (taskNum < 5) {
            unlocked.push(taskNum + 1);
        }
    });
    return unlocked;
}

// Победа!
function showVictory() {
    const header = document.querySelector('.header h1');
    header.textContent = 'ПОЗДРАВЛЯЕМ!';
    header.style.color = '#00ff41';
    header.style.animation = 'none';
    header.style.textShadow = '0 0 20px #00ff41, 0 0 40px #00ff41';
    
    // Создаем эффект конфетти (простой)
    createConfetti();
}

// Простой эффект конфетти
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = ['#00ff00', '#00ff41', '#00ffff'][Math.floor(Math.random() * 3)];
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            document.body.appendChild(confetti);
            
            let pos = -10;
            const fall = setInterval(() => {
                pos += 5;
                confetti.style.top = pos + 'px';
                confetti.style.left = (parseFloat(confetti.style.left) + Math.sin(pos / 10) * 2) + '%';
                confetti.style.opacity = (100 - pos) / 100;
                
                if (pos > window.innerHeight) {
                    clearInterval(fall);
                    confetti.remove();
                }
            }, 16);
        }, i * 50);
    }
}

// Обработка Enter в полях ввода
document.addEventListener('DOMContentLoaded', function() {
    for (let i = 1; i <= 5; i++) {
        const input = document.getElementById(`answer${i}`);
        if (input) {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    checkAnswer(i);
                }
            });
        }
    }
});

