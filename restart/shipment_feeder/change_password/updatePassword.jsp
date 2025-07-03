<%@ page import="hkapps.shipment_feeder.*"%>
<%@ page import="com.hkapps.util.*"%>
<%@ page import="java.util.*"%>
<%@ page import="java.lang.*"%>
<%@ page import="java.io.*" %>
<%@ page import="java.net.*"%>


<html>
<head>
<title>DHL Shipment Information Feeder</title>
<!--<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">-->
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<script src="../js_client/rollovers.js" type="text/javascript"></script>
</head>


<body bgcolor=#ffffff><blockquote>
<form>
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

if (!referurl.getPath().equals("/shipment_feeder/change_password/changePassword.jsp")) {
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

if ((request.getParameter("oldPassword") == null) || (request.getParameter("oldPassword").equals("")) ||
    (request.getParameter("newPassword") == null) || (request.getParameter("newPassword").equals("")) ||
	(request.getParameter("rcPassword") == null) || (request.getParameter("rcPassword").equals(""))) {

	response.sendRedirect(common.convert_path(request.getServerPort(), (request.getRequestURL()).toString(), request.getServletPath(), "../toLogin.html"));
	if(true){return;}
}

if (!request.getParameter("newPassword").equals(request.getParameter("rcPassword"))) {
	response.sendRedirect(common.convert_path(request.getServerPort(), (request.getRequestURL()).toString(), request.getServletPath(), "../toLogin.html"));
	if(true){return;}
}

DataTypeUtil dtu = new DataTypeUtil();

if (!dtu.isValidPassword(request.getParameter("oldPassword"),6,16) || !dtu.isValidPassword(request.getParameter("newPassword"),6,16)) {
   response.sendRedirect(common.convert_path(request.getServerPort(), (request.getRequestURL()).toString(), request.getServletPath(), "../toLogin.html"));
   if(true){return;}
}


Shipment_feeder sf = new Shipment_feeder();

String old_password = sf.getOldPassword(session.getAttribute("emailadr").toString());

if (!request.getParameter("oldPassword").equals(old_password)) {
	out.println("<font size=2 face=\"Frutiger, Arial\"><b>Invalid old password!</b></font>");
   out.println("<script type=\"text/javascript\" src=\"../js/back.js\"></script>");
  	out.println("<br><br><input type=\"button\" id=\"backButton\" name=\"back\" value=\"Back\">");
} else {

String strsql = "update sf_customer set passwd = '" + request.getParameter("newPassword") + "', lst_upd_dt = current where lower(email) = lower('" + session.getAttribute("emailadr") + "')";


JdbcConn myJdbc = new JdbcConn("webdb_ds");
  
myJdbc.exeUpdateTrans(strsql);
  
myJdbc.web_releaseConn();

Properties prop=new Properties();
FileInputStream ip=new FileInputStream(System.getProperty("catalina.base")+"/webapps/config.properties");
prop.load(ip);
String MailFrom = prop.getProperty("SendFrom");
	
String em_subj = "DHL Shipment Information Feeder Change Password Notification";

//DataTypeUtil dtu = new DataTypeUtil();
//Common common = new Common();

Date now = dtu.hk_datetime();

int yr = now.getYear() + 1900;
int mth = now.getMonth() + 1;
String mth_str = "";

    if (mth < 10) {
       mth_str = "0" + mth;
    } else {
       mth_str = "" + mth;
    }

int min = now.getMinutes();
	
String min_str = "";

	if (min < 10) {
	   min_str = "0" + min;
	} else {
       min_str = "" + min;
    }
	
String req_dt = now.getDate() + " " + common.get_month_mmm(mth_str) + " " + yr + " " + now.getHours() + ":" + min_str;

String email_content = "<font face=Arial size=2>Dear Customer,<br><br>" +
	  		"Your password has been changed successfully on " + req_dt + ". Please find your new password as stated below:<br><br>" +
			"Password: " + request.getParameter("newPassword") +
			"<br><br>We strongly recommend regular changes of your password for greater security. We look forward to serving you in the near future. Thank you again for your continued support to DHL.<br><br>" +
			"Best Regards,<br>DHL Express (Hong Kong) Limited</font>";

JavaMailSend myMail = new JavaMailSend();

myMail.MailSend(MailFrom, session.getAttribute("emailadr").toString(), em_subj, email_content);

out.println("<font size=2 face=\"Frutiger, Arial\"><b>Password has been updated.</b></font>");  	

}

%>

</form>
<br><br><br>

</blockquote></body></html>
