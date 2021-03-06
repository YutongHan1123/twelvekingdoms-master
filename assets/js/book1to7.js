//Set margins and sizes
var margin08 = {
  top: 0,
  bottom: 40,
  right: 30,
  left: 50
};
var width08 = window.innerWidth*0.6 - margin08.left - margin08.right;
var height08 = window.innerWidth*0.55 - margin08.top - margin08.bottom;
//Load Color Scale
var colordata08 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var colors08 = d3.scaleOrdinal()
               .domain(colordata08)
               .range(["#f3c623", "#d63447", "#84a9ac", "#844685", "#cfd186"]);
var div08 = d3.select("#book1to7").append("div")
          .attr("class", "tooltip")
          .style("opacity", 0);

//Load External Data
d3.json("assets/data/book1to7.json", function(dataset){
  //Extract data from dataset
  var nodes08 = dataset.nodes,
    links08 = dataset.links;
    // console.log(dataset);
  //Create Force Layout
  var force08 = d3.forceSimulation()
          .force("link", d3.forceLink().id(function(d,i) {
              return i;
          })
          .distance(function(d){
            if(d.target.influence > 700) {
              return d.target.influence*0.05;
            } else if(700 > d.target.influence > 500){
              return d.target.influence*0.04;
            } else if(500 > d.target.influence > 400){
              return d.target.influence*0.03;
            } else if(400 > d.target.influence > 200){
              return d.target.influence*0.02;
            } else {
              return d.target.influence*0.01;
            }
          }))
          .force("charge", d3.forceManyBody().strength(-600 ))
          .force("center", d3.forceCenter(width08 / 2,height08 / 2));

  var svgElement08 = d3.select("#book1to7")
            .append("svg")
            .attr("width", width08+margin08.left+margin08.right) .attr("height", height08+margin08.top+margin08.bottom)
            .append("g")
            .attr("transform","translate("+margin08.left+","+margin08.top+")");
  //Add links to SVG
  var link08 = svgElement08.append('g')
          .attr('class','links')
          .selectAll("line")
          .data(links08)
          .enter()
          .append("line")
          .attr("stroke-width", function(d){ return d.weight/18; })
          .attr("class", "links")
          .on("mousemove", function(d) {
            div08.transition()
      						.duration(200)
      						.style("opacity", .9);
      			div08.html("<p> Proximity between " + d.source.character + " and " + d.target.character + ": " + d.weight + "</p>")
      						.style("left", (d3.event.pageX) + "px")
      						.style("top", (d3.event.pageY - 28) + "px");
      						})
          .on("mouseout", function(d){
            div08.transition()
           .duration(500)
           .style("opacity", 0);
         });;

  //Add nodes to SVG
  var node08 = svgElement08.append('g')
          .attr('class','nodes')
          .selectAll('circle')
          .data(nodes08)
          .enter()
          .append("circle")
          .attr("class", "bubbles")
          .attr("r", function(d){ return d.influence*0.05; })
          .attr('fill',function (d,i) {
              return colors08(d.zone);
          })
          .on("mousemove", function(d) {
            if(d.category == 1) {
            div08.transition()
          .duration(200)
          .style("opacity", .9);
      div08.html("<img src='" + d.img +"'>" + "<p> Name: " + d.character + "</p> <p> Frequency: " + d.influence + "</p> <p> Race: " + d.race + "</p> <p>Intro: " + d.intro +"</p>")
          .style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY - 28) + "px");
        } else if (d.category == 2){
          div08.transition()
        .duration(200)
        .style("opacity", .9);
    div08.html("<img src='" + d.img +"'>" + "<p> Name: " + d.character + "</p> <p> Frequency: " + d.influence + "</p> <p>Intro: " + d.intro +"</p>")
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY - 28) + "px");
      } else if (d.category == 3){
          div08.transition()
        .duration(200)
        .style("opacity", .9);
    div08.html("<p> Name: " + d.character + "</p> <p> Frequency: " + d.influence + "</p> <p>Intro: " + d.intro +"</p>")
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY - 28) + "px");
        }
        })
          .on("mouseout", function(d){
            div08.transition()
           .duration(500)
           .style("opacity", 0);
         })
          .call(d3.drag()
                  .on("start", dragstarted)
                  .on("drag", dragged)
                  .on("end", dragended));

  //Add labels to each node
  var label08 = svgElement08.selectAll(null)
            .data(nodes08)
            .enter()
            .append('text')
            .attr("dy", ".08em")
            .style("text-anchor", "middle")
            .text(d => d.character)
            .attr("fill", "white")
            .attr('font-size', function(d){
                          if(d.influence > 400) {
                            return d.influence*0.028;
                          } else {
                            return 0;
                          }
                        })
            .on("mousemove", function(d) {
              if(d.category == 1) {
              div08.transition()
            .duration(200)
            .style("opacity", .9);
        div08.html("<img src='" + d.img +"'>" + "<p> Name: " + d.character + "</p> <p> Frequency: " + d.influence + "</p> <p> Race: " + d.race + "</p> <p>Intro: " + d.intro +"</p>")
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
          } else if (d.category == 2){
            div08.transition()
          .duration(200)
          .style("opacity", .9);
      div08.html("<img src='" + d.img +"'>" + "<p> Name: " + d.character + "</p> <p> Frequency: " + d.influence + "</p> <p>Intro: " + d.intro +"</p>")
          .style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY - 28) + "px");
        } else if (d.category == 3){
            div08.transition()
          .duration(200)
          .style("opacity", .9);
      div08.html("<p> Name: " + d.character + "</p> <p> Frequency: " + d.influence + "</p> <p>Intro: " + d.intro +"</p>")
          .style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY - 28) + "px");
          }
          })
            .on("mouseout", function(d){
              div08.transition()
             .duration(500)
             .style("opacity", 0);
           });

 var label08_2 = svgElement08.selectAll(null)
            .data(nodes08)
            .enter()
            .append('text')
            .attr("dy", "1.2em")
            .style("text-anchor", "middle")
            .text(d => d.influence)
            .attr("fill", "white")
            .attr('font-size', function(d){
                          if(d.influence > 400) {
                            return d.influence*0.027;
                          } else {
                            return 0;
                          }
                        })
            .on("mousemove", function(d) {
              if(d.category == 1) {
              div08.transition()
            .duration(200)
            .style("opacity", .9);
        div08.html("<img src='" + d.img +"'>" + "<p> Name: " + d.character + "</p> <p> Frequency: " + d.influence + "</p> <p> Race: " + d.race + "</p> <p>Intro: " + d.intro +"</p>")
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
          } else if (d.category == 2){
            div08.transition()
          .duration(200)
          .style("opacity", .9);
      div08.html("<img src='" + d.img +"'>" + "<p> Name: " + d.character + "</p> <p> Frequency: " + d.influence + "</p> <p>Intro: " + d.intro +"</p>")
          .style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY - 28) + "px");
        } else if (d.category == 3){
            div08.transition()
          .duration(200)
          .style("opacity", .9);
      div08.html("<p> Name: " + d.character + "</p> <p> Frequency: " + d.influence + "</p> <p>Intro: " + d.intro +"</p>")
          .style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY - 28) + "px");
          }
          })
            .on("mouseout", function(d){
              div08.transition()
             .duration(500)
             .style("opacity", 0);
           });
  // var label2 = node.append("text")
  // 				// .attr("dx", function(d){ 0 - d.influence*0.1; })
  // 				.attr("dy", "1em")
  // 				.attr("font-size", function(d){
  // 					if(d.influence > 180) {
  // 						return d.influence*0.05;
  // 					} else {
  // 						return 0;
  // 					}
  // 					 })
  // 				.style("text-anchor", "middle")
  // 				.text(function(d){ return d.influence; })
  // 				.attr("fill", "white");

  //This function will be executed for every tick of force layout
  force08
          .nodes(nodes08)
          .on("tick", ticked);
  force08
          .force("link")
          .links(links08);
  function ticked() {
    //Set X and Y of node
    node08
      .attr("cx", (data) => { return data.x; })
      .attr("cy", (data) => { return data.y; });
    label08
      .attr('x', (data) => { return data.x })
      .attr('y', (data) => { return data.y });
    label08_2
      .attr('x', (data) => { return data.x })
      .attr('y', (data) => { return data.y });
      //Set X, Y of link
    link08.attr("x1", function(d){ return d.source.x; })
    link08.attr("y1", function(d){ return d.source.y; })
    link08.attr("x2", function(d){ return d.target.x; })
    link08.attr("y2", function(d){ return d.target.y; });
  }
  //Start the force layout calculation
  function dragstarted(d) {
      if (!d3.event.active) force08.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
  }

  function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
  }

  function dragended(d) {
      if (!d3.event.active) force08.alphaTarget(0);
      d.fx = null;
      d.fy = null;
  }
});
