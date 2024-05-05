const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');
const userName = document.getElementById('userbox');
const title = document.getElementById('titlebox');
const content = document.getElementById('contentbox');
// const userName = document.querySelector('userbox');
// const title = document.querySelector('titlebox');
// const content = document.querySelector('contentbox');
let mode = 'dark'

themeSwitcher.addEventListener('click', function () {
    if (mode === 'dark') {
      mode = 'light';
      container.setAttribute('class', 'light');
    } else {
      mode = 'dark';
      container.setAttribute('class', 'dark');
    }
  });

  themeSwitcher.addEventListener('click', function() {
  })

// this is not working atm. 05/04/2024 11:00pm
  document.getElementById('submitbtn').addEventListener('click', function() {
    function saveBlog () {
      const post = {
        userName: userName.value.trim(),
        title: title.value.trim(),
        content: content.value.trim(),
      };
      localStorage.setItem('post', JSON.stringify(post));
      console.log(post);
    }
  });