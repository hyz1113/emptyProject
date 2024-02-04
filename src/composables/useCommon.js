export const openInfo = (content, isError) => {
  const infoData = useState("infoData");

  infoData.value = {
    isOpenInfo: true,
    content: content,
    isError: isError,
  };

  setTimeout(() => {
    infoData.value = {
      isOpenInfo: false,
      content: content,
      isError: isError,
    };
  }, 5000);
};
// import { useToast } from "primevue/usetoast";
// const toast = useToast();

// console.log(useToast());

export const openToast = (content) => {
  toast.add({
    severity: "info",
    summary: "Info",
    detail: content,
    // life: 3000,
  });
};

export const setLanguage = () => {
  const initParamData = useState("initParamData");
  // const { locale, locales, setLocale } = useI18n();
  const i18n = useI18n();

  i18n.setLocale(initParamData.value.lang);
};

export const setTheme = () => {
  const initParamData = useState("initParamData").value;
  const changeTheme = useColorMode();

  console.log(initParamData);

  if (parseFloat(initParamData.theme) === 1) {
    changeTheme.preference = "dark";
    console.log(parseFloat(initParamData.theme), changeTheme);
  } else {
    changeTheme.preference = "light";
    console.log(parseFloat(initParamData.theme), changeTheme);
  }

  // console.log(parseFloat(initParamData.theme), useColorMode().preference);

  return useColorMode().preference;
};

export const setTheme2 = () => {
  const initParamData = useState("initParamData").value;
  const changeTheme = useColorMode();

  console.log(initParamData);

  if (parseFloat(initParamData.theme) === 1) {
    changeTheme.preference = "dark";
    console.log(parseFloat(initParamData.theme), changeTheme);
  } else {
    changeTheme.preference = "light";
    console.log(parseFloat(initParamData.theme), changeTheme);
  }

  // console.log(parseFloat(initParamData.theme), useColorMode().preference);
};

export const getImagePath = (filename) => {
  const glob = import.meta.glob("~/assets/images/**", {
    eager: true,
  });

  // console.log(glob[`/assets/images/feature/deposit`]);
  // console.log(glob);

  try {
    return glob[`/assets/images/${filename}`]["default"];
  } catch (error) {
    return "";
  }
};

export const currencyFormatter = (value) => {
  if (value !== undefined) {
    return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};

export const cryptoFormatter = (value, decimal) => {
  if (value !== undefined) {
    return value.toFixed(decimal);
  }
};

export const isValueEmpty = (value) => {
  if (value != "" && value !== null && value !== undefined) {
    return false;
  } else {
    return true;
  }
};

export const checkRules = (type = null, value = null, data = null) => {
  // const isRequired = data ? data.required : null;
  // if (!value && isRequired)
  // 	// Only check is field empty when value is empty
  // 	return Promise.reject(data.message || "value is required");
  // if (value && !checkFormat(type, value)) {
  // 	// Only check format when value is not empty
  // 	return Promise.reject(`Invalid ${data.title || type}`); // Can use message title set by you, if no title set will use rules/format type in message
  // }
  // return Promise.resolve();

  console.log(type);
};

export const submitAsForm = (url, formData, method) => {

  const form = document.createElement('form');
  form.action = url; 
  form.method = method || "POST";

  for (const key in formData) {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = formData[key];
    form.appendChild(input);
  }

  document.body.appendChild(form);
  form.submit();
  
}
