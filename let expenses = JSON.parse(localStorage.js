let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
    const title = document.getElementById("title").value;
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;

    if (!title || !amount) return;

    expenses.push({ title, amount: Number(amount), category });
    localStorage.setItem("expenses", JSON.stringify(expenses));

    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";

    renderExpenses();
}

function renderExpenses() {
    const list = document.getElementById("expenseList");
    const total = document.getElementById("total");
    list.innerHTML = "";

    let sum = 0;

    expenses.forEach((e, i) => {
        sum += e.amount;
        list.innerHTML += `
            <li>
                <span>${e.title} (${e.category})</span>
                <span>₹${e.amount}</span>
                <button class="delete" onclick="deleteExpense(${i})">X</button>
            </li>
        `;
    });

    total.innerText = sum;
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();
}

renderExpenses();
