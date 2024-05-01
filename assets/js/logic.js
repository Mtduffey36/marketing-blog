const themeSwitcher = document.querySelector('#darkMode')
const container = document.querySelector('.container');
console.log(container)
let mode = 'dark'

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
    // If mode is dark, apply light background
    if (mode === 'dark') {
      mode = 'light';
      container.setAttribute('class', 'light');

    }
    // If mode is light, apply dark background
    else {
      mode = 'dark';
      container.setAttribute('class', 'dark');

    }
  });
  
  
  themeSwitcher.addEventListener('click', function() {
    
  }
  )