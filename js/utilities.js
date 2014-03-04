var parseDate = d3.time.format("%m/%d/%y %H:%M").parse;

d3.csv("power.csv", function(error, data) {
  data.forEach(function(d) {
     d.timestamp = parseDate(d.timestamp);
     d.current = +d.current;
  });
  var dataSources = [
    {
     id: 'power-timeline',
     title: 'kw/h',
     dimensions: {
        x: 'timestamp',
        y: 'current',
     },
     data: data
   }
  ];
  var timelineGraph = glimpse.graphBuilder.create('line')
                        .data(dataSources)
                        .config({yAxisUnit: ' kw/h', width: 780, height: 580})
                        .render('#power');
});

d3.csv("temperature.csv", function(error, data) {
  data.forEach(function(d) {
     d.timestamp = parseDate(d.timestamp);
     d.temp = +d.temp;
  });

  var dataSources = [
    {
     id: 'temperature-conservatory',
     title: 'Conservatory Temperature',
     dimensions: {
        x: 'timestamp',
        y: 'temp',
     },
     data: data
   }
  ];
  var timelineGraph = glimpse.graphBuilder.create('line')
                        .data(dataSources)
                        .config({yAxisUnit: ' C', width: 780, height: 580})
                        .render('#temperature');
});

d3.csv("humidity.csv", function(error, data) {
  data.forEach(function(d) {
     d.timestamp = parseDate(d.timestamp);
     d.humidity = +d.humidity;
  });
  var dataSources = [
    {
     id: 'humidity-conservatory',
     title: 'Conservatory Humidity',
     dimensions: {
        x: 'timestamp',
        y: 'humidity',
     },
     data: data
   }
  ];
  var timelineGraph = glimpse.graphBuilder.create('line')
                        .data(dataSources)
                        .config({yAxisUnit: ' %', width: 780, height: 580})
                        .render('#humidity');
});

d3.csv("power2.csv", function(error, data) {
  data.forEach(function(d) {
     d.timestamp = parseDate(d.timestamp);
     d.current = +d.current;
  });
  var dataSources = [
    {
     id: 'power-timeline',
     title: 'kw/h',
     dimensions: {
        x: 'timestamp',
        y: 'current',
     },
     data: data
   }
  ];
  var timelineGraph = glimpse.graphBuilder.create('line')
                        .data(dataSources)
                        .config({yAxisUnit: ' kw/h', width: 780, height: 580})
                        .render('#power2');
});

