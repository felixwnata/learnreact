const React = require("react");

const lst = {};
module.exports = Currency => {
  fetch("https://exchangeratesapi.io/api/latest").then(res => {
    this.setState({ lst: res.json() });
    return lst;
  });
};
