export default function () {
  const isProduction = useState("isProduction", () => false);
  const webViewJSBridgeData = useState("webViewJSBridgeData", () => "");
  const queryStringData = useState("queryStringData", () => "");
  const initParamData = useState("initParamData", () => "");
  const setLoading = useState("setLoading", () => false);
}
