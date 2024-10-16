class Document {
  #author = 'Anónimo'
  #date
  static linebreak = '\n'
  constructor (title, author = 'Anónimo', linebreak) {
    this.title = title
    this.author = author
    this.linebreak = linebreak
  }

  get author () {
    return this.#author
  }

  set author (author) {
    if (author.length > 3 && author.charAt(0) !== ' ' && author.charAt(author.length - 1) !== ' ') this.#author = author
  }

  get date () {
    return this.#date
  }

  set date (date) {
    this.#date = new Intl.DateTimeFormat('es-Es', {
      dateStyle: 'full'
    }).format(new Date(date))
  }

  print () {
    return `Título: ${this.title}` + `Autor: ${this.author}Fecha: ${this.#date}`
  }
}
module.exports = Document
