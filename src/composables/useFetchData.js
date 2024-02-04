import CryptoJS from "crypto-js";

export const useFetchData = () => {
  const config = useRuntimeConfig();
  const loading = useState("setLoading");
  const errMessage = useI18n().t("common.txt_system_busy");

  // console.log(useI18n().t("txt_system_busy"));

  // -------------------------------- H5 sign --------------------------------
  const b = (timestamp, ip, uuid) => {
    // console.log(timestamp, ip, uuid);
    return (
      timestamp + "sa" + "H5" + ip + uuid + "1457929724SJHKJ1590405016hytech"
    );
  };

  // -------------------------------- H5 encryption --------------------------------
  const useSign = (value) => {
    // var crypto = require("crypto-js");

    return CryptoJS.MD5(value).toString();
  };

  // -------------------------------- get language --------------------------------
  const getLanguage = (lang) => {
    let language = "en_US";
    switch (lang) {
      case "zh":
        language = "zh_CN";
        break;
      case "en":
        language = "en_US";
        break;
      case "fr":
        language = "fr_FR";
        break;
      case "ko":
        language = "ko_KR";
        break;
      case "ja":
        language = "ja_JP";
        break;
    }
    return language;
  };

  // -------------------------------- H5 fetch api --------------------------------
  const callFetchApiPost = async (useStateKey = null, apiData) => {
    const initParamData = useState("initParamData").value;
    let language = getLanguage(initParamData.lang);
    const timestamp = Date.now();
    loading.value = true;

    let formData = "";

    if (apiData?.formDataType) {
      formData = new FormData();

      if (apiData) {
        Object.keys(apiData.data).map((v, i) => {
          formData.append(v, apiData.data[v]);
          // console.log(apiData.data[v]);
        });
      }
    } else {
      formData = JSON.stringify(apiData.data);
    }

    const apiUrl = apiData.customUrl
      ? apiData.customUrl
      : `${config.public.API_BASE_URL}${apiData.url}`;

    const res = await fetch(apiUrl, {
      method: apiData.method,
      headers: {
        apiVer: apiData.headers?.apiVer ? apiData.headers.apiVer : "v1",
        language: language,
        sign: useSign(
          b(timestamp, "1.1.1.1", `f16ae79d-8964-48df-94e2-b8dj372300ae`)
        ).toLocaleUpperCase(),
        ts: timestamp,
        product: "sa",
        systemType: "h5",
        uuid: `f16ae79d-8964-48df-94e2-b8dj372300ae`,
        model: "H5",
        IP: "1.1.1.1",
        token: initParamData.userToken || initParamData.token,
        ...(apiData?.withdrawal ? { userToken: apiData.data.userToken } : {}),
        ...(apiData?.formDataType
          ? {}
          : { "Content-Type": "application/json" }),
      },
      ...(apiData.data ? { body: formData } : {}),
    })
      .then((response) => {
        loading.value = false;
        return response.json();
      })
      .catch((res) => {
        loading.value = false;
        console.log(res);
        openInfo(errMessage);
      });

    // const callingAPI = useState(`${useStateKey}`, () => res);
    console.log(res);

    return res;
  };

  // -------------------------------- H5 fetch get api --------------------------------
  const callFetchApiGet = async (useStateKey = null, apiData) => {
    const initParamData = useState("initParamData").value;
    const timestamp = Date.now();
    let language = getLanguage(initParamData.lang);

    loading.value = true;
    console.log("callFetchApiGet");
    // console.log(apiData);

    const queryString = new URLSearchParams(apiData.data).toString();

    const res = await fetch(
      `${config.public.API_BASE_URL}${apiData.url}?${queryString}`,
      {
        method: apiData.method,
        headers: {
          apiVer: apiData.headers?.apiVer ? apiData.headers.apiVer : "v1",
          language: language,
          sign: useSign(
            b(timestamp, "1.1.1.1", `f16ae79d-8964-48df-94e2-b8dj372300ae`)
          ).toLocaleUpperCase(),
          ts: timestamp,
          product: "sa",
          systemType: "h5",
          uuid: `f16ae79d-8964-48df-94e2-b8dj372300ae`,
          model: "H5",
          IP: "1.1.1.1",
          token: initParamData.userToken || initParamData.token,
        },
      }
    )
      .then((response) => {
        // loading(false);
        loading.value = false;
        return response.json();
      })
      .catch((res) => {
        // loading(false);
        loading.value = false;
        console.log(res);
      });

    // const callingAPI = useState(`${useStateKey}`, () => res);
    // console.log(res);

    return res;
  };

  const callFetchApiUpload = async (useStateKey = null, apiData) => {};

  // -------------------------------- H5 fetch appFlyer --------------------------------
  const callFetchAppsFlyer = async (eventData) => {
    const initParamData = useState("initParamData").value;
    let language = getLanguage(initParamData.lang);
    const timestamp = Date.now();
    loading.value = true;

    if (initParamData.device) {
      let apiData = {
        method: "POST",
        url: "appsFlyerStatistic/s2s/v2",
        data: {
          appsFlyerId: initParamData.appsflyerid,
          ...(initParamData.device === "android"
            ? { advertisingId: initParamData.advertisingId }
            : { idfa: initParamData.promoteId, idfv: initParamData.uuid }),
          eventName: eventData.eventName,
          eventValue: eventData.eventValue,
          userId: initParamData.userId,
        }
      };
  
      const apiUrl = `${config.public.API_BASE_URL}${apiData.url}`;
  
      let formData = new FormData();
  
      if (apiData) {
        Object.keys(apiData.data).map((v, i) => {
          formData.append(v, apiData.data[v]);
          // console.log(apiData.data[v]);
        });
      }
  
      const res = await fetch(apiUrl, {
        method: apiData.method,
        headers: {
          apiVer: "v2",
          language: language,
          sign: useSign(
            b(timestamp, "1.1.1.1", `f16ae79d-8964-48df-94e2-b8dj372300ae`)
          ).toLocaleUpperCase(),
          ts: timestamp,
          product: "sa",
          systemType: "h5",
          uuid: `f16ae79d-8964-48df-94e2-b8dj372300ae`,
          model: "H5",
          IP: "1.1.1.1",
          token: initParamData.userToken || initParamData.token,
        },
        body: formData
      })
        .then((response) => {
          loading.value = false;
          return response.json();
        })
        .catch((res) => {
          loading.value = false;
          console.log(res);
        });
  
      return res;
    }
  };

  return {
    callFetchApiPost,
    callFetchApiGet,
    callFetchAppsFlyer,
  };
};
