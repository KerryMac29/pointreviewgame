// Answer key and configuration
const answerKey = {
    q1: { answer: 400, type: 'number', hint: "First find the width of Block A using V = l Ã— w Ã— h. Volume of A = 10 Ã— w Ã— 12 = 1200, so w = 10. Then Volume of B = 1600 - 1200 = 400" },
    q2a: { answer: 'no', type: 'radio' },
    q2b: { answer: 'yes', type: 'radio' },
    q2c: { answer: 'no', type: 'radio' },
    q2d: { answer: 'no', type: 'radio' },
    q3: { answer: '7', type: 'radio', hint: "Use V = l Ã— w Ã— h. So 42 = 3 Ã— 2 Ã— h. First, 3 Ã— 2 = 6, then 42 Ã· 6 = 7" },
    q4: { answer: 'd', type: 'radio', hint: "Pattern S: 2, 4, 8, 16 (multiply by 2). Pattern T: 2, 7, 12, 17 (add 5). Pairs are (2,2), (4,7), (8,12), (16,17)" },
    q5: { answer: 2.85, type: 'number', hint: "Calculate: (2 Ã— $1.89) + (3 Ã— $1.79) = $3.78 + $5.37 = $9.15. Change = $10.00 - $9.15 = $2.85" },
    q6: { answer: 70, type: 'number', hint: "Volume = length Ã— width Ã— height = 2 Ã— 5 Ã— 7 = 70" },
    q7: { answer: 12.5, type: 'number', hint: "Divide 75 by 6: 75 Ã· 6 = 12.5" },
    q8: { answer: 64416, type: 'number', hint: "Break it down: 2684 Ã— 20 = 53,680 and 2684 Ã— 4 = 10,736. Add them: 53,680 + 10,736 = 64,416" },
    q9: { answer: 0.80, type: 'number', hint: "80/100 = 0.80 (or 0.8, both are correct)" },
    q10: { answer: 'b', type: 'radio', hint: "1.32 = 132/100 and 2.06 = 206/100, so multiply the fractions" },
    q11a_width: { answer: 2, type: 'number' },
    q11a_height: { answer: 3, type: 'number' },
    q11b_length: { answer: 3, type: 'number' },
    q11b_width: { answer: 4, type: 'number' },
    q11b_height: { answer: 5, type: 'number' },
    q12: { answer: 9135, type: 'number', hint: "261 Ã— 30 = 7,830 and 261 Ã— 5 = 1,305. Add them: 7,830 + 1,305 = 9,135" },
    q13: { answer: 0.25, type: 'number', hint: "Divide 3 feet by 12 strips: 3 Ã· 12 = 0.25 feet" },
    q14a: { answer: 'false', type: 'radio' },
    q14b: { answer: 'false', type: 'radio' },
    q14c: { answer: 'false', type: 'radio' },
    q15: { answer: 306, type: 'number', hint: "Think: 25 Ã— 300 = 7,500. Then 7,650 - 7,500 = 150. And 25 Ã— 6 = 150. So 300 + 6 = 306" },
    q16: { answer: 'b', type: 'radio', hint: "Convert to common denominator of 14. 2(1/14) = 29/14 and 1(3/7) = 1(6/14) = 20/14" },
    q17: { answer: 0.5, type: 'number', hint: "Any decimal less than 1 works! Examples: 0.5 Ã— 100 = 50, or 0.9 Ã— 100 = 90" },
    q18: { answer: 'b', type: 'radio', hint: "Test examples: 10 Ã— 10 = 100 (3 digits), 99 Ã— 99 = 9,801 (4 digits)" },
    q19: { answer: 260, type: 'number', hint: "Volume of Box A = 10Ã—5Ã—4 = 200. Volume of Box B = 5Ã—3Ã—4 = 60. Total = 200 + 60 = 260" },
    q21: { answer: 23850, type: 'number', hint: "Volume = Base Area Ã— Height = 450 Ã— 53 = 23,850" },
    q22: { answer: 'd', type: 'radio', hint: "He multiplied by 300 instead of 30, which is 10 times too much. Divide by 10 to fix it" },
    q23: { answer: 'd', type: 'radio', hint: "Original volume = 5Ã—4Ã—7 = 140. New volume = 5Ã—4Ã—11 = 220. Difference = 80 = 4Ã—20" },
    q24a: { answer: 24, type: 'number', hint: "Container volume = 16Ã—12Ã—12 = 2,304. Book volume = 8Ã—6Ã—2 = 96. Divide: 2,304 Ã· 96 = 24" },
    q24b: { answer: 20, type: 'number', hint: "40 pounds Ã· 2 pounds per book = 20 books" },
    q25: { answer: 'd', type: 'radio', hint: "Pattern: each week grows 0.75 cm. Week 3 = 2.25 cm. Convert to mm: 2.25 cm Ã— 10 = 22.5 mm" },
    q26a_quad: { answer: true, type: 'checkbox' },
    q26b_none: { answer: true, type: 'checkbox' },
    q26c_para: { answer: true, type: 'checkbox' },
    q26c_quad: { answer: true, type: 'checkbox' },
    q27: { answer: '<', type: 'text', hint: "Compare digit by digit: 10,129.603 vs 10,129.630. In hundredths place: 0 < 3" },
    q28: { answer: 'c', type: 'radio', hint: "Division and multiplication are inverse operations. If 405 Ã· 15 = n, then 15 Ã— n = 405" }
};

