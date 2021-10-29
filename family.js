document.getElementById('family-popup').style.display = "none";



function div_show() {
document.getElementById('family-popup').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('family-popup').style.display = "none";
}

let barcode = document.getElementById('clubid').textContent;

JsBarcode("#barcode", 'C12345', {
  format: "CODE128",
  lineColor: "#000000",
  width: 2,
  height: 40,
  displayValue: false
});

function fillOutCard() {
	div_hide();
	document.getElementById('member1').textContent = document.getElementById('formname1').value;
	document.getElementById('member2').textContent = document.getElementById('formname2').value;
	document.getElementById('member3').textContent = document.getElementById('formname3').value;
	document.getElementById('member4').textContent = document.getElementById('formname4').value;
	document.getElementById('member5').textContent = document.getElementById('formname5').value;
	document.getElementById('member6').textContent = document.getElementById('formname6').value;

	document.getElementById('clubid').textContent = "Member ID #"  + document.getElementById('memberId').value;

	document.getElementById('issueDate').textContent = "Issue Date: " + document.getElementById('issue').value;

	let barcode = document.getElementById('memberId').value;

	JsBarcode("#barcode", barcode, {
  format: "CODE128",
  lineColor: "#000000",
  width:4,
  height:80,
  displayValue: false
    });
}