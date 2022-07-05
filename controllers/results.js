// Import Packages
const express = require('express')
const router = express.Router()
// Create POST controller
router.get('/results', (req, res) => {
  let results = [
    {
      title: 'JavaScript Tutorial - W3School',
      description:
        'Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, PHP, Python, Bootstrap, Java',
      url: 'https://www.w3schools.com',
      links: [
        {
          title: 'JavaScript Introduction',
          url: 'https://www.w3schools.com/js'
        },
        {
          title: 'JS Functions',
          url: 'https://www.w3schools.com/js'
        },
        {
          title: 'JavaScript Examples',
          url: 'https://www.w3schools.com/js'
        }
      ]
    },

    {
      title: 'JS tutorials',
      description:
        'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.While it is most well-known as scripting language for Web pages<br />CouchDB and AdobeAcrobat',
      url: 'developer.mozilla.org',
      links: [
        {
          title: 'JavaScript Operator',
          url: 'https://www.w3schools.com/js'
        },
        {
          title: 'JavaScript Code',
          url: 'https://www.w3schools.com/js'
        },
        {
          title: 'JavaScript Meaning',
          url: 'https://www.w3schools.com/js'
        }
      ]
    },
    {
      title: 'JavaScript-Wikipedia',
      description:
        'JavaScript often abbrevated as JS, is a programming language that conforms to ECMAScript specification. JavaScript is a high-level, often just',
      url: 'en.wikipedia.org',
      links: [
        {
          title: 'JavaScript Online',
          url: 'https://www.w3schools.com/js'
        },
        {
          title: 'JavaScript Definition',
          url: 'https://www.w3schools.com/js'
        }
      ]
    }
  ]
  res.render('results', { results })
})

// Export module
module.exports = router
