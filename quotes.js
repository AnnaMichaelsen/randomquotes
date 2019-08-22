const bodyTag = document.querySelector('body')
const quoteTag = document.querySelector('h1')
const authorTag = document.querySelector('p')
const randomTag = document.getElementById('randomize')

// let data = []
//
// // Let's load in the real data
// fetch('https://api.superhi.com/api/test/quotes')
//   .then(response => response.json())
//   .then(jsonData => {
//     data = jsonData
//     getQuote()
//   })

const getQuote = function () {
//   if (data.length > 0) {
//     // Get a random quote
//     const randomNumber = Math.floor(Math.random() * data.length)
//     const randomQuote = data[randomNumber]
//
//     // Get a random quote and insert in on the site
//     quoteTag.innerHTML = randomQuote.quote
//     authorTag.innerHTML = randomQuote.author
//   }

  fetch('https://api.superhi.com/api/test/quotes/random')
    .then(response => response.json())
    .then(jsonData => {
      quoteTag.innerHTML = '&ldquo;' + jsonData.quote + '&rdquo;'
      authorTag.innerHTML = '— ' + jsonData.author

      if (jsonData.quote.lenght > 100) {
        quoteTag.classList.add('text-small')
      } else {
        quoteTag.classList.remove('text-small')
      }

      bodyTag.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 90%)`
    })
}

// Run getQuote on click of randomize
randomTag.addEventListener('click', function () {
  getQuote()
})
