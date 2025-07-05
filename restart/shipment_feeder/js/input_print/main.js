function toopen() 
{ 
    window.open("","Waybill","width=990,height=760,top=50,left=400,toolbar=0,location=0,directories=0,status=1,menubar=0,scrollbars=1,resizable=1"); 
} 

window.onload=function() {
    document.getElementById("mainForm").addEventListener("submit", function() {
        toopen();
    });
}
