const Component = require('./component')

class Container extends Component {
  #components = []

  getComponents () {
    return this.#components
  }

  addComponents (...component) {
    for (let i = 0; i < component.length; i++) {
      const comp = component[i]
      if (comp instanceof Component) {
        this.#components.push(comp)
      }
    }
  }

  countWords () {
    if (this.#components.length === 0) {
      return super.countWords()
    }
  }

  print () {
    if (this.#components.length === 0) {
      return super.print()
    }
  }
}
module.exports = Container
