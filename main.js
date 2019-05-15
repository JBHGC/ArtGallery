class Classic {
  constructor(art_url) {
    this.frame = "black"
    if (art_url !== "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg") {
      this.art_url = art_url
    } else {
      this.art_url = "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
      }
  }
  render() {
    let img = document.createElement('img')
    img.setAttribute('src', `${this.art_url}`)
    img.setAttribute('style', `border: 1px solid ${this.frame}`)
    img.setAttribute('width', '10%')
    document.body.appendChild(img)
  }
}

class Memes extends Classic {
  constructor(art_url) {
    super(art_url)
      this.frame = "blue"
      if (art_url !== "https://ih0.redbubble.net/image.477822164.3748/ap,550x550,12x12,1,transparent,t.u1.png") {
        this.art_url = art_url
      } else {
        this.art_url = "https://ih0.redbubble.net/image.477822164.3748/ap,550x550,12x12,1,transparent,t.u1.png"
        }
    }
  }


var art1 = new Classic('http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg')
art1.render()
var memes1 = new Memes('https://ih0.redbubble.net/image.477822164.3748/ap,550x550,12x12,1,transparent,t.u1.png')
memes1.render()
// mona = new Classic()
//  ALL TESTING STUFF
// mona.render()
