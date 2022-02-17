var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
// For drawing the lines
var africa = [86,114,106,106,107,111,133,221,783,2478];
var asia = [282,350,411,502,635,809,947,1402,3700,5267];
var europe = [168,170,178,190,203,276,408,547,675,734];
var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
var northAmerica = [6,3,2,2,7,26,82,172,312,433];
var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
  ];
  var chart = new Chart(barr, {
	type: 'bar',
	data: {
	   labels: ['Tokoh', 'Projek / Kempen','Webinar', 'Talkshow', 'Video Pendek','Artikel','Engagement Tokoh','Engagement Institusi','Kenyataan Media','Round Table','Polisi Paper','Penerbitan Buku/Makalah','Kajian'], // responsible for how many bars are gonna show on the chart
	   // create 12 datasets, since we have 12 items
	   // data[0] = labels[0] (data for first bar - 'Standing costs') | data[1] = labels[1] (data for second bar - 'Running costs')
	   // put 0, if there is no data for the particular bar
	   datasets: [{
		  label: 'TFPN',
		  data: [1,0,1,0,5,1,2,0,0,0.0,0,0],
		  backgroundColor: '#22aa99'
	   }, {
		  label: 'TFMP',
		  data: [8, 4,7,0,2,19,22,26,4,13,5,0,3],
		  backgroundColor: '#994499'
	   }, {
		  label: 'TFKB',
		  data: [3, 0,2,0,0,11,8,5,0,2,0,1,0],
		  backgroundColor: '#316395'
	   }, {
		  label: 'TFIK',
		  data: [3, 0,2,0,0,0,6,0,0,2,0,0,2],
		  backgroundColor: '#b82e2e'
	   }, {
		  label: 'TFKE',
		  data: [2, 0,1,0,0,0,2,0,0,0,1,0,0],
		  backgroundColor: '#66aa00'
	   }, {
		  label: 'AN',
		  data: [2, 0,1,0,0,0,0,0,0,0,0,0,0],
		  backgroundColor: '#dd4477'
	   }, {
		  label: 'WANITA',
		  data: [0, 0,1,0,0,0,0,0,0,0,0,0,0],
		  backgroundColor: '#0099c6'
	   
	   }]
	},
	options: {
	   responsive: false,
	   legend: {
		  position: 'right' // place legend on the right side of chart
	   },
	   scales: {
		  xAxes: [{
			 stacked: true // this should be set to make the bars stacked
		  }],
		  yAxes: [{
			 stacked: true // this also..
		  }]
	   }
	}
 });
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
        { 
            data: africa,
            label: "Africa",
            borderColor: "#3e95cd",
            fill: false
          },
          { 
            data: asia,
            label: "Asia",
            borderColor: "#3e95cd",
            fill: false
          },
          { 
            data: europe,
            label: "Europe",
            borderColor: "#3e95cd",
            fill: false
          },
          { 
            data: latinAmerica,
            label: "Latin America",
            borderColor: "#3e95cd",
            fill: false
          },
          { 
            data: northAmerica,
            label: "North America",
            borderColor: "#3e95cd",
            fill: false
          }
    ]
  }
});

new Chart("piechart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "World Wide Wine Production 2018"
        
      }
    }
  });

  var xVal = [100,200,300,400,500,600,700,800,900,1000];

new Chart("linechart", {
  type: "line",
  data: {
    labels: xVal,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

