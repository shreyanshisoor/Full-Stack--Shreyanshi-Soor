const input = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');
const list = document.getElementById('itemList');
const addItem = () => {
    const text = input.value.trim();
    if (text !== "") {
        const li = document.createElement('li');
        li.textContent = text; 
        list.appendChild(li);
        input.value = "";
        input.focus();
    }
};
const removeItem = () => {
    const lastItem = list.lastElementChild;
    if (lastItem) {
        list.removeChild(lastItem);
    }
};
addBtn.addEventListener('click', addItem);
removeBtn.addEventListener('click', removeItem);
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addItem();
});
