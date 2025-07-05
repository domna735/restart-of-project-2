<%@ page import="hkapps.shipment_feeder.*"%>
<%@ page import="com.hkapps.util.*"%>
<%@ page import="java.net.*"%>


<html>
<head>
<title>DHL Shipment Information Feeder</title>
<!--<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">-->
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<SCRIPT LANGUAGE="javascript" SRC="../js_client/formCheck.js"></SCRIPT>
<script src="../js_client/rollovers.js" type="text/javascript"></script>

<script language="JavaScript" src="../js/change_password/changePassword.js"></script>

</head>

<%

String referpage = request.getHeader("referer");

Common common = new Common();

if (referpage == null) {
   response.sendRedirect(common.convert_path(request.getServerPort(), (request.getRequestURL()).toString(), request.getServletPath(), "../toLogin.html"));
   if(true){return;}
}

URL referurl = new URL(referpage);
if (!common.isValidHost(referurl.getHost())) {
   response.sendRedirect(common.convert_path(request.getServerPort(), (request.getRequestURL()).toString(), request.getServletPath(), "../toLogin.html"));
   if(true){return;}
}

if (!referurl.getPath().equals("/shipment_feeder/change_password/cp_DefPage.jsp")) {
   response.sendRedirect(common.convert_path(request.getServerPort(), (request.getRequestURL()).toString(), request.getServletPath(), "../toLogin.html"));
   if(true){return;}
}

if (request.getQueryString() != null) {
   response.sendRedirect(common.convert_path(request.getServerPort(), (request.getRequestURL()).toString(), request.getServletPath(), "../toLogin.html"));
   if(true){return;}
}

if (session.getAttribute("emailadr") == null) {
  response.sendRedirect(common.convert_path(request.getServerPort(), (request.getRequestURL()).toString(), request.getServletPath(), "../toLogin.html"));
  if(true){return;}
}

%>

<body bgcolor="#FFFFFF" text="#000000">
<blockquote>
<font face="Frutiger, Arial">

<form id="changePasswordForm" name="changePassword" method="post" action="updatePassword.jsp">
<table border="0">
<tr>
<td nowrap><font face="Frutiger, Arial" color="A60018"><b>Old Password:</b></font></td>
<td><input type="password" name="oldPassword" size="16" maxlength="16"></td>
</tr>
<tr>
<td nowrap><font face="Frutiger, Arial" color="A60018"><b>New Password:</b></font></td>
<td><input type="password" name="newPassword" size="16" maxlength="16"></td>
</tr>
<tr>
<td valign="top"><font face="Frutiger, Arial" color="A60018"><b>Re-confirm New Password:</b></font></td>
<td valign="top"><input type="password" name="rcPassword" size="16" maxlength="16"></td>
</tr>

<tr>
<td></td>
<td>
	Note: <br>
	The password should be a combination of <b>6 - 16</b> characters and must contain <b>at least</b> :
	<ul><li><b>1 uppercase letter,</li>
		<li>1 lowercase letter,</li>
		<li>and 1 number.</li></b></ul>
	It cannot include symbols, special characters or space. <br>
	We strongly recommend a regular change of your password for greater security. <br>
</td>

</tr>



</table>
<br>
<input type="submit" name="change" value="Change">
<input type="reset" name="Clear" value="Clear">
</form>

</font>

<br><br><br>

</blockquote>
</body>
</html>
