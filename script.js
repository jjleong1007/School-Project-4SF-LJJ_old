// Data extracted from the document
const povertyData = {
    2020: { "Johor": { rate: 4.0, estimated: true, children: 6.3 }, "Kedah": { rate: 10.0, estimated: true, children: 15.7 }, "Kelantan": { rate: 21.2, estimated: false, children: 33.4 }, "Melaka": { rate: 3.0, estimated: true, children: 4.7 }, "Negeri Sembilan": { rate: 4.0, estimated: true, children: 6.3 }, "Pahang": { rate: 6.0, estimated: true, children: 9.5 }, "Perak": { rate: 5.0, estimated: true, children: 7.9 }, "Perlis": { rate: 2.0, estimated: true, children: 3.1 }, "Penang": { rate: 2.0, estimated: true, children: 3.1 }, "Selangor": { rate: 1.0, estimated: true, children: 1.6 }, "Terengganu": { rate: 12.0, estimated: false, children: 18.9 }, "Sabah": { rate: 25.3, estimated: false, children: 39.8 }, "Sarawak": { rate: 11.0, estimated: true, children: 17.3 } },
    2021: { "Johor": { rate: 4.0, estimated: true, children: 6.3 }, "Kedah": { rate: 10.0, estimated: true, children: 15.7 }, "Kelantan": { rate: 21.0, estimated: true, children: 33.1 }, "Melaka": { rate: 3.0, estimated: true, children: 4.7 }, "Negeri Sembilan": { rate: 4.0, estimated: true, children: 6.3 }, "Pahang": { rate: 6.0, estimated: true, children: 9.5 }, "Perak": { rate: 5.0, estimated: true, children: 7.9 }, "Perlis": { rate: 2.0, estimated: true, children: 3.1 }, "Penang": { rate: 2.0, estimated: true, children: 3.1 }, "Selangor": { rate: 1.0, estimated: true, children: 1.6 }, "Terengganu": { rate: 13.0, estimated: true, children: 20.4 }, "Sabah": { rate: 23.0, estimated: true, children: 36.2 }, "Sarawak": { rate: 11.0, estimated: true, children: 17.3 } },
    2022: { "Johor": { rate: 4.0, estimated: true, children: 6.3 }, "Kedah": { rate: 8.0, estimated: true, children: 12.6 }, "Kelantan": { rate: 13.2, estimated: false, children: 20.8 }, "Melaka": { rate: 1.0, estimated: true, children: 1.6 }, "Negeri Sembilan": { rate: 2.0, estimated: true, children: 3.1 }, "Pahang": { rate: 5.0, estimated: true, children: 7.9 }, "Perak": { rate: 3.0, estimated: true, children: 4.7 }, "Perlis": { rate: 1.0, estimated: true, children: 1.6 }, "Penang": { rate: 1.0, estimated: true, children: 1.6 }, "Selangor": { rate: 1.0, estimated: true, children: 1.6 }, "Terengganu": { rate: 10.0, estimated: true, children: 15.7 }, "Sabah": { rate: 19.7, estimated: false, children: 31.0 }, "Sarawak": { rate: 8.0, estimated: true, children: 12.6 } },
    2023: { "Johor": { rate: 3.5, estimated: true, children: 5.5 }, "Kedah": { rate: 7.0, estimated: true, children: 11.0 }, "Kelantan": { rate: 11.0, estimated: true, children: 17.3 }, "Melaka": { rate: 1.0, estimated: true, children: 1.6 }, "Negeri Sembilan": { rate: 2.0, estimated: true, children: 3.1 }, "Pahang": { rate: 4.0, estimated: true, children: 6.3 }, "Perak": { rate: 3.0, estimated: true, children: 4.7 }, "Perlis": { rate: 1.0, estimated: true, children: 1.6 }, "Penang": { rate: 1.0, estimated: true, children: 1.6 }, "Selangor": { rate: 1.0, estimated: true, children: 1.6 }, "Terengganu": { rate: 9.0, estimated: true, children: 14.2 }, "Sabah": { rate: 17.0, estimated: true, children: 26.8 }, "Sarawak": { rate: 7.0, estimated: true, children: 11.0 } },
    2024: { "Johor": { rate: 3.2, estimated: true, children: 5.0 }, "Kedah": { rate: 6.3, estimated: true, children: 9.9 }, "Kelantan": { rate: 10.4, estimated: true, children: 16.4 }, "Melaka": { rate: 0.8, estimated: true, children: 1.3 }, "Negeri Sembilan": { rate: 1.6, estimated: true, children: 2.5 }, "Pahang": { rate: 4.0, estimated: true, children: 6.3 }, "Perak": { rate: 2.4, estimated: true, children: 3.8 }, "Perlis": { rate: 0.8, estimated: true, children: 1.3 }, "Penang": { rate: 0.8, estimated: true, children: 1.3 }, "Selangor": { rate: 0.8, estimated: true, children: 1.3 }, "Terengganu": { rate: 7.9, estimated: true, children: 12.4 }, "Sabah": { rate: 15.6, estimated: true, children: 24.6 }, "Sarawak": { rate: 6.3, estimated: true, children: 9.9 } },
    2025: { "Johor": { rate: 2.9, estimated: true, children: 4.6 }, "Kedah": { rate: 5.7, estimated: true, children: 9.0 }, "Kelantan": { rate: 9.4, estimated: true, children: 14.8 }, "Melaka": { rate: 0.7, estimated: true, children: 1.1 }, "Negeri Sembilan": { rate: 1.4, estimated: true, children: 2.2 }, "Pahang": { rate: 3.6, estimated: true, children: 5.7 }, "Perak": { rate: 2.1, estimated: true, children: 3.3 }, "Perlis": { rate: 0.7, estimated: true, children: 1.1 }, "Penang": { rate: 0.7, estimated: true, children: 1.1 }, "Selangor": { rate: 0.7, estimated: true, children: 1.1 }, "Terengganu": { rate: 7.1, estimated: true, children: 11.2 }, "Sabah": { rate: 14.1, estimated: true, children: 22.2 }, "Sarawak": { rate: 5.7, estimated: true, children: 9.0 } }
};

