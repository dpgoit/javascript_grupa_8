function save(key, value) {
  try {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
  } catch (error) {}
}

function load(key) {
  try {
    const data = localStorage.getItem(key);
    // if (data === null) throw new Error('Valoarea nu exista in localStorage');
    return data === null ? undefined : JSON.parse(data);
  } catch (error) {
    console.error(error);
  }
}

export { save, load };
