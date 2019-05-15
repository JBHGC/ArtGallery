class Classic {
  constructor() {
    this.frame = "black-border"
    this.art_url = "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"

  }

  render() {
    let img = document.createElement('img')
    img.setAttribute('src', `${this.art_url}`)
    img.setAttribute('border', `1px ${this.frame}`)
    // img.setAttribute('border', this)
    document.body.appendChild(img)
  }
}

mona = new Classic()

mona.render()
