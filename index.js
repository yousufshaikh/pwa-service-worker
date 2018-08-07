// Register service worker in index.js start

console.log('Index.js running');
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  }

// Register service worker in index.js end

// fetching info from github API start

function getDate() {
  console.log("testing");
  fetch("https://api.github.com/users/octocat/followers")
  .then(function(response){
    return response.json()
  })
  .then(function(followers){
    console.log(followers);
  })
  .catch(function(error){
    console.log("Not Working");
  })
}

// fetching info from github API end



