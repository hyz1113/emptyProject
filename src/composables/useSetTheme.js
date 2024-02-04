export default function () {
  // document.documentElement.className = "asd";
  // if (process.client) {
  // 	const initParamData = useState("initParamData");

  // 	if (parseInt({ ...initParamData.value }.theme) === 1) {
  // 		// darkmode
  // 		document.documentElement.className = "dark-theme";
  // 	} else {
  // 		// lightmode
  // 		document.documentElement.className = "";
  // 	}

  // 	// console.log(document);
  // 	console.log(document.documentElement);
  // }

  const initParamData = useState("initParamData").value;
  if (parseFloat(initParamData.theme) === 1) {
    useColorMode().preference = "dark";
  } else {
    useColorMode().preference = "light";
  }

  console.log(parseFloat(initParamData.theme), useColorMode());
}