let studentName = '';
let attempts = {}; // Track attempts per question
let responses = {}; // Store all student responses
let startTime;
let currentQuestion = 1;

function startTest() {
    const nameInput = document.getElementById('studentName');
    studentName = nameInput.value.trim();
    
    if (!studentName) {
        alert('Please enter your name before starting the test.');
        return;
    }
    
    // Initialize attempts tracking
    Object.keys(answerKey).forEach(key => {
        attempts[key] = 0;
    });
    
    startTime = new Date();
    
    document.getElementById('studentInfo').style.display = 'none';
    document.getElementById('testContainer').style.display = 'block';
    
    updateProgress();
}

function updateProgress() {
    const totalQuestions = 28;
    const progress = (currentQuestion / totalQuestions) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = `Question ${currentQuestion} of ${totalQuestions}`;
}

function checkAnswer(questionNum) {
    const question = document.querySelector(`[data-question="${questionNum}"]`);
    const feedback = question.querySelector('.feedback');
    
    // Determine which input fields to check based on question
    let isCorrect = false;
    let allAnswered = true;
    
    if (questionNum === 2) {
        // Special handling for question 2 (table with multiple rows)
        const checks = ['q2a', 'q2b', 'q2c', 'q2d'];
        isCorrect = checks.every(key => {
            const selected = document.querySelector(`input[name="${key}"]:checked`);
            if (!selected) {
                allAnswered = false;
                return false;
            }
            return selected.value === answerKey[key].answer;
        });
        
        if (!allAnswered) {
            feedback.className = 'feedback incorrect';
            feedback.textContent = 'âš ï¸ Please answer all parts of the question.';
            return;
        }
        
        // Track attempts
        attempts.q2 = (attempts.q2 || 0) + 1;
        
    } else if (questionNum === 11) {
        // Part A and Part B
        const widthA = parseFloat(document.querySelector('[name="q11a_width"]').value);
        const heightA = parseFloat(document.querySelector('[name="q11a_height"]').value);
        const lengthB = parseFloat(document.querySelector('[name="q11b_length"]').value);
        const widthB = parseFloat(document.querySelector('[name="q11b_width"]').value);
        const heightB = parseFloat(document.querySelector('[name="q11b_height"]').value);
        
        // Check Part A (10 Ã— w Ã— h = 60, so w Ã— h = 6)
        const partACorrect = (widthA * heightA === 6) || 
                             (widthA === 2 && heightA === 3) || 
                             (widthA === 3 && heightA === 2) ||
                             (widthA === 1 && heightA === 6) ||
                             (widthA === 6 && heightA === 1);
        
        // Check Part B (no dimension is 10, and l Ã— w Ã— h = 60)
        const partBCorrect = (lengthB * widthB * heightB === 60) && 
                             lengthB !== 10 && widthB !== 10 && heightB !== 10;
        
        isCorrect = partACorrect && partBCorrect;
        attempts.q11 = (attempts.q11 || 0) + 1;
        
    } else if (questionNum === 14) {
        // Multiple comparisons
        isCorrect = 
            document.querySelector('input[name="q14a"]:checked')?.value === 'false' &&
            document.querySelector('input[name="q14b"]:checked')?.value === 'false' &&
            document.querySelector('input[name="q14c"]:checked')?.value === 'false';
        attempts.q14 = (attempts.q14 || 0) + 1;
        
    } else if (questionNum === 24) {
        // Two parts
        const ansA = parseFloat(document.querySelector('[name="q24a"]').value);
        const ansB = parseFloat(document.querySelector('[name="q24b"]').value);
        isCorrect = ansA === 24 && ansB === 20;
        attempts.q24 = (attempts.q24 || 0) + 1;
        
    } else if (questionNum === 26) {
        // Shape classification with checkboxes
        const trap_quad = document.querySelector('[name="q26a_quad"]').checked;
        const hex_none = document.querySelector('[name="q26b_none"]').checked;
        const rhom_para = document.querySelector('[name="q26c_para"]').checked;
        const rhom_quad = document.querySelector('[name="q26c_quad"]').checked;
        
        isCorrect = trap_quad && hex_none && rhom_para && rhom_quad;
        attempts.q26 = (attempts.q26 || 0) + 1;
        
    } else {
        // Standard questions
        const inputName = `q${questionNum}`;
        const input = document.querySelector(`[name="${inputName}"]`);
        
        if (!input) return;
        
        const inputType = answerKey[inputName]?.type;
        attempts[inputName] = (attempts[inputName] || 0) + 1;
        
        if (inputType === 'radio') {
            const selected = document.querySelector(`input[name="${inputName}"]:checked`);
            if (!selected) {
                feedback.className = 'feedback incorrect';
                feedback.textContent = 'âš ï¸ Please select an answer.';
                return;
            }
            isCorrect = selected.value === answerKey[inputName].answer;
        } else if (inputType === 'number' || inputType === 'text') {
            const userAnswer = inputType === 'number' ? parseFloat(input.value) : input.value.trim();
            const correctAnswer = answerKey[inputName].answer;
            
            if (inputType === 'number') {
                // Allow small floating point differences
                isCorrect = Math.abs(userAnswer - correctAnswer) < 0.01;
            } else {
                isCorrect = userAnswer === correctAnswer;
            }
        }
    }
    
    // Display feedback
    if (isCorrect) {
        feedback.className = 'feedback correct';
        feedback.textContent = 'âœ“ Correct! Great job!';
        
        // Store the correct response
        responses[`q${questionNum}`] = {
            attempt: attempts[`q${questionNum}`] || attempts[`q${questionNum}`] || 1,
            correct: true
        };
    } else {
        const attemptCount = attempts[`q${questionNum}`] || attempts[`q${questionNum}`] || 1;
        
        if (attemptCount === 1) {
            // First attempt - show hint
            feedback.className = 'feedback hint';
            const hint = answerKey[`q${questionNum}`]?.hint || 
                        "Try again! Think about the problem step by step.";
            feedback.innerHTML = `ðŸ’¡ Not quite. Here's a hint:<br>${hint}<br><strong>Try one more time!</strong>`;
        } else {
            // Second attempt
            feedback.className = 'feedback incorrect';
            feedback.textContent = 'âœ— Keep practicing! Move on to the next question.';
            
            // Store the incorrect response
            responses[`q${questionNum}`] = {
                attempt: 2,
                correct: false
            };
        }
    }
}

