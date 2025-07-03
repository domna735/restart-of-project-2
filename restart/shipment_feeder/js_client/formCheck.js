//************************************
//	Global Variables Define
//**************************************************************************

// --------------------                                    
// To initialize two variables as the page begin loaded    
// which will be used to verify the type of browser        
var isNav4, isIE4                                          
isNav = false;                                             
isIE4 = false;                                             
if (parseInt(navigator.appVersion.charAt(0)) >= 4) {               
  if (navigator.appName == "Netscape") {                   
    isNav = true;                                          
  } else if (navigator.appVersion.indexOf("MSIE") != -1) { 
    isIE4 = true;                                          
  }                                                        
}                                                          

var win;
var msie3=false;
browserVer=parseInt( navigator.appVersion );
//if( browserVer == 2 && navigator.appName == "Microsoft Internet Explorer" ) { browserVer++; msie3=true; }

if( navigator.appName == "Microsoft Internet Explorer" ) { browserVer++; msie3=true; }
// Global variable defaultEmptyOK defines default return value 
// for many functions when they are passed the empty string. 
// By default, they will return defaultEmptyOK.

var defaultEmptyOK = false

// whitespace characters
var whitespace = " \t\n\r";

//***************************************************************************

function winclose()
{
	
  // if( browserVer <= 2 ) 
	{ return true; }
	// alert(msie3);
  if( msie3 != true && typeof( win ) == 'object' && !win.closed ) 
  { alert("netscape found"); win.close(); } 
  else
  { alert("ie found"); window.close();}
  return true;
}


//***************************************************************************
// DHL Alert new version (DHL's formate + Linkage's image)
//***************************************************************************

