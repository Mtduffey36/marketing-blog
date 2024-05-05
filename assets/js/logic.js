const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');
const userName = document.getElementById('userbox');
const title = document.getElementById('titlebox');
const content = document.getElementById('contentbox');
const submit = document.getElementById('submitbtn');

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

  function saveBlog () {
    const post = {
      userName: userName.value.trim(),
      title: title.value.trim(),
      content: content.value.trim(),
    };
    localStorage.setItem('post', JSON.stringify(post));
  }

  submit.addEventListener('click', function () {
    saveBlog();
  });


  

