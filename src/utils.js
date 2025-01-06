// export const getImageUrl = (path) => {
//   const url = new URL(`/assets/${path}`, import.meta.url).href;
//   console.log(url);
// };
// src/utils.js
export const getImageUrl = (path) => {
  // Since your assets are at the root of your project, manually construct the URL
  const url = `${window.location.origin}/assets/${path}`;
  console.log(url);
};
