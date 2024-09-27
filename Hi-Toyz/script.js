//  REGISTER VALIDATION

function validateForm(event){
  event.preventDefault();

  var errorMessage=document.getElementById('errorMessage')
  errorMessage.innerHTML=''

  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var pass = document.getElementById('pass').value
  var confpass = document.getElementById('confpass').value
  var dob = document.getElementById('dob').value
  var gender = document.querySelector('input[name="gender"]:checked')
  var checkbox = document.querySelector('input[name="checkbox"]')
  
  var isValid=true
  
  // Name
  // jumlah karakter harus lebih dari 4 karakter dan juga alphabetical
  if(name.length <= 4)
  {
    alert('Name must be more than 4 characters')
    isValid=false
  }
  else if(isAlpha(name)==false)
  {
    alert('Name must be alphabetical')
    isValid=false
  }
  
  // Email
  // email harus memiliki symbol "@" dan "." dan tidak boleh terletak pada awal input
  if(isValidEmail(email)==false)
  {
    alert('Email is invalid')
    isValid=false
  }
  
  // Password
  // Password harus alphanumeric
  if(isAlphanumeric(pass)==false)
  {
    alert('Password must be alphanumeric')
    isValid=false
  }
  
  // Confirm Password
  // Confirm Password harus sama persis dengan password
  if(confpass!=pass)
  {
    alert('Password must be the same as Confirm Password')
    isValid=false
  }
  
  // DOB
  // date of birth harus diisi
  if(!dob)
  {
    alert('Please fill your date of birth')
    isValid=false
  }
  
  // Gender
  // salah satu gender harus dipilih
  if(gender==null)
  {
    alert('Please choose your gender')
    isValid=false
  }
  
  // Checkbox
  // checkbox harus dicentang
  if(checkbox==null)
  {
    alert('Agreement must be checked')
    isValid=false
  }
  
  // isValid
  if(isValid==true)
  {
    window.location.href='./hitoyz.html'
  }
  else
  {
    errorMessage.innerHTML="Please submit the form correctly"
  }
  
  // isAlpha
  function isAlpha(name)
  {
    var alpha=true
    for(let index=0;index<name.length;index++)
    {
      if(name[index]>='a' && name[index]<='z')
      {
        alpha=true
      }
      else if(name[index]>='Z' && name[index]<='Z')
      {
        alpha=true
      }
      else
      {
        alpha=false
        return false
      }
    }
    return true
  }

  // isAlphanumeric
  function isAlphanumeric(name)
  {
    var alpha=true
    var num=true
    var sym=false
    for(let index=0;index<name.length;index++)
    {
      if(name[index]>='a' && name[index]<='z')
      {
        alpha=true
      }
      else if(name[index]>='Z' && name[index]<='Z')
      {
        alpha=true
      }
      else if(name[index]>='0' && name[index]<='9')
      {
        num=true
      }
      else
      {
        sym=true
        return false
      }
    }
    return true
  }

  function isValidEmail(email)
  {
    // harus ada @
    if(email.indexOf('@')=='-1' || email.indexOf('@')=='0' || email.indexOf('.')=='-1' || email.indexOf('.')=='0')
    {
      return false
    }
  }
}


// 

// HAMBURGER MENU
const ham = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click',() => {nav.classList.add('active');})
}

if(close){
    close.addEventListener('click', ()=> {nav.classList.remove('active');})
}

// SLIDER

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("titik");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}