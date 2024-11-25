// // Initial ATM Data
// let balance = 1000.00;
// let transactionHistory = [];
// let pin = 7838; // Reserved PIN
// let isPinEntered = false; // Tracks if the PIN was entered correctly

// // Function to display input form
// function showInputForm(type) {
//     const form = document.getElementById('atm-form');
//     form.innerHTML = '';

//     if (type === 'pin') {
//         form.innerHTML = `
//             <input type="text" id="pin-input" placeholder="Enter your PIN">
//             <button onclick="handlePinInput()">Submit</button>
//         `;
//     } else if (type === 'withdraw') {
//         form.innerHTML = `
//             <input type="number" id="withdraw-input" placeholder="Amount to withdraw" min="0">
//             <button onclick="handleWithdraw()">Submit</button>
//         `;
//     } else if (type === 'deposit') {
//         form.innerHTML = `
//             <input type="number" id="deposit-input" placeholder="Amount to deposit" min="0">
//             <button onclick="handleDeposit()">Submit</button>
//         `;
//     } else if (type === 'changePin') {
//         form.innerHTML = `
//             <input type="text" id="old-pin-input" placeholder="Enter current PIN">
//             <input type="text" id="new-pin-input" placeholder="Enter new PIN">
//             <button onclick="handleChangePin()">Submit</button>
//         `;
//     } else if (type === 'exit') {
//         form.innerHTML = '';
//     }
// }

// // Handle PIN input
// function handlePinInput() {
//     const enteredPin = parseInt(document.getElementById('pin-input').value);
//     if (enteredPin === pin) {
//         isPinEntered = true;
//         document.getElementById('screen-message').innerText = "Welcome to your account!";
//         document.getElementById('screen-output').innerText = "Please choose an option:";
//         showInputForm('none'); // Hide form
//     } else {
//         document.getElementById('screen-message').innerText = "Incorrect PIN!";
//         document.getElementById('screen-output').innerText = "Please try again.";
//     }
// }

// // Handle withdrawal
// function handleWithdraw() {
//     const withdrawAmount = parseFloat(document.getElementById('withdraw-input').value);
//     if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
//         alert("Invalid amount entered.");
//         return;
//     }
//     if (withdrawAmount <= balance) {
//         balance -= withdrawAmount;
//         transactionHistory.push(`Withdrawn: $${withdrawAmount.toFixed(2)}`);
//         document.getElementById('screen-message').innerText = "Withdrawal Successful!";
//         document.getElementById('screen-output').innerText = `New Balance: $${balance.toFixed(2)}`;
//     } else {
//         document.getElementById('screen-message').innerText = "Insufficient Funds!";
//         document.getElementById('screen-output').innerText = "";
//     }
//     showInputForm('none'); // Hide form
// }

// // Handle deposit
// function handleDeposit() {
//     const depositAmount = parseFloat(document.getElementById('deposit-input').value);
//     if (isNaN(depositAmount) || depositAmount <= 0) {
//         alert("Invalid amount entered.");
//         return;
//     }
//     balance += depositAmount;
//     transactionHistory.push(`Deposited: $${depositAmount.toFixed(2)}`);
//     document.getElementById('screen-message').innerText = "Deposit Successful!";
//     document.getElementById('screen-output').innerText = `New Balance: $${balance.toFixed(2)}`;
//     showInputForm('none'); // Hide form
// }

// // Handle PIN change
// function handleChangePin() {
//     const oldPin = parseInt(document.getElementById('old-pin-input').value);
//     const newPin = parseInt(document.getElementById('new-pin-input').value);
//     if (oldPin === pin) {
//         pin = newPin;
//         document.getElementById('screen-message').innerText = "PIN changed successfully!";
//         document.getElementById('screen-output').innerText = "Your new PIN has been set.";
//         showInputForm('exit'); // Provide exit option
//     } else {
//         document.getElementById('screen-message').innerText = "Incorrect PIN!";
//         document.getElementById('screen-output').innerText = "";
//     }
// }

// // Function for ATM actions
// function atmAction(action) {
//     const screenMessage = document.getElementById('screen-message');
//     const screenOutput = document.getElementById('screen-output');

//     // Check if the correct PIN has been entered
//     if (!isPinEntered && action !== 'changePin') {
//         showInputForm('pin'); // Show PIN input
//         return;
//     }

//     switch(action) {
//         case 'checkBalance':
//             screenMessage.innerText = "Your Balance:";
//             screenOutput.innerText = `$${balance.toFixed(2)}`;
//             break;
//         case 'withdraw':
//             showInputForm('withdraw');
//             break;
//         case 'deposit':
//             showInputForm('deposit');
//             break;
//         case 'changePin':
//             showInputForm('changePin');
//             break;
//         case 'history':
//             screenMessage.innerText = "Transaction History:";
//             if (transactionHistory.length === 0) {
//                 screenOutput.innerText = "No transactions yet.";
//             } else {
//                 screenOutput.innerHTML = transactionHistory.join("<br>");
//             }
//             break;
//         case 'exit':
//             screenMessage.innerText = "Thank You!";
//             screenOutput.innerText = "Please take your card.";
//             isPinEntered = false; // Reset PIN entry on exit
//             showInputForm('none'); // Hide form
//             break;
//         default:
//             screenMessage.innerText = "Invalid Option!";
//             screenOutput.innerText = "";
//             break;
//     }
// }

