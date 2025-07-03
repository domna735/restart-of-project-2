<%@ page import="hkapps.shipment_feeder.*"%>
<%@ page import="com.hkapps.util.*"%>
<%@ page import="java.net.URLEncoder"%>
<%@ page import="java.util.*"%>
<%@ page import="java.lang.*"%>
<%@ page import="java.net.*"%>
<%@ page import="java.io.*" %>

<html>
<head>
<title>DHL Shipment Information Feeder</title>
<!--<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">-->
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">

</head>

<body bgcolor=#ffffff><blockquote>
<script type="text/javascript" src="js/back.js"></script>

<form>


<%
String referpage = request.getHeader("referer");
Common common = new Common();
// reCAPTCHA 驗證
if ((request.getParameter("g-recaptcha-response") == null) || (request.getParameter("g-recaptcha-response").equals(""))) {
	response.sendRedirect(common.convert_path(request.getServerPort(), (request.getRequestURL()).toString(), request.getServletPath(), "index.html"));
	if(true){return;}
} else {
	try {
		Curl curl = new Curl();
		boolean chk_result = false;
		Properties prop=new Properties();
		FileInputStream ip=new FileInputStream(System.getProperty("catalina.base")+"/webapps/config.properties");
		prop.load(ip);
		String captcha_secretKey = prop.getProperty("captcha_secretKey_v3");
		chk_result = curl.chk_captcha(captcha_secretKey, request.getParameter("g-recaptcha-response"));
		if (!chk_result) {
			response.sendRedirect(common.convert_path(request.getServerPort(), (request.getRequestURL()).toString(), request.getServletPath(), "index.html"));
			if(true){return;}
		}
	} catch(Exception e) {
		response.sendRedirect(common.convert_path(request.getServerPort(), (request.getRequestURL()).toString(), request.getServletPath(), "index.html"));
		if(true){return;}
	}
}

// ...existing code...

URL referurl = new URL(referpage);
//if (!(referpage.substring(referpage.length()-26,referpage.length()).equals("shipment_feeder/login.html"))) {
if (!referurl.getPath().equals("/shipment_feeder/login.html") && !referurl.getPath().equals("/shipment_feeder/login_ip.html")) {
   response.sendRedirect(common.convert_path(request.getServerPort(), (request.getRequestURL()).toString(), request.getServletPath(), "index.html"));
   if(true){return;}
}

if (referurl.getPath().equals("/shipment_feeder/login.html")) {
	
	if ((request.getParameter("emailadr") == null) || (request.getParameter("emailadr").equals("")) || 
		(request.getParameter("passwd") == null) || (request.getParameter("passwd").equals(""))) {
	   response.sendRedirect(common.convert_path(request.getServerPort(), (request.getRequestURL()).toString(), request.getServletPath(), "index.html"));
	   if(true){return;}
	}

	DataTypeUtil dtu = new DataTypeUtil();

	if ((!dtu.isValidEmail(request.getParameter("emailadr"),50)) || (!dtu.isValidPassword(request.getParameter("passwd"),6,16))) {
	   response.sendRedirect(common.convert_path(request.getServerPort(), (request.getRequestURL()).toString(), request.getServletPath(), "index.html"));
	   if(true){return;}
	}

}

if (referurl.getPath().equals("/shipment_feeder/login_ip.html")) {
	
	if ((request.getParameter("emailadr") == null) || (request.getParameter("emailadr").equals("")) || 
		(request.getParameter("passwd") == null) || (!request.getParameter("passwd").equals(""))) {
	   response.sendRedirect(common.convert_path(request.getServerPort(), (request.getRequestURL()).toString(), request.getServletPath(), "index.html"));
	   if(true){return;}
	}

	DataTypeUtil dtu = new DataTypeUtil();

	if ((!dtu.isAlphaNumeric(request.getParameter("emailadr"))) || (request.getParameter("emailadr").length() != 4)) {
	   response.sendRedirect(common.convert_path(request.getServerPort(), (request.getRequestURL()).toString(), request.getServletPath(), "index.html"));
	   if(true){return;}
	}

}



Shipment_feeder sf = new Shipment_feeder();
//out.println(sf.overAttempt(10, request.getParameter("emailadr")));
if (sf.overAttempt(10, request.getParameter("emailadr"))) {
   out.println("<font size=2 face=\"Frutiger, Arial\"><b>Please contact your sales representative.</b></font>");
} else {

  Customer cust = sf.getCust(request.getParameter("emailadr"), request.getParameter("passwd"));
	JdbcConn myJdbc = new JdbcConn("webdb_ds");
	String sql_str="";

  if (cust.grp_id == null) {
	sql_str = "insert into sf_customer_login values ('" + request.getParameter("emailadr") + "','" + request.getParameter("passwd") + "',current)";
	myJdbc.exeUpdateTrans(sql_str);

	if (!request.getParameter("passwd").equals("")) {
	out.println("<font size=2 face=\"Frutiger, Arial\"><b>Invalid login email or password!</b></font>");
	} else {
		out.println("<font size=2 face=\"Frutiger, Arial\"><b>Invalid authentication code!</b></font>");
	}
	out.println("<br><br><input type=\"button\" name=\"back\" value=\"Back\" id=\"backButton\">");
	
  } else {
	sql_str = "delete from sf_customer_login where email = '" + request.getParameter("emailadr") + "'";
	myJdbc.exeUpdateTrans(sql_str);

	  session.setAttribute("emailadr", request.getParameter("emailadr"));
	  session.setAttribute("grp_id", cust.grp_id);
	  
	  session.setAttribute("contact_name", cust.contact_name);
	  session.setAttribute("logo_filename", cust.logo_filename);
	  session.setAttribute("default_charset", cust.default_charset);
	  session.setAttribute("opt_charset", cust.opt_charset);
	  
	  session.setAttribute("default_sub_grp_id", cust.default_sub_grp_id);
	  session.setAttribute("opt_sub_grp", cust.opt_sub_grp);
	  
	  String df_menu = sf.getDefaultMenu(cust.grp_id);

	  
	  if (df_menu.equals("ip")) {
		//response.sendRedirect("input_print/toMain.jsp");
		response.sendRedirect(common.convert_path(request.getServerPort(), (request.getRequestURL()).toString(), request.getServletPath(), "input_print/toMain.jsp"));
		return;
	  } else {
		if (df_menu.equals("f2")) {
		  //response.sendRedirect("feed_print2/toMain.jsp");
		  response.sendRedirect(common.convert_path(request.getServerPort(), (request.getRequestURL()).toString(), request.getServletPath(), "feed_print2/toMain.jsp"));
		  return;
		} 
	  }
	  
  }
}
   
%>
</form>
</blockquote></body></html>
