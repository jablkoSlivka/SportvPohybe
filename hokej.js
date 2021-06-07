var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "c2c582d6ac14b8db588078ed0945b515");
myHeaders.append("x-rapidapi-host", "v1.hockey.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://v1.hockey.api-sports.io/{endpoint}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  