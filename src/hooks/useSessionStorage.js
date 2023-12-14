const useSessionStorage = () => {
  try {
    const getSessionData = (key) => window.sessionStorage.getItem(key);
    const setSessionData = (key, value) =>
      window.sessionStorage.setItem(key, value);
    const deleteSessionData = (key) => window.localStorage.removeItem(key);
    return [getSessionData, setSessionData, deleteSessionData];
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export default useSessionStorage;