const foodInsecurityData = {
    2020: { foodInsecurity: 8.2, childMalnutrition: "1 in 4" },
    2021: { foodInsecurity: 9.5, childMalnutrition: "1 in 3.5" },
    2022: { foodInsecurity: 8.7, childMalnutrition: "1 in 3.8" },
    2023: { foodInsecurity: 7.9, childMalnutrition: "1 in 4.2" },
    2024: { foodInsecurity: 7.2, childMalnutrition: "1 in 4.5" },
    2025: { foodInsecurity: 6.5, childMalnutrition: "1 in 4.8" }
};

// Global variables for overview page
let currentYear = 2020;
let animationInterval;
let isPlaying = false;
let animationSpeed = 1500;
let hasInitialAnimationRun = false;

// Function to show a specific page and hide all others
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    resetAnimations();
    window.scrollTo(0, 0);
    
    // If we're showing overview page, initialize it
    if (pageId === 'overview-page') {
        setTimeout(initOverviewPage, 100);
    }
    
    // If we're showing feedback page, initialize the feedback form
    if (pageId === 'feedback-page') {
        setTimeout(initFeedbackForm, 100);
    }
}

// Function to reset animations when switching pages
function resetAnimations() {
    const animatedElements = document.querySelectorAll('.stat-card, .info-card, .card, .nav-btn, .page-title, .back-btn');
    animatedElements.forEach(element => {
        const animation = element.style.animation;
        element.style.animation = 'none';
        element.offsetHeight; // Trigger reflow
        element.style.animation = animation;
    });
}

// Initialize overview page
function initOverviewPage() {
    const barChart = document.getElementById('barChart');
    // Prevent re-initializing if bars already exist
    if (barChart && barChart.children.length > 0) {
        updateChart(); // Just update the chart if it already exists
        return;
    }
    initChart();
    setupOverviewEventListeners();
    updateInfoCards();
}

