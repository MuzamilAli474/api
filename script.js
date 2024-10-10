const loginbtn=document.getElementById("loginbtn")
const inputemail=document.getElementById("email")
const inputphone=document.getElementById("phone")
const loginform=document.getElementById("login-form")

if(loginbtn){
    loginbtn.addEventListener('click', function () {

const email=inputemail.value;
console.log(email);
const phone=inputphone.value;
console.log(phone);
// Fetch data using promises
fetch('https://jsonplaceholder.typicode.com/users')

  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    const usersdetail = data.find(user => user.email === email && user.phone === phone);

    if (usersdetail) {
        window.location.href="http://127.0.0.1:5500/post.html"
    //   console.log(usersdetail);
    alert("User logged in successfully!")
    } else {
        alert("Login failed: Incorrect email or phone number");
    }
  })
  .catch(function(error) {    
  });
 



});

}
//  post kaly
 
fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    const postsContainer = document.getElementById('posts-container');

    data.forEach(function(post) {
        // Create a new div for each post
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        // Create a title element for the post
        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;

        // Create a body element for the post
        const postBody = document.createElement('p');
        postBody.textContent = post.body;

        // Like and comment section
        const likeCommentSection = document.createElement('div');
        likeCommentSection.classList.add('like-comment');

        // Like button
        const likeButton = document.createElement('button');
        likeButton.textContent = 'Like';
        let likeCount = 0; // initial value like ki
        let liked = false; // check post in like or not
        const likeDisplay = document.createElement('span');
        likeDisplay.textContent = ` ${likeCount}`;

        // like button functionalty perform
        likeButton.addEventListener('click', function() {
            if (!liked) {
                likeCount++;
                likeButton.textContent = 'Dislike'; // agr liked hai to dislike show kary button k text par
            } else {
                likeCount--;
                likeButton.textContent = 'Like'; // agr dislike hai to show kary like
            }
            liked = !liked; // change kary like or dislike 
            likeDisplay.textContent = `Likes: ${likeCount}`;
        });

        // coomment input or comment button bana hay
        const commentBox = document.createElement('textarea');
        commentBox.placeholder = 'Write a comment...';
        const commentButton = document.createElement('button');
        commentButton.textContent = 'Comment';

      
        //comment section ko dispkly ki hay comment ma 
        const commentsSection = document.createElement('div');
        commentsSection.classList.add('comments-section');

        commentButton.addEventListener('click', function() {
            const commentText = commentBox.value;
            if (commentText.trim()) {
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                commentDiv.textContent = commentText;
                commentsSection.appendChild(commentDiv);
                commentBox.value = ''; // clear  ki comment karna ka bad ma
            }
        });

       
        // like or comment ko append ki hay elements ma
        likeCommentSection.appendChild(likeButton);
        likeCommentSection.appendChild(likeDisplay);
        likeCommentSection.appendChild(commentBox);
        likeCommentSection.appendChild(commentButton);

       
        // is ma ma na title body or like/comment ko post ke dive ma append ki hay
        postDiv.appendChild(postTitle);
        postDiv.appendChild(postBody);
        postDiv.appendChild(likeCommentSection);
        postDiv.appendChild(commentsSection);

         
        // append ki hay post dive ko post container ma 
        postsContainer.appendChild(postDiv);
    });
})
.catch(function(error) {    
    console.error('Error fetching posts:', error);
});




 
