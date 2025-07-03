//document.write('<link rel="STYLESHEET" type="text/css" href="../common.css">');

function loadTop(head, logo, cname)
{
document.write('<link rel="STYLESHEET" type="text/css" href="../common.css">');	
document.write('<SCRIPT LANGUAGE="javascript" SRC="../js_client/formCheck.js"></SCRIPT>');
document.write('<BODY BGCOLOR="#FFFFFF" TEXT="#000000" topmargin="0" leftmargin="0" rightmargin="0" marginheight="0" marginwidth="0" SCROLL="NO">');
document.write('<table width="100%" border="0" CELLSPACING=0 CELLPADDING=0>');
document.write('<tr valign=top>');

if ((logo != "") && (logo != "null")) {
 document.write('<td width="80%" valign=top>');
} else {
 document.write('<td width="103%">');
}
 
//document.write('<table width="103%" border="0" CELLSPACING=0 CELLPADDING=0>');
document.write('<table width="100%" border="0" CELLSPACING=0 CELLPADDING=0>');
document.write('<tr bgcolor="#FFCC00"><td>&nbsp;</td></tr>');
document.write('<tr bgcolor="#CC0000" valign="bottom"><td height="50">');
document.write('<table height="100%" width="100%" border="0">');
//document.write('<tr valign="bottom"><td width="2%">&nbsp;</td><td><font color="#FFFFFF" size="4" face="Arial"><b>'+head+'</b></font></td>');
document.write("<tr valign=bottom><td width=2%>&nbsp;</td><td><font color=#FFFFFF size=4 face=Arial><b>"+head+"</b></font></td>");
document.write('<td align=right width="30%"><font color=#FFFFFF size=2 face=Arial><b>Hello '+cname+'</b></font></td><td width=2%>&nbsp;</td>');
//document.write('<td align=right width="20%"><font color=#FFFFFF size=2 face=Arial><b>&nbsp;</b></font></td><td width=2%>&nbsp;</td>');
document.write('</tr>');
document.write('</table>');
document.write('</td></tr>');
document.write('</table>');
document.write('</td>');

if ((logo != "") && (logo != "null")) {
 document.write('<td>');
 document.write('<img src="../images/logo/' + logo + '" align="left" hspace="0">');
 document.write('</td>');
}

document.write('</tr>');
document.write('</table>');
document.write('</body>');
}

function loadTop_frontpage()
{
document.write('<link rel="STYLESHEET" type="text/css" href="common.css">');	
document.write('<BODY BGCOLOR="#FFFFFF" TEXT="#000000" topmargin="0" leftmargin="0" rightmargin="0" marginheight="0" marginwidth="0" SCROLL="NO">');

document.write('<table width="100%" border="0" CELLSPACING=0 CELLPADDING=0>');
document.write('<tr bgcolor="#FFCC00"><td height="75px" width="15%"><a href="http://www.dhl.com.hk" target=_blank><img src="images/logo.gif" border=0 alt="DHL"></a></td><td>');
//document.write('<div id="Layer1" style="position:absolute; left:157px; top:0px; width:80%; height:200px; z-index:1; border: 0px none #000000">');
document.write('<table width="100%" border="0" CELLSPACING=0 CELLPADDING=0>');
document.write('<tr bgcolor="#FFCC00"><td>&nbsp;</td></tr>');
document.write('<tr bgcolor="#CC0000" valign="bottom"><td height="60px">');
document.write('<table height="100%" width="100%" border="0">');
document.write('<tr valign="bottom"><td width="2%">&nbsp;</td><td><font color="#FFFFFF" size="4" face="Arial"><b>DHL Waybill Printing</b></font></td></tr>');
document.write('</table>');
document.write('</td></tr>');
document.write('</table>');

document.write('</td></tr></table>');
//document.write('</div>');
document.write('<div id="Layer2" style="position:absolute; left:0px; top:48px; width:100%; height:200px; z-index:1; visibility: visible; border: 0px none #000000">');
document.write('<table width="100%" border="0" CELLSPACING=0 CELLPADDING=0>');
document.write('<tr><td><img src="images/headline.jpg" align="right" hspace="0"></td></tr>');
document.write('</table>');
document.write('</div>');
document.write('</body>');
}


