export default function () {
  const config = useRuntimeConfig();

  // from useDefaultState.js
  const isProduction = useState("isProduction");
  const queryStringData = useState("queryStringData");
  const initParamData = useState("initParamData");
  const webViewJSBridgeData = useState("webViewJSBridgeData");

  // if (config.public.APP_ENV == "PRODUCTION") {
  //   // retrieve data from android/ios
  //   isProduction.value = true;

  //   console.log("current env: " + config.public.ENV);
  //   console.log("ios and android call function");

  //   // ios and android call function
  //   // iosCallFunction / androidCallFunction

  //   console.log(webViewJSBridgeData.value);
  //   console.log(toRaw(webViewJSBridgeData.value));
  // } else {
    // retrieve data from url param (queryString)
    isProduction.value = false;
    queryStringData.value = useRoute().query;
    initParamData.value = useRoute().query;

    // console.log("current env: " + config.public.ENV);
    // console.log("current env: " + config.public.APP_ENV);
    // console.log(queryStringData.value);
    // console.log(toRaw(queryStringData.value));
  // }
  // };
}
