const currentDate = new Date();
    let selectedDate = new Date();

    function renderCalendar() {
        const monthYear = document.getElementById('month-year');
        const calendarDays = document.getElementById('calendar-days');

        selectedDate.setDate(1);
        const month = selectedDate.getMonth();
        const year = selectedDate.getFullYear();

        const lastDay = new Date(year, month + 1, 0).getDate();
        const firstDayIndex = selectedDate.getDay();

        monthYear.textContent = `${selectedDate.toLocaleString('default', { month: 'long' })} ${year}`;
        calendarDays.innerHTML = '';

        // Create empty days for previous month
        for (let i = 0; i < firstDayIndex; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('calendar-day', 'disabled');
            calendarDays.appendChild(emptyDiv);
        }

        // Create days for current month
        for (let i = 1; i <= lastDay; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('calendar-day');
            dayDiv.textContent = i;
            dayDiv.addEventListener('click', () => selectDate(dayDiv, i));

            if (i === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
                dayDiv.classList.add('selected');
            }

            calendarDays.appendChild(dayDiv);
        }
    }

    function selectDate(dayDiv, day) {
        const selected = document.querySelector('.calendar-day.selected');
        if (selected) selected.classList.remove('selected');
        dayDiv.classList.add('selected');
        currentDate.setDate(day);
    }

    function changeMonth(direction) {
        selectedDate.setMonth(selectedDate.getMonth() + direction);
        renderCalendar();
    }

    renderCalendar();