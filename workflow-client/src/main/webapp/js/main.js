var counterArray = new Array();

function addInputField(inputName){
	if(counterArray[inputName] == null){
		counterArray[inputName] = 0;
	}else{
		counterArray[inputName]++;
	}
	var location = document.getElementById(inputName);
	location.innerHTML += '<input type="text" name="' + inputName + counterArray[inputName] + '">' + "&nbsp;";
}

function changeInputType(oldObject, oType) {
	  var newObject = document.createElement('input');
	  newObject.type = oType;
	  if(oldObject.size) newObject.size = oldObject.size;
	  if(oldObject.value) newObject.value = oldObject.value;
	  if(oldObject.name) newObject.name = oldObject.name;
	  if(oldObject.id) newObject.id = oldObject.id;
	  if(oldObject.className) newObject.className = oldObject.className;
	  oldObject.parentNode.replaceChild(newObject,oldObject);
	  return newObject;
}

function switchInputField(span) {

	var field = span.getElementsByTagName("input")[0];

	var currentType = field.type;
	if (currentType == "text") {
		field.value = "";
		field = changeInputType(field, "file");
	} else {
		field = changeInputType(field, "text");
	}

	var inputName = field.name;
	var inputs = document.getElementById(inputName).getElementsByTagName("input");
	for (var i = 0; i <= inputs.length; i++) {
		field = inputs[i];
		if (currentType == "text") {
			field = changeInputType(field, "file");
		} else {
			field = changeInputType(field, "text");
		}
	}
	
}

function showDetails(){

	var selectedWorkflow = document.getElementById("MyExpWorkflow0").value;

	
	var detailsWindow = window.open("InfoGenerator?id="+selectedWorkflow,"WorkflowDetails", 
			"resizable,width=800,height=700,scrollbars,left=200,top=100");

	detailsWindow.focus();
}

function loginMyExperiment () 
{
	var frm = document.getElementById("uploadWorkflows");
	frm.submit();
}

