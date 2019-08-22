const quoteTag = document.querySelector('h1')
const authorTag = document.querySelector('p')
const randomTag = document.getElementById('randomize')

let data = []

const getQuote = function () {
  if (data) {
    // Get a random quote
    const randomNumber = Math.floor(Math.random() * data.length)
    const randomQuote = data[randomNumber]

    // Get a random quote and insert in on the site
    quoteTag.innerHTML = randomQuote.quote
    authorTag.innerHTML = randomQuote.author
  }
}

getQuote()

// Run getQuote on click of randomize
randomTag.addEventListener('click', function () {
  getQuote()
})
