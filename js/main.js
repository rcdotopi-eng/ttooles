// Language toggle and persistence
const langToggle=document.getElementById('langToggle');
if(langToggle){
  const lang=localStorage.getItem('lang')||'en';
  setLang(lang);
  langToggle.addEventListener('click',()=>{
    const current=localStorage.getItem('lang')==='en'?'ur':'en';
    setLang(current);
  });
}
function setLang(l){localStorage.setItem('lang',l);document.body.dir=l==='ur'?'rtl':'ltr';
document.querySelectorAll('a,button,h1,h2,footer').forEach(e=>{e.style.fontFamily=l==='ur'?'Noto Nastaliq Urdu, serif':'Poppins, sans-serif';});
}