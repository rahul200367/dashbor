
var ctx = document.getElementById('lineChart').getContext('2d');


var data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
        label: 'Sample Line Chart',
        data: [12, 19, 3, 5, 2],
        borderColor: 'rgba(75, 192, 192, 1)', // Line color
        borderWidth: 2, // Line width
    }]
};


var options = {
    responsive: true,
    maintainAspectRatio: false,
};


var lineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});
//doughnut
var ctxD = document.getElementById("doughnutChart").getContext('2d');
var myLineChart = new Chart(ctxD, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [4306,3801,1689],
      backgroundColor: ["#46BFBD", "#FDB45C", "#F7464A"],
      hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
    }]
  },
  options: {
    responsive: true
  }
});
const calendar = document.getElementById('calendar');
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const renderCalendar = () => {
  const date = new Date();
  const currMonth = date.getMonth();
  const currYear = date.getFullYear();

  const firstDayOfMonth = new Date(currYear, currMonth, 1);
  const lastDayOfMonth = new Date(currYear, currMonth + 1, 0);

  const daysInMonth = lastDayOfMonth.getDate();
  const dayOfWeek = firstDayOfMonth.getDay();

  let days = [];

  for (let i = 0; i < dayOfWeek; i++) {
    days.push('');
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const calendarBody = document.querySelector('tbody');
  calendarBody.innerHTML = '';

  for (let i = 0; i < days.length; i += 7) {
    const week = days.slice(i, i + 7);

    const tr = document.createElement('tr');
    week.forEach(day => {
      const td = document.createElement('td');

      if (day === date.getDate()) {
        td.classList.add('today');
      }

      td.textContent = day;
      tr.appendChild(td);
    });

    calendarBody.appendChild(tr);
  }

  document.querySelector('h2').textContent = `${monthNames[currMonth]} ${currYear}`;
};

renderCalendar();

  