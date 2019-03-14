module.exports = {
  formatNum: (num) => {
    return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}