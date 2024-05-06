const userName = document.getElementById('userbox');
const title = document.getElementById('titlebox');
const content = document.getElementById('contentbox');
const submit = document.getElementById('submitbtn');

function saveBlog () {
    const key = localStorage.getItem('totalPost'); //saves post to local storage

    let totalPost = 0;
    if(key === null) {
      totalPost = 1;
    } else {
      totalPost = parseInt(key) + 1; //increase the counter on the number of post
    } 

    localStorage.setItem('totalPost', totalPost);

    const post = {
      userName: userName.value.trim(),
      title: title.value.trim(),
      content: content.value.trim(),
    };

    localStorage.setItem(totalPost, JSON.stringify(post)); //the actual values that are stored in local storage
  }

  function blogPage () {
  }

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    if(validateForm()) {
      saveBlog(); //saves blog information before page loads
      window.location.href = 'blog.html'; //loads blog html when "submit" is clicked
    }
  });
});

function validateForm() { //function that sends an alert that nothing in entered in text fields
  const userName = document.getElementById('userbox').value.trim();
  const title = document.getElementById('titlebox').value.trim();
  const content = document.getElementById('contentbox').value.trim();

  if (userName === "") {
      alert("Please enter your username.");
      return false;
  }

  if (title === "") {
      alert("Please enter a title.");
      return false;
  }

  if (content === "") {
      alert("Please enter the content.");
      return false;
  }
  return true;
}
