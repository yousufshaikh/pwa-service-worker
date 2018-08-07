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

var url = "https://api.github.com/users/octocat/followers";


function getDate() {
  console.log("testing");
  fetch(url)
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

// var networkDataReceived = false;



// function getDate(){
//   console.log("get data testing");

  // fetch fresh data

  // var networkUpdate = fetch(url).then(function(response){
  //   return response.json();
  // }).then(function(data){
  //   networkDataReceived = true;
  //   console.log(data);
  // });

  // fetch cached data
//   caches.match(url).then(function(response) {
//   if (!response) throw Error("No data");
//   return response.json();
//   }).then(function(data) {
//   // don't overwrite newer network data
//   if (!networkDataReceived) {
//     console.log(data);
//   }
// })
// }

// fetching info from github API end




