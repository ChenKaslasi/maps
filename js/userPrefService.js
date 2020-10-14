'use strict';
const DB_KEY = "userPref"

const gForcast = [
  { name: 'Aquarius', startTime: '01-20', endTime: '02-19', desc: 'You’re getting an understanding of things that need to change in order for you to expand and break ground as the moon lights up your house of transformation. The moon harmonizes with your planetary ruler Saturn, and you can find yourself getting comfortable with the unknown.' },
  { name: 'Pisces', startTime: '02-19', endTime: '03-21', desc: 'You just want to connect with others and nurture your relationships as the moon illuminates your partnerships sector. You might feel a sense of lack, or like your relationships aren’t living up to your high standards and expectations, as the moon faces off with idealistic Neptune and connects with strict Saturn.' },
  { name: 'Aries', startTime: '03-21', endTime: '04-20', desc: 'The moon in your house of work and routine faces off with distracting Neptune, making it easy to lose track. You have to look at the bigger picture and stay on task! Maybe after a small break, you can get back into a habit as the moon harmonizes with taskmaster Saturn. Keep your eyes on the prize.' },
  { name: 'Taurus', startTime: '04-20', endTime: '05-21', desc: 'The moon in fellow earth sign Virgo has your head in the sky, daydreaming about fun and sex as it faces off with distracted Neptune. Use this time to visualize your ideal romantic situation, and then find the limitations of this fantasy as the moon harmonizes with Saturn, planet of boundaries.' },
  { name: 'Gemini', startTime: '05-21', endTime: '06-21', desc: 'The moon in your house of domesticity has you sorting out your personal life, but your career is distracting you from finding grounding right now. You are excited to share your resources with others and explore your own personal limits as the moon harmonizes with Jupiter, Pluto, and Saturn.' },
  { name: 'Cancer', startTime: '06-21', endTime: '07-23', desc: 'The moon in your house of communication finds you busy, but watch out for things not being how they seem! The moon faces off with Neptune, planet of fantasy, and misunderstandings abound. The moon harmonizes with Saturn, helping you use your relationships and reliable partners as an anchor.' },
  { name: 'Leo', startTime: '07-23', endTime: '08-23', desc: 'Shopping isn’t going to save you from your problems, Leo. The moon faces off with dreamy Neptune, and making a wishlist or never hitting “purchase” are more appropriate uses of today’s materialistic cravings. You’re willing to work for what you want as the moon harmonizes with serious Saturn, helping you get organized.' },
  { name: 'Virgo', startTime: '08-23', endTime: '09-23', desc: 'The moon in your sign connects you to your needs. The moon faces off with dreamy Neptune, finding you idealizing other people and your relationships. It’s possible that you are cutting them too much slack. You get more strict with your time and energy as the moon harmonizes with serious Saturn.' },
  { name: 'Libra', startTime: '09-23', endTime: '10-23', desc: 'The moon in your house of rest and rehabilitation has you tying up loose ends, out of view of everyone else. This can feel lonely but productive as you make progress at home and with your health. Practice restriction as the moon harmonizes with Saturn.' },
  { name: 'Scorpio', startTime: '10-23', endTime: '11-23', desc: 'You’re feeling social and idealistic as the moon in your social sector faces off with dreamy Neptune. You are welcoming new friends and growing your community, bringing people into your inner circle and crew as the moon harmonizes with Jupiter, the planet of growth.' },
  { name: 'Sagittarius', startTime: '11-23', endTime: '12-22', desc: 'You’re sensitive about what other people think of you, and it’s a point of vulnerability as the moon opposes idealistic Neptune. You have to make a compromise between your ideals and your desire to be popular. You see material consequences as the moon harmonizes with structural Saturn.' },
  { name: 'Capricorn', startTime: '12-22', endTime: '01-20', desc: 'You’re learning a lot more and getting hands-on experience as the moon lights up your house of higher learning and philosophy. You will have to let go of some idealism as the moon faces off with Neptune. There is a practical understanding as the moon harmonizes with your planetary ruler Saturn' },

]

function createUserProfile(date, backgroundColor, textColor,name) {
  let userData = {
    name: name,
    birthDate: date,
    backGroundColor: backgroundColor,
    textColor: textColor,
    astrologicForcast: getAstoroForcast(date),
  }
  return userData
}


function saveUserPref(userPrefObj) {
  saveToStorage(DB_KEY, userPrefObj)
}

function loadUserPref() {
  var userPref = loadFromStorage(DB_KEY)
  return userPref
}


// function getAstoroForcast(date) {
//   let [forcastObj] = gForcast.filter((Constellation) =>
//     Constellation.startTime < date && Constellation.endTime > date)
//   return forcastObj
// }


function getAstoroForcast(date) {
  let [year,month,day] = date.split('-');
  let monthDay = `${month}-${day}`
  let [forcastObj] = gForcast.filter((constellation) =>
    constellation.startTime < monthDay && constellation.endTime > monthDay)
  return forcastObj
}