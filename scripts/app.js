 function setUserNameClickListener (e) {
    dataLayer.push({
        event: "username_set",
        username: document.getElementById("username").value
    })
 };

function newsletterSignupClickListener (e) {
    dataLayer.push({
        event: "signed_up",
        email: document.getElementById("email").value
    })
 };

 

 window.onload = function() {
    document.getElementById("btnSetUsername").addEventListener("click", setUserNameClickListener);
    document.getElementById("btnNewsletterSignup").addEventListener("click", newsletterSignupClickListener);
 };