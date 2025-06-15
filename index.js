const title = document.querySelector('#title')
const navigation = document.querySelector('#navigation')
const overlay = document.querySelector('#overlay')

let active_index = '1'

navigation.querySelectorAll('span').forEach(span=>{
  span.addEventListener('click', _=>{
    active_index = span.getAttribute('data-index')
    navigation.querySelectorAll('span').forEach(s=>{
      s.classList.remove('active')  
      
      title.querySelectorAll('section').forEach(_title=>{
        _title.getAttribute('data-index')==active_index ? _title.classList.add('active') : _title.classList.remove('active');
      })
    })
    span.classList.add('active')
  })
})

function toggle_overlay() {
  overlay.classList.toggle('active')
}

const modal_open_buttons = document.querySelectorAll('#title .modal-open')
const modal_close_buttons = document.querySelectorAll('#overlay .modal-close')

modal_open_buttons.forEach(button => {
  button.addEventListener('click', _=>{
    const index = button.getAttribute('data-index')
    document.querySelector(`#overlay > article[data-index="${index}"]`).classList.add('active')
    toggle_overlay()
  })
})

modal_close_buttons.forEach(button => {
  button.addEventListener('click', _=>{
    const index = button.getAttribute('data-index')
    document.querySelector(`#overlay > article[data-index="${index}"]`).classList.remove('active')
    toggle_overlay()
  })
})