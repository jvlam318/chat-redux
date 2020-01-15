// TODO: add and export your own actions
export function fetchMessages(channel) {
  // TODO: Api call! For now, simulate a DB
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());
  return {
    type: 'FETCH_MESSAGES',
    payload: promise
  }
}

export function createMessage(channel, author, content) {
  const body = { author, content };
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());

  return {
    type: 'CREATE_MESSAGE',
    payload: promise
  };
}

export function selectChannel(channel) {
  return {
    type: 'CHANNEL_SELECTED',
    payload: channel
  };
}
