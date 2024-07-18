//script.js
document.getElementById('add-button').addEventListener('click', function () {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
    // … your code … /
    const ul = document.getElementById('todo-list');
    const li = document.createElement('li');
    const removeButton = document.createElement('button');


    if (task !== '') {
        removeButton.classList.add('remove-button');
        removeButton.textContent = 'Remove';
        li.textContent = task;
        li.append(removeButton);
        ul.append(li);

        removeButton.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        });

    } else {
        alert('Empty value')
    }

    input.value = '';
}

)
