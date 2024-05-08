const userName = document.getElementById('userbox');
const title = document.getElementById('titlebox');
const content = document.getElementById('contentbox');
const submit = document.getElementById('submitbtn');


function saveBlog () {
   const blogList = JSON.parse(localStorage.getItem("blogList"));
    
    const post = {
      userName: userName.value.trim(),
      title: title.value.trim(),
      content: content.value.trim(),
    };
  
    if(blogList === null){
        localStorage.setItem("blogList", JSON.stringify([post])); 
    } else { 
        blogList.push(post);
      
        localStorage.setItem("blogList", JSON.stringify(blogList));
    }; 
};

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
  };

  if (title === "") {
      alert("Please enter a title.");
      return false;
  };

  if (content === "") {
      alert("Please enter the content.");
      return false;
  };
  return true;
};