// Initialize chart with staggered animation
function initChart() {
    const barChart = document.getElementById('barChart');
    if (!barChart) return;
    
    barChart.innerHTML = '';
    hasInitialAnimationRun = false;

    Object.keys(povertyData[currentYear]).forEach((state, index) => {
        const barWrapper = document.createElement('div');
        barWrapper.className = 'bar-wrapper';
        
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.id = `bar-${state.replace(/\s+/g, '-')}`;
        
        // Set initial height to 0 for the animation
        bar.style.height = '0%';
        // Set a staggered delay for the initial animation
        bar.style.transitionDelay = `${index * 80}ms`;

        const barValue = document.createElement('div');
        barValue.className = 'bar-value';
        
        const barLabel = document.createElement('div');
        barLabel.className = 'bar-label';
        barLabel.textContent = state;
        
        bar.appendChild(barValue);
        barWrapper.appendChild(bar);
        barWrapper.appendChild(barLabel);
        barChart.appendChild(barWrapper);
    });
    
    // Trigger the animation a moment after the elements are in the DOM
    setTimeout(() => {
        updateChart();
    }, 50);
}

// Update the chart with data for the current year
function updateChart() {
    const yearData = povertyData[currentYear];
    let totalRate = 0, totalChildren = 0;
    let highestState = { name: '', rate: 0 };
    let lowestState = { name: '', rate: 100 };
    
    Object.keys(yearData).forEach(state => {
        const data = yearData[state];
        const bar = document.getElementById(`bar-${state.replace(/\s+/g, '-')}`);
        if (!bar) return;
        
        const barValue = bar.querySelector('.bar-value');
        const heightPercent = (data.rate / 30) * 100;
        bar.style.height = `${heightPercent}%`;
        
        // Set color based on whether data is estimated or official
        if (data.estimated) {
            bar.style.background = 'linear-gradient(to top, #3182ce, #63b3ed)';
        } else {
            bar.style.background = 'linear-gradient(to top, #e53e3e, #fc8181)';
        }
        
        barValue.textContent = `${data.rate}%`;
        
        totalRate += data.rate;
        totalChildren += data.children;
        if (data.rate > highestState.rate) highestState = { name: state, rate: data.rate };
        if (data.rate < lowestState.rate) lowestState = { name: state, rate: data.rate };
    });
    
    // Update info panel
    document.getElementById('currentYear').textContent = currentYear;
    document.getElementById('highestState').textContent = `${highestState.name}: ${highestState.rate}%`;
    document.getElementById('lowestState').textContent = `${lowestState.name}: ${lowestState.rate}%`;
    document.getElementById('nationalAverage').textContent = `${(totalRate / Object.keys(yearData).length).toFixed(1)}%`;
    document.getElementById('childrenInPoverty').textContent = `${(totalChildren / Object.keys(yearData).length).toFixed(1)}%`;
    
    updateInfoCards();

    // After the first animation, remove the delay for future updates
    if (!hasInitialAnimationRun) {
        hasInitialAnimationRun = true;
        setTimeout(() => {
            document.querySelectorAll('.bar').forEach(bar => {
                bar.style.transitionDelay = '0s';
            });
        }, 1500); // Wait for the initial animation to complete
    }
}

// Update info cards with current year data
function updateInfoCards() {
    const yearData = foodInsecurityData[currentYear];
    document.getElementById('foodInsecurity').textContent = `${yearData.foodInsecurity}%`;
    document.getElementById('childMalnutrition').textContent = yearData.childMalnutrition;
}

// Animation Controls
function playAnimation() { if (isPlaying) return; isPlaying = true; document.getElementById('playBtn').classList.add('active'); document.getElementById('pauseBtn').classList.remove('active'); animationInterval = setInterval(() => { currentYear++; if (currentYear > 2025) currentYear = 2020; updateChart(); }, animationSpeed); }
function pauseAnimation() { isPlaying = false; clearInterval(animationInterval); document.getElementById('playBtn').classList.remove('active'); document.getElementById('pauseBtn').classList.add('active'); }
function resetAnimation() { pauseAnimation(); currentYear = 2020; updateChart(); }
function updateSpeed() { animationSpeed = parseInt(document.getElementById('speedSlider').value); document.getElementById('speedValue').textContent = `${animationSpeed/1000}s`; if (isPlaying) { pauseAnimation(); playAnimation(); } }

