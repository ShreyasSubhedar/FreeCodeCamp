    <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>

<style>
  .bar {
    width: 25px;
    height: 100px;
    /* Only change code below this line */

    
    /* Only change code above this line */
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
  var d =[]
fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
        .then(response=>response.json())
        .then(data=>{
        for(var i in data.data){
          d.push(data.data[i][1])
        }

        });

        d3.select("body").selectAll("div")
        .data(d)
        .enter()
        .append("div")
        .attr("class", "bar")
        .style("margin","2px")
        .style("height", (d) => (d*10 + "px"))
  </script>
</body>
