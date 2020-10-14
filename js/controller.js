'use strict';

function onSubmitForm(event) {
  event.preventDefault()
  let date = document.querySelector('.date').value
  let backgroundColor = document.querySelector('.background').value
  let textColor = document.querySelector('.textcolor').value
  
  let userData = createUserProfile(date,backgroundColor,textColor);
  saveUserPref(userData)
  window.location = 'index.html'
}



function onHomeLoad() {
  let userPref = loadUserPref();
  if(userPref) renderUserPref(userPref)
}


function renderUserPref(userPref) {
  
  renderStyle(userPref)
  renderAstro(userPref)
}

function renderStyle(userPref) {
  document.querySelector('html').style.backgroundColor = userPref.backGroundColor
  document.querySelector('html').style.color = userPref.textColor
}

function renderAstro(userPref) {
  let {astrologicForcast} = userPref
  document.querySelector('.constellation').innerHTML = astrologicForcast.name
  document.querySelector('.date').innerHTML = `${astrologicForcast.startTime} --- ${astrologicForcast.endTime}`
  document.querySelector('.description').innerHTML = astrologicForcast.desc
}