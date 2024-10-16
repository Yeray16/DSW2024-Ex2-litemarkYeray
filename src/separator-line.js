const Component = require('./component')
const Document = require('./document')

class SeparatorLine extends Component {
  constructor (separator = '-', length = 40) {
    super()
    this.separator = separator
    this.length = length
  }

  print () {
    let acumulate = ''
    for (let i = 0; i < this.length; i++) {
      acumulate += this.separator
    }
    return acumulate + Document.linebreak
  }
}
module.exports = SeparatorLine
