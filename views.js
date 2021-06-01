// const eye = document.querySelector('#eye');
// const password = document.querySelector('#password');

// eye.addEventListener('click', (e) =>{
//     // toggle the type attribute
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);
//     // toggle the eye slash icon
//     if(type==='password'){
//         eye.classList.remove('fi-rr-eye-crossed');
//         eye.classList.toggle('fi-rs-eye');
//     }else{
//         eye.classList.remove('fi-rs-eye');
//         eye.classList.toggle('fi-rr-eye-crossed');
        
//     }
     
// });

////////////////
const show = document.querySelector('.show-btn')
const popup = document.querySelector('.popup')
show.addEventListener('click' ,() => {
    popup.classList.add('open')
})
function hidePopup() {
    popup.classList.remove('open');
  }

  document.querySelector('.container').addEventListener('scroll', function(e) {
    // 10 is a threshold, probably in pixels
    console.log(document.body.scrollTop)
   if (document.body.scrollTop < 10)
  
       document.getElementById('circle').style.opacity = 0;
   else
       document.getElementById('circle').style.opacity = .3; 
});

  
const eye = document.querySelector('#eye');
const eye2 = document.querySelector('#eye2');
const password = document.querySelector('#password');
const confirmer = document.querySelector('#confirmer');
eye.addEventListener('click', (e) =>{
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    if(type==='password'){
        eye.classList.remove('fi-rr-eye-crossed');
        eye.classList.toggle('fi-rr-eye');
    }else{
        eye.classList.remove('fi-rr-eye');
        eye.classList.toggle('fi-rr-eye-crossed');
        
    }
     
   
});
eye2.addEventListener('click', (e) =>{
    // toggle the type attribute
    const type = confirmer.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmer.setAttribute('type', type);
    // toggle the eye slash icon
    if(type==='password'){
        eye2.classList.remove('fi-rr-eye-crossed');
        eye2.classList.toggle('fi-rr-eye');
    }else{
        eye2.classList.remove('fi-rr-eye');
        eye2.classList.toggle('fi-rr-eye-crossed');
        
    }
     
   
});