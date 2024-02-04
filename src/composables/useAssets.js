// export default function useAssets(asset) {
//     // const importPath = asset.slice()
//   const assets = import.meta.glob('/assets/*/*/*/*/*', {eager: true});
//   console.log(asset)
//   console.log(assets)

//   const getAssetUrl = () => {
//    if (assets[asset]) {
//     console.log(asset)
//     console.log(assets)
//     console.log(assets[asset])
//     console.log(assets[asset].default)
//      return assets[asset].default
//    }
//   }

//   return getAssetUrl()
// }

export default function useAsset(path) {
  const assets = import.meta.glob("~/assets/**/*", {
    eager: true,
    import: "default",
  });
  // @ts-expect-error: wrong type info
  return assets["/assets/" + path];
}
