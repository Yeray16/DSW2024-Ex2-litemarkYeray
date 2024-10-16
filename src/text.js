const Component = require('./component')
const Document = require('./document')

class Text extends Component {
  constructor (text = '') {
    super()
    this.text = text
  }

  print () {
    return this.text + Document.linebreak
  }

  countWords () {
    return this.text.split(' ').filter(word => word !== ' ').length
  }
}
module.exports = Text
