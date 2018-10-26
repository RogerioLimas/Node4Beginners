const axios = require('axios');

let username = 'andrebassi';

axios.get('http://api.github.com/users/' + username).then((res) => {
  console.log(res.data.location);
  
}).catch((err) => {
  console.error(err);
});

