class Classic {
  constructor(art_url) {
    this.frame = "black-border"
    if (art_url !== "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg") {
      this.art_url = art_url
    } else {
      this.art_url = "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
      }
  }
  render() {
    let img = document.createElement('img')
    img.setAttribute('src', `${this.art_url}`)
    img.setAttribute('border', `1px ${this.frame}`)
    img.setAttribute('width', '10%')
    document.body.appendChild(img)
  }
}

class Memes {
  constructor() {
    
  }
}


var art1 = new Classic('http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg')
art1.render()
// mona = new Classic()
//  ALL TESTING STUFF
// mona.render()
