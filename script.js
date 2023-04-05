<h2>Contact Form</h2>
<form action="submit-form.php" method="post" onsubmit="return validateForm()">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required><br><br>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required><br><br>

  <label for="message">Message:</label>
  <textarea id="message" name="message" required></textarea><br><br>

  <input type="submit" value="Submit">
</form>

<script>
  function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var emailRegex = /^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$/;

    if (emailRegex.test(email) && message != "") {
      alert("Form submitted successfully!");
    } else {
      alert("Please enter a valid email address and message.");
    }
  }
</script>