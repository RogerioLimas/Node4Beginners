const WS = new WebSocket('ws://localhost:3232');

function displayTitle(title) {
  document.querySelector('h1').innerHTML = title;
}

document.forms[0].onsubmit = () => {
  const input = document.getElementById('message');
  WS.send(input.value);
};

WS.onmessage = (payload) => {
  const input = document.getElementById('messages');
  input.innerText += `${payload.data}\n`;
  // console.log(payload);
};

WS.onopen = () => {
  displayTitle('CONNECTION OPENNED');
  console.log('CONNECTION OPENNED');
};

WS.onclose = () => {
  displayTitle('CONNECTION CLOSED');
  console.log('CONNECTION CLOSED');
};
