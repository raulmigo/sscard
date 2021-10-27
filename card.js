let name = document.getElementById('name').textContent;

let barcode = document.getElementById('clubid').textContent;
	
JsBarcode("#barcode", 'C12345', {
  format: "CODE128",
  lineColor: "#000000",
  width: 2,
  height: 40,
  displayValue: true
});

Webcam.attach( '#photo' );

function take_snapshot() {
	console.log("snapshot clicked!!")
			// take snapshot and get image data
	Webcam.snap(function(data_uri) {
				// display results in page
				document.getElementById('photo').innerHTML ='<img src="'+data_uri+'"/>';
			});
}

function openCamera(){
	Webcam.attach( '#photo' );
}

//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}


console.log(name);
	//document.getElementById('clubid')
	//document.getElementById('expiration')
function fillOutCard() {
	div_hide();
	document.getElementById('name').textContent = document.getElementById('formname').value;
	
	document.getElementById('clubid').textContent = "Member ID #"  + document.getElementById('memberId').value;
	
	document.getElementById('issueDate').textContent = "Issue Date: " + document.getElementById('issue').value;
	
	let barcode = document.getElementById('memberId').value;
	
	JsBarcode("#barcode", barcode, {
  format: "CODE128",
  lineColor: "#000000",
  width:4,
  height:80,
  displayValue: true
});
	
	
	//console.log(document.getElementById("formname"));	
}

