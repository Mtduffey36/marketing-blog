const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');
const userName = document.getElementById('userbox');
const title = document.getElementById('titlebox');
const content = document.getElementById('contentbox');

const submit = document.getElementById('submitbtn');

let mode = 'light'
//darkmode function line 11-19
themeSwitcher.addEventListener('click', function () {
    if (mode === 'light') {
      mode = 'dark';
      container.setAttribute('class', 'dark');
    } else {
      mode = 'light';
      container.setAttribute('class', 'light');
    }
  });
//function for saving post in local storage, and counting said post. line 21-44
  function saveBlog () {
    const key = localStorage.getItem('totalPost');

    let totalPost = 0;
    if(key === null) {
      totalPost = 1;
    } else {
      totalPost = parseInt(key) + 1;
    } 

    localStorage.setItem('totalPost', totalPost);

    const post = {
      userName: userName.value.trim(),
      title: title.value.trim(),
      content: content.value.trim(),
    };

    localStorage.setItem(totalPost, JSON.stringify(post));
  }

  function blogPage () {
  }

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if(validateForm()) {
      saveBlog();
      window.location.href = 'blog.html';
    }
  });
});
//check for validation. line 55-76
function validateForm() {
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
