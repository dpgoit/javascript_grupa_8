const URL = 'https://66ccb2e4a4dd3c8a71b88903.mockapi.io/todos';

function loadTasks() {
  console.log('GET');
  // return fetch(URL).then(response => response.json());
  return axios.get(URL).then(response => response.data);
}

function saveTask(task) {
  console.log('POST');
  // const options = {
  //   method: 'POST',
  //   body: JSON.stringify(task),
  //   headers: {
  //     'Content-type': 'application/json',
  //   },
  // };
  // return fetch(URL, options);

  return axios.post(URL, task);
}

function updateTask(id, status) {
  console.log(`PUT pe id:${id}, status:${status}`);
  // const options = {
  //   method: 'PUT',
  //   body: JSON.stringify({ isDone: status }),
  //   headers: {
  //     'Content-type': 'application/json',
  //   },
  // };
  // return fetch(`${URL}/${id}`, options);

  return axios.put(`${URL}/${id}`, { isDone: status });
}

function deleteTask(id) {
  // const options = {
  //   method: 'DELETE',
  // };

  // return fetch(`${URL}/${id}`, options);

  return axios.delete(`${URL}/${id}`);
}

export { loadTasks, saveTask, updateTask, deleteTask };
