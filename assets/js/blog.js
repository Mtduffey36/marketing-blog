const themeSwitcher = document.querySelector('#theme-switcher')
const container = document.querySelector('.container');
let mode = 'light'
 
function displayBlogPosts() {
  
  const blogPost = document.getElementById("blogPost");
  

  const blogList = JSON.parse(localStorage.getItem("blogList"));
  
  blogList.forEach(element => {
    const child = document.createElement("div")
    const title = document.createElement("h2")
    const userName = document.createElement("h3")
    const content = document.createElement("p")

    title.innerHTML = element.title
    userName.innerHTML = element.userName
    content.innerHTML = element.content

    child.appendChild(title)
    child.appendChild(userName)
    child.appendChild(content)

    blogPost.appendChild(child)

  });

}
displayBlogPosts();

themeSwitcher.addEventListener('click', function () {
  if (mode === 'light') {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  } else {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
});