// Initial ATM Data
let balance = 1000.00;
let transactionHistory = [];
let pin = 7838; // Reserved PIN
let isPinEntered = false; // Tracks if the PIN was entered correctly

// Function to display input form
function showInputForm(type) {
    const form = document.getElementById('atm-form');
    form.innerHTML = '';

    if (type === 'pin') {
        form.innerHTML = `
            <input type="text" id="pin-input" placeholder="Enter your PIN">
            <button onclick="handlePinInput()">Submit</button>
        `;
        document.getElementById('pin-input').focus();
    } else if (type === 'withdraw') {
        form.innerHTML = `
            <input type="number" id="withdraw-input" placeholder="Amount to withdraw" min="0">
            <button onclick="handleWithdraw()">Submit</button>
        `;
        document.getElementById('withdraw-input').focus();
    } else if (type === 'deposit') {
        form.innerHTML = `
            <input type="number" id="deposit-input" placeholder="Amount to deposit" min="0">
            <button onclick="handleDeposit()">Submit</button>
        `;
        document.getElementById('deposit-input').focus();
    } else if (type === 'changePin') {
        form.innerHTML = `
            <input type="text" id="old-pin-input" placeholder="Enter current PIN">
            <input type="text" id="new-pin-input" placeholder="Enter new PIN">
            <button onclick="handleChangePin()">Submit</button>
        `;
        document.getElementById('old-pin-input').focus();
    } else if (type === 'exit') {
        form.innerHTML = '';
    }

    // Add event listeners for Enter key
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                const button = form.querySelector('button');
                button.click(); // Trigger the button click event
            }
        });
    });
}

// Handle PIN input
function handlePinInput() {
    const enteredPin = parseInt(document.getElementById('pin-input').value);
    if (enteredPin === pin) {
        isPinEntered = true;
        document.getElementById('screen-message').innerText = "Welcome to your account!";
        document.getElementById('screen-output').innerText = "Please choose an option:";
        showInputForm('none'); // Hide form
    } else {
        document.getElementById('screen-message').innerText = "Incorrect PIN!";
        document.getElementById('screen-output').innerText = "Please try again.";
    }
}

// Handle withdrawal
function handleWithdraw() {
    const withdrawAmount = parseFloat(document.getElementById('withdraw-input').value);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Invalid amount entered.");
        return;
    }
    if (withdrawAmount <= balance) {
        balance -= withdrawAmount;
        transactionHistory.push(`Withdrawn: $${withdrawAmount.toFixed(2)}`);
        document.getElementById('screen-message').innerText = "Withdrawal Successful!";
        document.getElementById('screen-output').innerText = `New Balance: $${balance.toFixed(2)}`;
    } else {
        document.getElementById('screen-message').innerText = "Insufficient Funds!";
        document.getElementById('screen-output').innerText = "";
    }
    showInputForm('none'); // Hide form
}

// Handle deposit
function handleDeposit() {
    const depositAmount = parseFloat(document.getElementById('deposit-input').value);
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("Invalid amount entered.");
        return;
    }
    balance += depositAmount;
    transactionHistory.push(`Deposited: $${depositAmount.toFixed(2)}`);
    document.getElementById('screen-message').innerText = "Deposit Successful!";
    document.getElementById('screen-output').innerText = `New Balance: $${balance.toFixed(2)}`;
    showInputForm('none'); // Hide form
}

// Handle PIN change
function handleChangePin() {
    const oldPin = parseInt(document.getElementById('old-pin-input').value);
    const newPin = parseInt(document.getElementById('new-pin-input').value);
    if (oldPin === pin) {
        pin = newPin;
        document.getElementById('screen-message').innerText = "PIN changed successfully!";
        document.getElementById('screen-output').innerText = "Your new PIN has been set.";
        showInputForm('exit'); // Provide exit option
    } else {
        document.getElementById('screen-message').innerText = "Incorrect PIN!";
        document.getElementById('screen-output').innerText = "";
    }
}

// Function for ATM actions
function atmAction(action) {
    const screenMessage = document.getElementById('screen-message');
    const screenOutput = document.getElementById('screen-output');

    // Check if the correct PIN has been entered
    if (!isPinEntered && action !== 'changePin') {
        showInputForm('pin'); // Show PIN input
        return;
    }

    switch(action) {
        case 'checkBalance':
            screenMessage.innerText = "Your Balance:";
            screenOutput.innerText = `$${balance.toFixed(2)}`;
            break;
        case 'withdraw':
            showInputForm('withdraw');
            break;
        case 'deposit':
            showInputForm('deposit');
            break;
        case 'changePin':
            showInputForm('changePin');
            break;
        case 'history':
            screenMessage.innerText = "Transaction History:";
            if (transactionHistory.length === 0) {
                screenOutput.innerText = "No transactions yet.";
            } else {
                screenOutput.innerHTML = transactionHistory.join("<br>");
            }
            break;
        case 'exit':
            screenMessage.innerText = "Thank You!";
            screenOutput.innerText = "Please take your card.";
            isPinEntered = false; // Reset PIN entry on exit
            showInputForm('none'); // Hide form
            break;
        default:
            screenMessage.innerText = "Invalid Option!";
            screenOutput.innerText = "";
            break;
    }
}

