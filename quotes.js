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
      quoteTag.innerHTML = jsonData.quote
      authorTag.innerHTML = jsonData.author
    })
}

// Run getQuote on click of randomize
randomTag.addEventListener('click', function () {
  getQuote()
})
