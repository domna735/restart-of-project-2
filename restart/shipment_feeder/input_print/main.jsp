<%@ page import="hkapps.shipment_feeder.*"%>
<%@ page import="com.hkapps.util.*"%>
<%@ page import="java.util.*"%>
<%@ page import="java.net.*"%>

<html>
<head>
<title>DHL Shipment Information Feeder</title>

<!--<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">-->
<SCRIPT LANGUAGE="javascript" SRC="../js_client/formCheck.js"></SCRIPT>
<script src="../js/input_print/main.js" type="type/javascript"></script>

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

if (!referurl.getPath().equals("/shipment_feeder/input_print/ip_DefPage.jsp")) {
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



//get customer shipment origin
Shipment_feeder sf = new Shipment_feeder();

String shpt_orgn = sf.getShptOrgn(session.getAttribute("emailadr").toString());

//PrintSetup printsetup = sf.getPrintSetup(request.getParameter("grp_id"));
PrintSetup printsetup = sf.getPrintSetup(session.getAttribute("default_sub_grp_id").toString());


String show_awb_paper_ty = printsetup.show_awb_paper_ty;
String awb_paper_ty = printsetup.awb_paper_ty;


%>

</head>

<body>
<blockquote>
<font face="Arial" size=2>

<%

if (session.getAttribute("default_sub_grp_id").equals("TST1")) {
  //out.println("<FORM name='main' action='../../cgi-bin_t/hkapp/csender.cgi' METHOD='POST' target='Waybill'>");
  out.println("<FORM name='main' id='mainForm' action='../../cgi-bin/hkapp/csender.cgi' METHOD='POST' target='Waybill'>");
} else {
  out.println("<FORM name='main' id='mainForm' action='../../cgi-bin/hkapp/csender.cgi' METHOD='POST' target='Waybill'>");
}


%>

<table>
<tr>
<td><font face="Arial" size=2>Print Waybill on </td>
<td><font face="Arial" size=2>
<%
if (show_awb_paper_ty.equals("Y")) {
 if (awb_paper_ty.equals("A")) {
   out.println("<input type=radio name=paper_ty value=\"A\" checked>A4 paper<br>");
   out.println("<input type=radio name=paper_ty value=\"L\">Label");
 } else {
   out.println("<input type=radio name=paper_ty value=\"A\">A4 paper<br>");
   out.println("<input type=radio name=paper_ty value=\"L\" checked>Label");
 }
 
 out.println("</td></tr><tr><td></td><td><br><input type=\"submit\" name=\"submit\" value=\"  Go  \"></td></tr>");
} else {
   if (awb_paper_ty.equals("A")) {
     out.println("A4 paper.");
     out.println("<input type=hidden name=paper_ty value=\"A\">");
   } else {
     out.println("Label.");
     out.println("<input type=hidden name=paper_ty value=\"L\">");
   }
 out.println("</td></tr><tr><td><br><input type=\"submit\" name=\"submit\" value=\"  Go  \"></td><td></td></tr>");  
}

%>

</table>

<input type="hidden" name="origin" value="<%=shpt_orgn%>">
<input type="hidden" name="sub_grp_id" value="<%=session.getAttribute("default_sub_grp_id")%>">

</form>

</font>
</blockquote>
</body>

</html>
