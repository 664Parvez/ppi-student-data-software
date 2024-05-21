const year_of_copywrite = new Date().getFullYear()

const current_year = document.getElementById("current_year")
current_year.innerHTML = year_of_copywrite


const full_date = new Date().toLocaleDateString()

const data_date = document.getElementById("date")
data_date.innerHTML = full_date;


function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedHours = String(hours).padStart(2, '0');
    clockElement.textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
}

    updateClock();
    setInterval(updateClock, 1000);

