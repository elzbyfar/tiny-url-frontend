let result = document.getElementById('result')
// result.innerText = 'enter result here'

let longURL = document.getElementById('longURL') 
longURL.addEventListener('change', (event) => {
  longURL.value = event.target.value
})

let alias = document.getElementById('alias') 
alias.addEventListener('change', (event) => {
  alias.value = event.target.value
})

let form = document.getElementById('form')


form.addEventListener('submit', (event) => {
  event.preventDefault()
  

  fetch('http://localhost:3000/urls', {
    method: 'POST', 
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
    }, 
    body: JSON.stringify({
      long_address: longURL.value,
      short_address: 'testing', 
      alias: alias.value
    })
  })
  .then(resp => resp.json())
  .then(data => {
    result.innerText = data.short_address
  })

})