function dhl_alert( theField, name, text, height )                              
{                                                                               
  if (!height) height = 200;                                                    
                                                                                
  if (isNav) {                                                                  
    if (typeof(newWin) != "undefined" && !newWin.closed) newWin.close(); 
    newWin=window.open("", "dhl_alert", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=300,height=" + height);    
    newWin.focus(); 
  } else if (isIE4) {                                                           
    if (typeof(newWin) != "undefined" && !newWin.closed) newWin.close(); 
    newWin=open("", "dhl_alert", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=300,height=" + height);
    newWin.focus();                                                             
  } else {                                                                      
    // all browsers with version 3.x or below
    newWin=window.open("", "dhl_alert", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=300,height=" + height);    
    newWin.focus();                                    
  }                                                                             
                                                                                
  newWin.document.write( "<HTML><HEAD><TITLE></TITLE></HEAD>\n")


  newWin.document.write( "<script language=\"JavaScript\"> \n <!-- \n")


  newWin.document.write( "\nfunction private_MouseOver() \n")
  newWin.document.write( "{\nif (document.images) { eval(\"document.\" + this.stImageName + \".src=\\\'\" + this.stOverImage + \"\\\'\");}\n}\n")

  newWin.document.write( "\nfunction private_MouseOut() \n")
  newWin.document.write( "{\nif (document.images) { eval(\"document.\" + this.stImageName + \".src=\\\'\" + this.stOutImage + \"\\\'\");}\n}\n")

  newWin.document.write( "\n\nfunction objMouseChangeImg(stImageName, stOverImage, stOutImage) \n")
  newWin.document.write( "{\nthis.stImageName = stImageName; \n this.stOverImage = stOverImage; \n this.stOutImage = stOutImage; \n")
  newWin.document.write( " this.MouseOut = private_MouseOut; \n this.MouseOver = private_MouseOver; } \n ")

  newWin.document.write( "\n\nobjPIC1 = new objMouseChangeImg('PIC1', \'../images/return2.gif\', \'../images/return1.gif\'); ")
  
  newWin.document.write( "\n // --> </script> \n")

  newWin.document.write("<BODY BGCOLOR=\"#FFFFFF\">\n" );                                                           

  newWin.document.write( "<TABLE CELLPADDING=6 WIDTH=\"100\%\" HEIGHT=\"100\%\" BORDER=0><TR><TD BGCOLOR=\"#951314\"><FONT FACE=\"arial,helvetica\" COLOR=\"#FFFFFF\" SIZE=\"+1\"><B>" + name +"</B></FONT></TD></TR>" );                          
  newWin.document.write( "<TR><TD><FONT FACE=\"arial,helvetica\" SIZE=2>"+ text +"</FONT></TD></TR>" ); 
  
  newWin.document.write( "<TR><TD ALIGN=RIGHT><a href=\"javascript:window.close()\" onMouseOver=objPIC1.MouseOver() onMouseOut=objPIC1.MouseOut()><img src=../images/return1.gif border=0 name=PIC1></a></td></tr></TABLE>" );                                                                  
  newWin.document.write( "</BODY></HTML>\n" );                                     
  newWin.document.close();           
                                  
        //theField.focus();       
        //theField.select();      
                                  
}                                 



function checkAWB(inawb) {
	
	if ((inawb.length != 10) || (isNaN(inawb))) return false;
	
  check1=inawb.substring(9,10);
  tocheck=inawb.substring(0,9);
  check2=tocheck % 7;
    
  if (check1 != check2) return false;
  
  return true;

}


function isInteger (s)

{   var i;

    if (isEmpty(s)) 
       if (isInteger.arguments.length == 1) return defaultEmptyOK;
       else return (isInteger.arguments[1] == true);
    

    // Search through string's characters one by one
    // until we find a non-numeric character.
    // When we do, return false; if we don't, return true.

    for (i = 0; i < s.length; i++)
    {   
        // Check that current character is number.
        var c = s.charAt(i);

        if (!isDigit(c)) return false;
    }

    // All characters are numbers.
    return true;
}


function isEmpty(s)
{   return ((s == null) || (s.length == 0))
}

// Returns true if string s is empty or 
// whitespace characters only.

function isWhitespace (s)

{   var i;

    // Is s empty?
    if (isEmpty(s)) return true;

    // Search through string's characters one by one
    // until we find a non-whitespace character.
    // When we do, return false; if we don't, return true.

    for (i = 0; i < s.length; i++)
    {   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
	
        if (whitespace.indexOf(c) == -1) return false;
    }

    // All characters are whitespace.
    return true;
}

function isValidSymbol (s)
{   
    var i;
    var Symbol = ",.&/()-_";
    
    if (Symbol.indexOf(s) != -1) return true;
    
    return false;
}

function isValidSymbol_4_Email (s)
{   
    var i;
    var Symbol = "@.-_&";
    
    if (Symbol.indexOf(s) != -1) return true;
    
    return false;
}

function containInvalidSymbol (s)
{   
    var i;
    //var InvalidSymbol = "`~!@#$%^*+={}|[];'<>?\\\"";
	var InvalidSymbol = "$%*=;<>?\\\"";
	
    for (i = 0; i < s.length; i++)
    {   
        var c = s.charAt(i);	
        if (InvalidSymbol.indexOf(c) != -1) return true;
    }

    // All characters do not contain invalid symbol.
    return false;
}

function containInvalidSymbol_4_Email (s)
{   
    var i;
    var InvalidSymbol = "`~!#$%^&*()+={}|[]:;'<>?,/\\\"";
    
    for (i = 0; i < s.length; i++)
    {   
        var c = s.charAt(i);	
        if (InvalidSymbol.indexOf(c) != -1) return true;
        if (whitespace.indexOf(c) != -1) return true;
    }

    // All characters do not contain invalid symbol.
    return false;
}

function isDigit (c)
{   return ((c >= "0") && (c <= "9"))
}

function isAlpha (c)
{   return (((c >= "a") && (c <= "z")) || ((c >= "A") && (c <= "Z")))
}

function isAlphaNumeric (s) {
    for (i = 0; i < s.length; i++)
    {   
        var c = s.charAt(i);
        if (whitespace.indexOf(c) != -1) {
        	return false;
	} else if (!(isAlpha(c) || isDigit(c))) {
		return false;
	}
    }
    
    return true;
    
}

function isAlphaNumeric_ValidSymbol (s) {
    for (i = 0; i < s.length; i++)
    {   
        var c = s.charAt(i);
        
        if (!(isAlpha(c) || isDigit(c))) {
            if ((!isValidSymbol(c)) && (whitespace.indexOf(c) == -1)) {
        	return false;
            }
        }    	
    }
    return true;
}

function isAlphaNumeric_ValidSymbol_4_Email (s) {
    for (i = 0; i < s.length; i++)
    {   
        var c = s.charAt(i);
        
        if (!(isAlpha(c) || isDigit(c))) {
            if ((!isValidSymbol_4_Email(c)) || (whitespace.indexOf(c) != -1)) {
        	return false;
            }
        }    	
    }
    return true;
}

function isComplexPassword(s) {
	var uppercaseRegex = /[A-Z]/;
	var lowercaseRegex = /[a-z]/;
	var numericRegex = /[0-9]/;
	return uppercaseRegex.test(s) && lowercaseRegex.test(s) && numericRegex.test(s);
}

function isPassword(s) {
	
	if (!isAlphaNumeric(s)) {
		return false;
	} else if ((s.length < 6) || (s.length > 16)) {
		return false;
	} else if (!isComplexPassword(s)) {
		return false;
	} else {
		return true;
	}
	
}

function isLoginID(s) {
	
	//if (!isAlphaNumeric(s)) {
	if (!isAlphaNumeric_ValidSymbol_4_Email(s)) {
		return false;
	//} else if ((s.length < 6) || (s.length > 16)) {
	} else if (s.length != 4) {
		return false;
	} else {
		return true;
	}
	
}

// Get checked value from radio button.

function getRadioButtonValue (radio)
{   
      	for (var i = 0; i < radio.length; i++)
    	{   if (radio[i].checked) { break }
    	}
    	return radio[i].value
}

function isEmail (s)
{   if (isEmpty(s)) 
       if (isEmail.arguments.length == 1) return defaultEmptyOK;
       else return (isEmail.arguments[1] == true);
   
    // is s whitespace?
    if (isWhitespace(s)) return false;
    
    //if (containInvalidSymbol_4_Email(s)) return false;
    if (!isAlphaNumeric_ValidSymbol_4_Email(s)) return false;
    
    // there must be >= 1 character before @, so we
    // start looking at character position 1 
    // (i.e. second character)
    var i = 1;
    var sLength = s.length;

    // look for @
    while ((i < sLength) && (s.charAt(i) != "@"))
    { i++
    }

    if ((i >= sLength) || (s.charAt(i) != "@")) return false;
    else i += 2;

    // look for .
    while ((i < sLength) && (s.charAt(i) != "."))
    { i++
    }

    // there must be at least one character after the .
    if ((i >= sLength - 1) || (s.charAt(i) != ".")) return false;
    else return true;
}

function trimAll(sString) 
{
   if (sString == null || sString == "") {
   	return sString;
   } else {
	while (sString.substring(0,1) == " ")
	{
		sString = sString.substring(1, sString.length);
	}
	while (sString.substring(sString.length-1, sString.length) == " ")
	{
		sString = sString.substring(0,sString.length-1);
	}
	return sString;
   }
}


var dtCh= "/";
var minYear=1900;
var maxYear=2100;

function stripCharsInBag(s, bag){
    var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary (year){
	// February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
   } 
   return this
}

function isDate(dtStr){
	var daysInMonth = DaysArray(12)
	var pos1=dtStr.indexOf(dtCh)
	var pos2=dtStr.indexOf(dtCh,pos1+1)
	
	var strDay=dtStr.substring(0,pos1)
	var strMonth=dtStr.substring(pos1+1,pos2)
	var strYear=dtStr.substring(pos2+1)
	
	strYr=strYear
	if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
	if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
	}
	month=parseInt(strMonth)
	day=parseInt(strDay)
	year=parseInt(strYr)
	if (pos1==-1 || pos2==-1){
		//alert("The date format should be: mm/dd/yyyy")
		return false
	}
	if (strMonth.length<1 || month<1 || month>12){
		//alert("Please enter a valid month")
		return false
	}
	if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
		//alert("Please enter a valid day")
		return false
	}
	if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
		//alert("Please enter a valid 4 digit year between "+minYear+" and "+maxYear)
		return false
	}
	if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
		//alert("Please enter a valid date")
		return false
	}
