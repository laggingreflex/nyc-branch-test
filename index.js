

module.exports = ({
  document = (global || window).document,
  location = (global || window).location,
} = {}) => {
  return document;
}
