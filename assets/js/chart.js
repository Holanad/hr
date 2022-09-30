let choiceItemOne = $('.vacancy-info-choice-item').eq(0).find('span').text();
let choiceItemTwo = $('.vacancy-info-choice-item').eq(1).find('span').text();
let choiceItemThree = $('.vacancy-info-choice-item').eq(2).find('span').text();
let choiceItemFour = $('.vacancy-info-choice-item').eq(3).find('span').text();


const data = {
    datasets: [{
      backgroundColor: ['#5B8AC6', '#A284F5', '#1E5376', '#99F1D7'],
      borderColor: '#fff',
      hoverBorderColor: '#fff',
      spacing: 5,
      data: [choiceItemOne, choiceItemTwo, choiceItemThree, choiceItemFour],
      borderRadius: 10,
      cutout: 70,

    }]
};

const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
    },
};

const myChart = new Chart(
    document.getElementById('myChart'), config
);