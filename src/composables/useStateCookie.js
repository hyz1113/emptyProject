// Expires in a year
const expires = new Date();
expires.setTime(expires.getTime() + 365 * 24 * 60 * 60 * 1000);

// Make cookie use state across app
export const useStateCookie = () => {
  const getCookie = (name) => {
    const cookie = useCookie(name);
    const state = cookie.value
      ? useState(name, () => cookie.value)
      : useState(name);

    watch(
      state,
      () => {
        cookie.value = state.value;
      },
      { deep: true }
    );

    return state;
  };

  const setCookie = (name, value) => {
    const cookie = useCookie(name, { expires });
    cookie.value = value;
    const state = useState(name, () => value);

    watch(
      state,
      () => {
        cookie.value = state.value;
      },
      { deep: true }
    );

    return state;
  };

  return {
    getCookie,
    setCookie,
  };
};