return true
}

function str2Date(dtStr) {
	var pos1=dtStr.indexOf(dtCh)
	var pos2=dtStr.indexOf(dtCh,pos1+1)
	
	var strDay=dtStr.substring(0,pos1)
	var strMonth=dtStr.substring(pos1+1,pos2)
	var strYear=dtStr.substring(pos2+1)
	
	return new Date(strMonth + "/" + strDay + "/" + strYear);
}


function nextpage(page, isfront) {
	  /*
    if (isfront) {
	    mypopup=window.open('loading.html','load','left=5000,top=5000,width=100,height=100');
    } else {
    	mypopup=window.open('../loading.html','load','left=5000,top=5000,width=100,height=100');
    }	
    */
    parent.location.href=page.replace(/\^/g,"%26");
    //mypopup.close();

}

function nextpage_popup(page, isfront) {
	  
    if (isfront) {
	    mypopup=window.open('loading.html','load','left=300,top=300,width=100,height=100');
    } else {
    	mypopup=window.open('../loading.html','load','left=300,top=300,width=100,height=100');
    }	

    parent.location.href=page;
    //mypopup.close();

}

function nextpage_download(page) {
	  
    mypopup=window.open('../loading_download.html','load','left=300,top=300,width=100,height=100');
    
    parent.location.href=page;
    //mypopup.close();

}
