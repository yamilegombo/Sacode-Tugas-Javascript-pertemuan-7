const name =document.getElementById('name')
const password = document.getElementById('passwaord')
const form =document.getElementById('form')
const errorElement =document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === ''|| name.value == null) {
        messages.push('Name is required')
    }

  if(password.value.length <= 6) {
 messages.push('passwaord must be longer than 6 characters')
}
   if (password.value.length >= 20) {
messages.push('passwaord must be leess than 20 characters')
 }

 if (messages.length > 0) {
  e.preventDefault()
  errorElement.innerText = messages.join(',')
 }
})