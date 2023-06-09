async function getserviceList() {
  console.log('geserviceList')
  const response = await fetch('http://localhost:3333/api/service')
  const data = await response.json()
  
  const service = document.querySelectorAll('tr > td')

  service.forEach(td => {
    const tr = td.parentNode
    tr.remove()
  })

  const serviceListContainer = document.getElementById('service-list-container')

  data.forEach(service => {
      const newserviceTr = document.createElement('tr')
      
      newserviceTr.id = service.id
      newserviceTr.innerHTML = `
        <td>${service.service_name}</td>
        <td>${service.price}</td>
        <td>${service.duration}</td>
      `

      serviceListContainer.appendChild(newserviceTr)
  })
}

getserviceList()

const createServiceButton = document.getElementById('create-service-button')

createServiceButton.addEventListener('click', async (event) => {
  event.preventDefault()

  const service_name = document.querySelector('input[name="service_name"]').value
  const price = document.querySelector('input[name="price"]').value
  const duration = document.querySelector('input[name="duration"]').value
  await fetch('http://localhost:3333/api/service', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        service_name,
          price,
          duration
      })
  })

  await getserviceList()
})