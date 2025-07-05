function validateForm() {	

    isValid = false;

    if (document.changePassword.oldPassword.value=="") {
    	alert('Old password is required.');
    } else if (!isPassword(document.changePassword.oldPassword.value)) {
    	alert('Old password is invalid.');
    } else if (document.changePassword.newPassword.value=="") {
    	alert('New password is required.');	
    } else if (!isPassword(document.changePassword.newPassword.value)) {
    	alert('New password is invalid.');
    } else if (document.changePassword.rcPassword.value=="") {
    	alert('New password is required.');
    } else if (!isPassword(document.changePassword.rcPassword.value)) {
    	alert('New password is invalid.');
    } else if (document.changePassword.rcPassword.value != document.changePassword.newPassword.value) {
    	alert('Please input the new password again.');
	} else if (document.changePassword.oldPassword.value == document.changePassword.newPassword.value) {
    	alert('New password is same as the old password. Please input the new password again.');
    } else {
    	isValid = true;
    }
    return isValid;
}

window.onload=function() {
    document.getElementById("changePasswordForm").addEventListener("submit", function() {
        event.preventDefault();
        if (validateForm()) {
            document.getElementById("changePasswordForm").submit();
        }
    });
}
