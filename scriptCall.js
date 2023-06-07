async function getcallList() {
  console.log('gecallList')
  const response = await fetch('http://localhost:3333/api/call')
  const data = await response.json()
  
  const call = document.querySelectorAll('tr > td')

  call.forEach(td => {
    const tr = td.parentNode
    tr.remove()
  })

  const callListContainer = document.getElementById('call-list-container')

  data.forEach(call => {
      const newcallTr = document.createElement('tr')
      
      newcallTr.id = call.id
      newcallTr.innerHTML = `
        <td>${call.service_type}</td>
        <td>${call.animal}</td>
        <td>${call.scheduled_date}</td>
      `

      callListContainer.appendChild(newcallTr)
  })
}

getcallList()

const createcallButton = document.getElementById('create-call-button')

createcallButton.addEventListener('click', async (event) => {
  event.preventDefault()

  const service_type = document.querySelector('input[name="service-types"]').value
  const animal = document.querySelector('input[name="animal"]').value
  const scheduled_date = document.querySelector('input[name="scheduled_date"]').value
  await fetch('http://localhost:3333/api/call', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
         service_type,
         animal,
         scheduled_date
      })
  })

  await getcallList()
})