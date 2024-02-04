// ------------------------------------ APP-H5交互 setup ------------------------------------
const setupWebViewJavascriptBridge = (callback) => {
  if (window.WebViewJavascriptBridge) {
    return callback(WebViewJavascriptBridge);
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }
  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement("iframe");
  WVJBIframe.style.display = "none";
  WVJBIframe.src = "https://__bridge_loaded__";
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function () {
    document.documentElement.removeChild(WVJBIframe);
  }, 0);
};

const sendMessage = (data) => {
  if (process.client) {
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      setupWebViewJavascriptBridge(function (bridge) {
        bridge.callHandler(
          "sendEvent",
          data,
          function responseCallback(responseData) {
            // <!-- 回调处理 -->
          }
        );
      });
    } else {
      vfx_android.webEvent(JSON.stringify(data));
    }
  }
};

// ------------------------------------ setup function that ios can call ------------------------------------
// const iosCallFunction = () => {
// console.log("iosCallFunction");
// const webViewJSBridgeData = useState("webViewJSBridgeData");
if (process.client) {
  console.log("iosCallFunction");
  const webViewJSBridgeData = useState("webViewJSBridgeData");

  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    setupWebViewJavascriptBridge(function (bridge) {
      bridge.registerHandler(
        "jsonRequestData",
        function (data, responseCallback) {
          webViewJSBridgeData.value = data;
          responseCallback(data);
        }
      );
    });
  }
}
// };

// ------------------------------------ setup function that android can call ------------------------------------
export const androidCallFunction = (functionName, data) => {
  const webViewJSBridgeData = useState("webViewJSBridgeData");

  console.log("androidCallFunction");
  switch (functionName) {
    case "jsonRequestData":
      webViewJSBridgeData.value = data;
      break;
  }
  responseCallback(data);
};

export const redirect = (code) => {
  console.log("【redirect】: " + code);
  const json = { code: code };
  sendMessage(json);
};

export const redirectUrl = (code, url) => {
  console.log("【redirect】: " + code + "【URL】: " + url);
  const json = { code: code, url: url };
  sendMessage(json);
};
