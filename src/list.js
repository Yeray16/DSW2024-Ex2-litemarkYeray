const Container = require('./container')
const Text = require('./text')

class List extends Container {
  constructor (bullet = '') {
    super()
    this.bullet = bullet
  }

  addComponents (...component) {
    for (let i = 0; i < component.length; i++) {
      const comp = component[i]
      if (comp instanceof Text) {
        super.getComponents().push(comp)
      }
    }
  }
}
module.exports = List
