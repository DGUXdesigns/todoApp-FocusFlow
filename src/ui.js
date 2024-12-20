import { format } from "date-fns";

export class TaskDisplay {
    constructor(container) {
        this.container = document.querySelector(container);
    }

    renderTasks(tasks) {
        this.container.innerHTML = ''; // Clear current list

        tasks.forEach(task => {
            const taskCard = document.createElement('div');
            taskCard.classList.add('task-card');

            // Header info for tak card (Name, Date, Tag)
            const headerContainer = document.createElement('div');
            headerContainer.classList.add('heading');
            
            const title = document.createElement('h3');
            title.innerText = `${task.title}`;

            // Tags
            const tagWrapper = document.createElement('div');
            tagWrapper.classList.add('tag');

            const tagName = document.createElement('p');
            tagName.innerText = `${task.tag}`;

            // Date
            const date = document.createElement('p');
            date.classList.add('date');
            const formatedDate = format(new Date(task.date), 'MMM dd');
            date.innerText = formatedDate;

            const lineBreak = document.createElement('hr');

            // Description
            const description = document.createElement('p');
            description.classList.add('description');
            description.innerText = `${task.description}`;

            // TODO: add checklist to Task Constructor;
            // Render checklist
            const checklistContainer = document.createElement('div');
            checklistContainer.classList.add('checklist');
            task.checklist.forEach((item, index) => {
                const checklistItem = document.createElement('label');
                checklistItem.classList.add('checklist-item');

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = item.completed;

                const checklistLabel = document.createElement('span');
                checklistLabel.innerText = item.description;

                checkbox.addEventListener('change', () => {
                    task.toggleChecklistItem(index);
                    
                    if (task.isTaskComplete(index)) {
                        checklistLabel.style.textDecoration = 'line-through';
                        checklistLabel.style.color = 'rgba(99, 94, 242, 0.5)';
                    } else {
                        checklistLabel.style.textDecoration = 'none';
                        checklistLabel.style.color = 'white';
                    }
                });

                checklistItem.appendChild(checkbox);
                checklistItem.appendChild(checklistLabel);
                checklistContainer.appendChild(checklistItem);
            })

            // Card Footer Info
            const cardFooter = document.createElement('card-footer');
            cardFooter.classList.add('card-footer');

            // Priority Wrapper Settings
            const priorityWrapper = document.createElement('div');
            priorityWrapper.classList.add('priority');

            if (task.priority === 'High') {
                priorityWrapper.style.backgroundColor = 'rgba(223, 13, 13, 0.4)';
            } 

            if (task.priority === 'Medium') {
                priorityWrapper.style.backgroundColor = 'rgba(255, 255, 0, 0.4)';
            } 

            if (task.priority === 'low') {
                priorityWrapper.style.backgroundColor = 'rgba(0, 128, 0, 0.4)';
            } 


            const priority = document.createElement('p');
            priority.innerText = `${task.priority}`;

            if (task.isOverdue()) {
                priorityWrapper.style.backgroundColor = 'rgba(255, 165, 0, 0.4)'
                priority.innerText = 'Overdue!';
            }


            // Buttons
            const btnWrapper = document.createElement('div');
            btnWrapper.classList.add('btn-wrapper');

            const addChecklistBtn = document.createElement('button');
            addChecklistBtn.innerHTML = '<i class="material-icons">list</i>'

            const removeBtn = document.createElement('button');
            removeBtn.innerHTML = '<i class="material-icons">delete</i>';

            const editBtn = document.createElement('button');
            editBtn.innerHTML = '<i class="material-icons">edit</i>';


            this.container.appendChild(taskCard);
            taskCard.appendChild(headerContainer);
            headerContainer.appendChild(title);
            headerContainer.appendChild(tagWrapper);
            tagWrapper.appendChild(tagName);
            headerContainer.appendChild(date);
            taskCard.appendChild(lineBreak);
            taskCard.appendChild(description);
            taskCard.appendChild(checklistContainer);
            taskCard.appendChild(cardFooter);
            cardFooter.appendChild(priorityWrapper);
            priorityWrapper.appendChild(priority);
            cardFooter.appendChild(btnWrapper);
            btnWrapper.appendChild(addChecklistBtn);
            btnWrapper.appendChild(removeBtn);
            btnWrapper.appendChild(editBtn);
        });
    };
}