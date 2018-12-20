function myFunction() {
  Email.send({
      SecureToken : "e56c6b69-ac7f-45dc-8dc8-173ad013234b",
      To : 'them@website.com',
      From : "you@isp.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
}
