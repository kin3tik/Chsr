var choices = [];
var count = 0;

function add(object, choice) { //add the selected item to `choice[]`
    var id = "#"+object.id;
    var index = choices.indexOf(choice);
    //check if already 'on'
    if(index == -1) {
    	//is 'off', turn 'on' and add to choices[]
    	css(id, 'background-color', 'black');
    	choices.push(choice);
    } else {
    	//is 'on', turn 'off' and remove from choices[]
    	css(id, 'background-color', '#737373'); //turns grey
    	choices.splice(index,1);
    }
};
            
function pick() { //randomly pick from the selected items in `choice[]`
	if(choices.length == 0) {
		alert("Select items to pick from!");
	} else if(choices.length == 1) {
		alert("You have only selected "+choices[0]);
	} else {
    	var rand = choices[Math.floor(Math.random() * choices.length)];
    	alert(rand);
    }
};
            
function addItem() { //add a new item to the list to choose from
    //add new HTML element
    var name = document.getElementById('newItem').value;
    if(name != '') {  
    	//insert new button code       
    	var element = document.getElementById('btnPick');
    	var html = "<button class=\"btnChoice\" id=\"newchoice"+count+"\" onclick=\"add(this,'"+name+"')\" ontouchstart=\"\">"+name+"</button>";
    	element.insertAdjacentHTML('beforebegin', html);
    	//clear input text field
    	var tf = document.getElementById('newItem');
    	tf.value = '';
        //automatically select newly added item
        add(document.getElementById('newchoice'+count), name);
        //increment for next new item
        count++;
    }
};
            
function css(selector, property, value) { //change a css value
    for (var i=0; i<document.styleSheets.length;i++) {//Loop through all styles
        //Try add rule
        try { document.styleSheets[i].insertRule(selector+ ' {'+property+':'+value+'}', document.styleSheets[i].cssRules.length);
        } catch(err) {try { document.styleSheets[i].addRule(selector, property+':'+value);} catch(err) {}}//IE
    }
};