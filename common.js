const getCSS = (variavel) => {
  return getComputedStyle(document.body).getPropertyValue(variavel)
};
const tickConfig = {
  color: getCss('--primary-color'),
  size:15,
  family: getCSS('--font')
}
export{getCSS, tickConfig}
