<HTML>
<head>
<title>DHL Waybill Printing</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<SCRIPT LANGUAGE="javascript" SRC="js_client/formCheck.js"></SCRIPT>

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

out.println("<body onload=\"javascript:nextpage('index.html',true);\">");

%>

</body>

</HTML>