// Setup event listeners for overview page
function setupOverviewEventListeners() {
    document.getElementById('playBtn').addEventListener('click', playAnimation);
    document.getElementById('pauseBtn').addEventListener('click', pauseAnimation);
    document.getElementById('resetBtn').addEventListener('click', resetAnimation);
    document.getElementById('speedSlider').addEventListener('input', updateSpeed);
    
    // Keyboard controls
    document.addEventListener('keydown', function(e) {
        if (!document.getElementById('overview-page').classList.contains('active')) return;
        switch(e.key) {
            case ' ': e.preventDefault(); isPlaying ? pauseAnimation() : playAnimation(); break;
            case 'ArrowRight': currentYear = Math.min(currentYear + 1, 2025); updateChart(); break;
            case 'ArrowLeft': currentYear = Math.max(currentYear - 1, 2020); updateChart(); break;
            case 'r': resetAnimation(); break;
        }
    });
}

// ============================================================= 
// ===== FEEDBACK FORM JAVASCRIPT ===== 
// ============================================================= 

function initFeedbackForm() {
    const feedbackForm = document.getElementById('feedbackForm');
    if (!feedbackForm) return;

    // Prevent adding event listeners multiple times
    if (feedbackForm.hasAttribute('data-listener-added')) return;
    feedbackForm.setAttribute('data-listener-added', 'true');

    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const feedback = document.getElementById('feedback').value;
        const rating = document.querySelector('input[name="rating"]:checked');
        
        if (!name || !email || !feedback) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        const feedbackData = { name, email, rating: rating ? rating.value : null, feedback, timestamp: new Date().toISOString() };
        
        console.log('Feedback submitted:', feedbackData);
        
        let feedbackHistory = JSON.parse(localStorage.getItem('feedbackHistory') || '[]');
        feedbackHistory.push(feedbackData);
        localStorage.setItem('feedbackHistory', JSON.stringify(feedbackHistory));
        
        showNotification('Thank you for your feedback!', 'success');
        feedbackForm.reset();
    });
    
    function showNotification(message, type) {
        const notification = document.getElementById('notification');
        if (!notification) return;

        notification.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;
        notification.style.backgroundColor = type === 'success' ? '#4caf50' : '#f44336';
        
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const feedbackInput = document.getElementById('feedback');

    const validateInput = (input, regex) => {
        if (regex.test(input.value)) {
            input.style.borderColor = '#4caf50';
        } else {
            input.style.borderColor = '#f44336';
        }
    };
    
    nameInput.addEventListener('blur', () => validateInput(nameInput, /\S+/));
    emailInput.addEventListener('blur', () => validateInput(emailInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/));
    feedbackInput.addEventListener('blur', () => validateInput(feedbackInput, /\S+/));
    
    [nameInput, emailInput, feedbackInput].forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#ff8c00';
        });
    });
}

// ============================================================= 
// ===== CHATBOT WIDGET JAVASCRIPT ===== 
// ============================================================= 

const API_KEY = "AIzaSyB2dmHq8Ljk8PtvHJqab69hVUxqXmY12bE"; 
const MODEL_NAME = "gemini-2.5-flash"; 
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;
const SYSTEM_PROMPT = "You are an AI Chatbot specializing in facts, statistics, and information about Malaysia's hunger and nutrition issues...";

const chatContainer = document.getElementById('chat-container');
const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
let isFirstOpen = true;

function toggleChat() {
    chatContainer.classList.toggle('hidden');
    if (!chatContainer.classList.contains('hidden') && isFirstOpen) {
        displayMessage("Hello! I'm here to answer your questions about **Malaysia's hunger and nutrition issues**.", 'bot');
        isFirstOpen = false;
    }
    userInput.focus();
}

