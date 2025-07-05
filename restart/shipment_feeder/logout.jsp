<HTML>
<head>
<title>DHL Shipment Information Feeder</title>
<!--<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">-->
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<SCRIPT LANGUAGE="javascript" SRC="js_client/formCheck.js"></SCRIPT>
<script src="js/logout.js" type="text/javascript"></script>

<%

session.removeAttribute("emailadr");
session.removeAttribute("grp_id");
session.removeAttribute("clientID");

session.removeAttribute("param");
session.removeAttribute("awb_copy");
session.removeAttribute("awb_paper_ty");
session.removeAttribute("awb_printer");
session.removeAttribute("inv_copy");
session.removeAttribute("inv_printer");
session.removeAttribute("default_printer");
session.removeAttribute("cur_awb_copy");
session.removeAttribute("cur_inv_copy");
session.removeAttribute("cur_rec_id");
session.removeAttribute("ttl_rec");
session.removeAttribute("success_rec");
session.removeAttribute("fail_rec");
session.removeAttribute("fail_rec_id");
session.removeAttribute("pagefrom");
session.removeAttribute("rec_id_list");
session.removeAttribute("cur_index");
session.removeAttribute("rec_count");
session.removeAttribute("email_tmpl_list");

session.removeAttribute("contact_name");
session.removeAttribute("logo_filename");
session.removeAttribute("default_charset");
session.removeAttribute("opt_charset");
session.removeAttribute("default_sub_grp_id");
session.removeAttribute("opt_sub_grp");
session.removeAttribute("sub_grp_id");


%>


<body><script src="js/logout.js" type="text/javascript"></script></body>

</HTML>
