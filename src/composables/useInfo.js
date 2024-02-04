export default function () {
  // const initialState = {
  // 	severity: `success`,
  // 	summary: `Info`,
  // 	detail: `content sample`,
  // 	life: 3000,
  // };
  // const openInfo = useState("openInfo", () => initialState);

  let initialState = {
    isOpenInfo: false,
    content: "",
  };
  const infoData = useState("infoData", () => initialState);
}