// Auto-check for number inputs when user presses Enter
document.addEventListener('DOMContentLoaded', function() {
    const numberInputs = document.querySelectorAll('.answer-input');
    numberInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const question = input.closest('.question');
                const questionNum = parseInt(question.getAttribute('data-question'));
                checkAnswer(questionNum);
            }
        });
    });
});

async function submitTest() {
    const endTime = new Date();
    const duration = Math.round((endTime - startTime) / 1000 / 60); // minutes
    
    // Collect all answers
    const allAnswers = {};
    let totalCorrect = 0;
    let totalQuestions = 28;
    
    // Process each question
    for (let i = 1; i <= totalQuestions; i++) {
        const response = responses[`q${i}`];
        if (response && response.correct) {
            totalCorrect++;
        }
        allAnswers[`Q${i}`] = response ? 
            `${response.correct ? 'Correct' : 'Incorrect'} (${response.attempt} attempt${response.attempt > 1 ? 's' : ''})` : 
            'Not answered';
    }
    
    const score = ((totalCorrect / totalQuestions) * 100).toFixed(1);
    
    // Prepare data for Google Sheets
    const testData = {
        timestamp: new Date().toLocaleString(),
        studentName: studentName,
        score: score,
        correctAnswers: totalCorrect,
        totalQuestions: totalQuestions,
        duration: `${duration} minutes`,
        ...allAnswers
    };
    
    // Send to Google Sheets
    try {
        await sendToGoogleSheets(testData);
        
        // Show results
        document.getElementById('testContainer').style.display = 'none';
        document.getElementById('resultsContainer').style.display = 'block';
        document.getElementById('scoreDisplay').innerHTML = `
            <p>Score: ${totalCorrect}/${totalQuestions} (${score}%)</p>
            <p>Time: ${duration} minutes</p>
            <p>Your results have been submitted to your teacher.</p>
        `;
    } catch (error) {
        alert('There was an error submitting your test. Please let your teacher know.');
        console.error('Submission error:', error);
    }
}

async function sendToGoogleSheets(data) {
    // You'll need to replace this URL with your Google Apps Script Web App URL
    const SCRIPT_URL = 'https://docs.google.com/spreadsheets/d/1-UubbZoZXkvy7bnCIHlWRURc7L8FheF_esIDfh2VipQ/edit?gid=0#gid=0';
    
    try {
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        return true;
    } catch (error) {
        console.error('Error sending to Google Sheets:', error);
        throw error;
    }
}