function loadMenu(parameterString) {

document.write('<link rel="STYLESHEET" type="text/css" href="../common.css">');
document.write('<link rel="STYLESHEET" type="text/css" href="../menu.css">');
document.write('<style type="text/css">');
document.write('a:link {  font-weight: bold; color: #000000; text-decoration:none}');
document.write('a:visited {  font-weight: bold; color: #000000; text-decoration:none}');
document.write('</style>');

document.write('<BODY topmargin="0" leftmargin="0" rightmargin="0" marginheight="0" marginwidth="0"><font face="Arial" size="2">');

document.write('<table border="0" CELLSPACING=0 CELLPADDING=0 width="167" height="100%"><tr><td colspan="2" valign=top height="5%">');

document.write('<table border="0" CELLSPACING=0 CELLPADDING=0 width="167">');
document.write('<tr><td width="12">&nbsp;</td><td bgcolor="#FFCC00" align="center" height="65px"><a href="http://www.dhl.com.hk" target=_blank><img src="../images/logo.gif" border=0 alt="DHL"></a></td></tr>');
document.write('<tr><td colspan=2></td></tr></table>');

//document.write('<a href="javascript:nextpage(\'../feed_print/fp_DefPage.html?' + parameterString + '\',false);" class="menuItem">Print Document');
document.write('<a href="javascript:nextpage(\'../feed_print/fp_DefPage.html?' + parameterString.replace(/\%26/g,"^") + '\',false);" class="menuItem">Print Document');
document.write('<img src="../images/arrow_r.gif" border="0" vspace="6" alt="" width="9" height="9"></a>');


//document.write('<a href="javascript:nextpage(\'../change_password/cp_DefPage.html?' + parameterString + '\',false);" class="menuItem">Change Password');
document.write('<a href="javascript:nextpage(\'../change_password/cp_DefPage.html?' + parameterString.replace(/\%26/g,"^") + '\',false);" class="menuItem">Change Password');
document.write('<img src="../images/arrow_r.gif" border="0" vspace="6" alt="" width="9" height="9"></a>');


document.write('<a href="javascript:nextpage(\'../logout.html\',false);" class="menuItem">Logout');
document.write('<img src="../images/arrow_r.gif" border="0" vspace="6" alt="" width="9" height="9"></a>');


document.write('</td></tr><tr><td width="7%"></td><td bgcolor="#FFCC00">&nbsp;</td></tr><tr><td colspan=2 valign=bottom height=5%>');


//document.write('<table border="0" CELLSPACING=0 CELLPADDING=0 width="167" height="70%">');
document.write('<table border="0" CELLSPACING=0 CELLPADDING=0 width="167">');
document.write('<tr><td width="12">&nbsp;</td><td bgcolor="#FFCC00" align="center" valign="bottom">');
document.write('<a href="http://www.dpwn.com" target=_blank><img src="../images/dpwn.jpg" border=0 alt="Deutsche Post World Net"></a></td></tr>');
document.write('<tr><td colspan=2></td></tr></table>');

document.write('</td></tr></table>');

document.write('</body>');
	
	
}




function doPopup(s) {
	//window.open(s, 'bps');
	var scrWt=(screen.availWidth) ? screen.availWidth : 800;var scrHt=(screen.availHeight) ? screen.availHeight : 600;
	//var winWt = 593;
	var winWt = 660;
	var winHt = 488;
	if ((winWt > scrWt)) winWt=scrWt-100;
	if ((winHt > scrHt-75)) winHt=scrHt-75;
	var posLinks=((scrWt-winWt)/2)+20;
	var posTop=((scrHt-winHt)/2-20)+20;
        window.open(s, 'bps', 'width='+winWt+',height='+winHt+',left='+posLinks+',top='+posTop+',location=no,menubar=no,toolbar=no,scrollbars=yes,resizable=yes');
 
}

var image = new Object();

function preloadImage(name, state, src)
{
  if (!image[name]) image[name] = new Object();
  image[name][state] = new Image();
  image[name][state].src = src;
}

function swapImageById(img, name, state)
{
  if (image[name])
  {
    //img = document.images[img];
    //img.src = image[name][state].src;
    document.images[img].src = image[name][state].src;
    
  }
}

preloadImage('arrow', 'off', '../images/arrow_r.gif');
preloadImage('arrow', 'on', '../images/arrow_y.gif');

//preloadImage('arrow', 'on', '../images/arrow_r.gif');
//preloadImage('arrow', 'off', '../images/arrow_y.gif');




