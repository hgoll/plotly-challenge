

// ========== Belly Code Sample
// d3.json("../data/samples.json", function(data) {
//     console.log(data);
// });

const importedData = "../data/samples.json";

// const json = "../data/samples.json";
// const obj = JSON.parse(json);

bellyButton = d3.json(importedData)

var names = [];
var metdat = [];
var samples = [];


//dropdown
var dropdown = d3.select("#selDataset")
    .selectAll("option");

function init(){
    bellyButton.then((data)=> {

        names = data.names;
        metdat = data.metadata;
        samples = data.samples;

        
        var metdatObj = [];
        metdat.forEach((item, index)=>{
            metdatObj.push(item);
        var array1 =[item.id]

        dropdown.data([array1])
            .enter()
            .append("option")              
            .attr("value",function(name){
                return name})           
            .html(function(name){
                return name});

        });
    });

}

init();

//function for page change---- 
// (Uncaught ReferenceError: 
// optionChanged is not defined at HTMLSelectElement.onchange...html line 25)

function optionChanged(element){
    var sample_values = [];
    var otu_ids = [];
    var otu_labels = [];

    var ethnicity = `ethnicity: ${metdat[0].ethnicity}`;
    var gender = `gender: ${metdat[0].gender}`;
    var age = `age: ${metdat[0].age}`;
    var location = `location: ${metdat[0].location}`;
    var bbtype = `bbType: ${metdat[0].bbtype}`;
    var wfreq = `Wfreq: ${metdat[0].wfreq}`;    

    var array = [ethnicity, gender, age, location, bbtype, wfreq];
    var selectSampMD = d3.select("#sample-metadata").append("ul");
    
    selectSampMD.selectAll("li")
        .data(array)
        .enter()
        .append("li")
        .text(function(d) {
            return d
});

    
    samples.forEach((element, index) => {
        sample_values.push(element.sample_values.slice(0,10).reverse());
        otu_ids.push(element.otu_ids.slice(0, 10).reverse());
        otu_labels.push(element.otu_labels.slice(0, 10).reverse());
    })

    var trace = {
        x: sample_values[0],
        y: otu_ids[0],
    
        type: "bar",
        text: otu_labels[0],
        orientation: "h"
    };

    var chartData = [trace];

    var layout = {
        title: "OTU / bacteria",
        xaxis: { title: "OTU"},
        yaxis: { title: "bacteria"}
    };
    Plotly.newPlot("bar", chartData, layout);

    var trace2 = {
        x: otu_ids[0],
        y: sample_values[0],
        mode: 'markers',
        marker: { 
            size: sample_values[0],
            color: otu_ids[0]},
        text: otu_labels,
        type: "scatter"
    };

    var chart = [trace2];

    var layout2 = {
        title: 'Bubble Chart'
    };

    Plotly.newPlot('bubble', chart, layout2);
};
//============
    // var trace2 = {
    //     x: otu_ids[0],
    //     y: sample_values[0],
    //     mode: 'markers',
    //     marker: { 
    //         size: sample_values[0],
    //         color: otu_ids[0]},
    //     text: otu_labels,
    //     type: "scatter"
    // };

    // var data2 = [trace2];

    // var layout2 = {
    //     title: 'Bubble Chart',
    //     height: 600,
    //     width: 600
    // };

    // Plotly.newPlot('bubble', data2, layout2);


// //===demographics
        
//         var ethnicity = `Ethnicity: ${metdat[0].ethnicity}`;
//         var gender = `Gender: ${metdat[0].gender}`;
//         var age = `Age: ${metdat[0].age}`;
//         var location = `Location: ${metdat[0].location}`;
//         var bbtype = `BB Type: ${metdat[0].bbtype}`;
//         var wfreq = `WFreq: ${metdat[0].wfreq}`;    

//         var array = [ethnicity, gender, age, location, bbtype, wfreq];
//         var ul = d3.select("#sample-metadata").append("ul");
//         var selection = ul.selectAll("li")
//             .data(array)
//             .enter()
//             .append("li")
//             .text(function(d) {
//                 return d;
//         })


// var sample_values = [];
// var otu_ids = [];
// var otu_labels = [];

// bellyButton.samples.forEach((element, index) => {
//     sample_values.push(element.sample_values.slice(0,10).reverse());
//     otu_ids.push(element.otu_ids.slice(0, 10));
//     otu_labels.push(element.otu_labels.slice(0, 10));
// });


//===========en of Belly sampl code