function displayMessage(text, sender) {
    const msgElement = document.createElement('p');
    msgElement.classList.add('message', sender === 'user' ? 'user-msg' : 'bot-msg');
    msgElement.innerHTML = sender === 'user' ? `**You:** ${text}` : `**Bot:** ${text}`;
    chatWindow.appendChild(msgElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    return msgElement;
}

function createLoadingIndicator() {
    const loadingMsg = document.createElement('p');
    loadingMsg.classList.add('message', 'bot-msg');
    loadingMsg.id = 'loading';
    loadingMsg.innerHTML = `**Bot:** Thinking<span class="loading-dot"></span><span class="loading-dot"></span><span class="loading-dot"></span>`;
    chatWindow.appendChild(loadingMsg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    return loadingMsg;
}

async function sendMessage() {
    const message = userInput.value.trim();
    if (message === "" || sendBtn.disabled) return;

    displayMessage(message, 'user');
    userInput.value = '';
    sendBtn.disabled = true;
    userInput.disabled = true;
    const loadingIndicator = createLoadingIndicator();

    try {
        const combined_prompt = `${SYSTEM_PROMPT}\n\n---User Question---\n${message}`;
        const payload = { contents: [{ role: "user", parts: [{ text: combined_prompt }] }] };

        const response = await fetch(API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`API Error: ${errorData.error?.message || response.statusText}`);
        }

        const data = await response.json();
        const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't process that.";

        loadingIndicator.remove();
        displayMessage(botResponse, 'bot');

    } catch (error) {
        console.error('API Error:', error);
        loadingIndicator.remove();
        displayMessage("Sorry, I couldn't connect to the AI service. Please try again later.", 'bot');
    } finally {
        sendBtn.disabled = false;
        userInput.disabled = false;
        userInput.focus();
    }
}

// ============================================================= 
// ===== INITIALIZATION ON DOM LOAD ===== 
// ============================================================= 

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the first page as active
    document.getElementById('main-page').classList.add('active');

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn-click-effect');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px'; 
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute'; 
            ripple.style.borderRadius = '50%';
            ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            ripple.style.transform = 'scale(0)'; 
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            if (getComputedStyle(this).position !== 'relative') {
                this.style.position = 'relative';
            }
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
});


