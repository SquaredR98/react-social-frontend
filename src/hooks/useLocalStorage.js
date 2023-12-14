const useLocalStorage = () => {
  try {
    const getItem = (key) => window.localStorage.getItem(key);
    const setItem = (key, value) => window.localStorage.setItem(key, value);
    const removeItem = (key) => window.localStorage.removeItem(key);
    return [getItem, setItem, removeItem];
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export default useLocalStorage;
