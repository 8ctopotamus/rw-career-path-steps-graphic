export const helpers = {
  getStepMargin: function(i) {
    return i * 40
  },
  slugifyLabel: function(label) {
    return label.toLowerCase().replaceAll(' ', '-')
  }
}