// -------------------- Dialog open/close behavior --------------------
    (function(){
      const playBtn = document.getElementById('playGameBtn');
      const dialog = document.getElementById('gameDialog');
      const closeBtn = document.getElementById('game-closeBtn');
      const openInNew = document.getElementById('game-openInNew');

      playBtn.addEventListener('click', () => {
        if (typeof dialog.showModal === 'function') {
          dialog.showModal();
          // focus the canvas for keyboard accessibility
          setTimeout(() => {
            const canvas = document.getElementById('game-canvas');
            if (canvas) canvas.focus();
          }, 250);
        } else {
          // fallback: open a simple new tab with just the game content if dialog unsupported
          window.open(window.location.href, '_blank');
        }
      });

      closeBtn.addEventListener('click', () => {
        try { dialog.close(); } catch(e){}
        // stop & reset the game
        window.gameController && window.gameController.stopAndReset();
      });

      dialog.addEventListener('cancel', (ev) => {
        // ESC pressed - ensure we stop the game
        window.gameController && window.gameController.stopAndReset();
      });

      openInNew.addEventListener('click', () => {
        // open the current page in a new tab — user can play there
        window.open(window.location.href, '_blank');
      });
    })();

 /**
     * Simple shooter game inlined and namespaced to avoid collisions.
     * Exposes a global gameController with stopAndReset() to stop the loop and reset state.
     */

    (function () {
      // Elements (namespaced)
      const canvas = document.getElementById('game-canvas');
      const ctx = canvas.getContext('2d');
      const scoreEl = document.getElementById('game-score');
      const startScreen = document.getElementById('game-startScreen');
      const startBtn = document.getElementById('game-startBtn');
      const gameOverEl = document.getElementById('game-gameOver');
      const finalScoreEl = document.getElementById('game-finalScore');
      const restartBtn = document.getElementById('game-restartBtn');

      // Game state variables (all prefixed)
      let gameRunning = false;
      let gameScore = 0;
      let enemySpawnTimer = 0;
      const ENEMY_SPAWN_INTERVAL = 120; // frames

      // Player
      const player = {
        x: canvas.width / 2,
        y: canvas.height - 100,
        width: 60,
        height: 30,
        speed: 0.2
      };

      // Entities
      const bullets = [];
      const enemies = [];

      // Mouse pos
      let mouseX = player.x;
      let mouseY = player.y;

      // Animation frame handle
      let rafId = null;

      // Utility: resize canvas to container size while preserving aspect ratio
      function resizeCanvasToContainer() {
        const container = canvas.parentElement;
        const rect = container.getBoundingClientRect();

        // Maintain 920x640 internal resolution scaled to container
        const internalW = 920, internalH = 640;
        const scale = Math.min(rect.width / internalW, rect.height / internalH);
        canvas.style.width = Math.round(internalW * scale) + 'px';
        canvas.style.height = Math.round(internalH * scale) + 'px';

        // Set logical size to internal resolution (keeps coordinates stable)
        canvas.width = internalW;
        canvas.height = internalH;
      }

      // Event listeners
      function onMouseMove(e) {
        if (!gameRunning) return;
        const rect = canvas.getBoundingClientRect();
        // map client coordinates to canvas logical coordinates (account for style scale)
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        mouseX = (e.clientX - rect.left) * scaleX;
        mouseY = (e.clientY - rect.top) * scaleY;
      }

      function onCanvasClick(e) {
        if (!gameRunning) return;
        bullets.push({
          x: player.x,
          y: player.y - player.height / 2,
          width: 5,
          height: 15,
          speed: 7
        });
      }

      // Start / Reset / Stop
      function startGame() {
        gameRunning = true;
        startScreen.style.display = 'none';
        gameOverEl.style.display = 'none';
        resetGame();
        // ensure canvas has current size
        resizeCanvasToContainer();
        // register mouse listeners on scaled canvas
        canvas.addEventListener('mousemove', onMouseMove);
        canvas.addEventListener('click', onCanvasClick);
        // start loop
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(gameLoop);
      }

      function resetGame() {
        gameScore = 0;
        enemySpawnTimer = 0;
        bullets.length = 0;
        enemies.length = 0;
        player.x = canvas.width / 2;
        player.y = canvas.height - 100;
        updateScoreDisplay();
      }

      function stopAndReset() {
        gameRunning = false;
        cancelAnimationFrame(rafId);
        rafId = null;
        // cleanup listeners
        canvas.removeEventListener('mousemove', onMouseMove);
        canvas.removeEventListener('click', onCanvasClick);
        // reset overlays
        startScreen.style.display = 'flex';
        gameOverEl.style.display = 'none';
        resetGame();
      }

      // Update functions
      function updatePlayer() {
        player.x += (mouseX - player.x) * player.speed;
        player.y += (mouseY - player.y) * player.speed;
        player.x = Math.max(player.width / 2, Math.min(canvas.width - player.width / 2, player.x));
        player.y = Math.max(player.height / 2, Math.min(canvas.height - player.height / 2, player.y));
      }

      function updateBullets() {
        for (let i = bullets.length - 1; i >= 0; i--) {
          bullets[i].y -= bullets[i].speed;
          if (bullets[i].y < -bullets[i].height) bullets.splice(i, 1);
        }
      }

      function updateEnemies() {
        enemySpawnTimer++;
        if (enemySpawnTimer >= ENEMY_SPAWN_INTERVAL) {
          const enemyTypes = ['poverty','hunger'];
          const r = Math.floor(Math.random()*enemyTypes.length);
          enemies.push({
            x: Math.random() * (canvas.width - 100) + 50,
            y: -25,
            width: 80,
            height: 30,
            text: enemyTypes[r],
            speed: 2 + Math.random() * 2
          });
          enemySpawnTimer = 0;
        }

        for (let i = enemies.length - 1; i >= 0; i--) {
          enemies[i].y += enemies[i].speed;
          if (enemies[i].y > canvas.height + enemies[i].height) {
            enemies.splice(i, 1);
          }
        }
      }

      function checkCollisions() {
        // bullet vs enemy
        for (let i = bullets.length - 1; i >= 0; i--) {
          for (let j = enemies.length - 1; j >= 0; j--) {
            if (isColliding(bullets[i], enemies[j])) {
              bullets.splice(i,1);
              enemies.splice(j,1);
              gameScore += 10;
              updateScoreDisplay();
              break;
            }
          }
        }

        // player vs enemy
        for (let i = enemies.length - 1; i >= 0; i--) {
          if (isColliding(player, enemies[i])) {
            triggerGameOver();
            break;
          }
        }
      }

      function isColliding(a,b) {
        return a.x - (a.width/2 || 0) < b.x + b.width &&
               a.x + (a.width/2 || a.width) > b.x &&
               a.y - (a.height/2 || 0) < b.y + b.height &&
               a.y + (a.height/2 || a.height) > b.y;
      }

      // Draw
      function draw() {
        // Clear
        ctx.fillStyle = '#1e1e1e';
        ctx.fillRect(0,0,canvas.width,canvas.height);

        // boundary
        ctx.strokeStyle = '#333';
        ctx.strokeRect(0,0,canvas.width,canvas.height);

        // player (gun) - draw centered at player.x/player.y
        drawGun(player.x, player.y, player.width, player.height);

        // bullets
        ctx.fillStyle = '#ffff00';
        for (const b of bullets) {
          ctx.fillRect(b.x - b.width/2, b.y - b.height/2, b.width, b.height);
        }

        // enemies as text on green blocks
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (const en of enemies) {
          ctx.fillStyle = '#00ff00';
          ctx.fillRect(en.x - en.width/2, en.y - en.height/2, en.width, en.height);
          ctx.fillStyle = '#000';
          ctx.fillText(en.text, en.x, en.y);
        }
      }

      function drawGun(x,y,width,height) {
        ctx.fillStyle = '#ffffff';
        // body
        ctx.fillRect(x - width/2, y - height/2, width, height*0.6);
        // barrel
        ctx.fillRect(x - width/8, y - height, width/4, height*0.7);
        // handle
        ctx.fillRect(x - width/4, y + height*0.1, width/2, height*0.4);
        // trigger
        ctx.fillRect(x - width/8, y + height*0.3, width/4, height*0.1);
      }

      // Game loop
      function gameLoop() {
        if (!gameRunning) return; // stop the loop if flagged
        updatePlayer();
        updateBullets();
        updateEnemies();
        checkCollisions();
        draw();
        rafId = requestAnimationFrame(gameLoop);
      }

      // Game over
      function triggerGameOver() {
        gameRunning = false;
        cancelAnimationFrame(rafId);
        rafId = null;
        finalScoreEl.textContent = String(gameScore);
        gameOverEl.style.display = 'flex';
        // remove listeners to avoid stray inputs
        canvas.removeEventListener('mousemove', onMouseMove);
        canvas.removeEventListener('click', onCanvasClick);
      }

      // Score UI
      function updateScoreDisplay() {
        scoreEl.textContent = `Score: ${gameScore}`;
      }

      // Wire controls
      startBtn.addEventListener('click', () => {
        startGame();
      });

      restartBtn.addEventListener('click', () => {
        // restart from game-over screen
        gameOverEl.style.display = 'none';
        startGame();
      });

      // Resize handling
      window.addEventListener('resize', () => resizeCanvasToContainer());

      // Initial setup
      resizeCanvasToContainer();
      startScreen.style.display = 'flex';
      gameOverEl.style.display = 'none';
      updateScoreDisplay();

      // Expose controller for dialog close cleaning
      window.gameController = {
        stopAndReset
      };

      // Accessibility: focus canvas when dialog opens (handled by dialog script)
    })();