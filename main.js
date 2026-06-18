function toggleMenu(){document.getElementById('mobileMenu').classList.toggle('open')}
function closeMenu(){document.getElementById('mobileMenu').classList.remove('open')}

function submitForm(e){
  e.preventDefault();
  const inputs=e.target.querySelectorAll('input,select,textarea');
  const name=inputs[0].value,phone=inputs[1].value,biz=inputs[2]?.value||'',svc=e.target.querySelector('select').value,msg=e.target.querySelector('textarea').value;
  const text=`Hello KK Web Solutions!\n\nName: ${name}\nPhone: ${phone}\nBusiness: ${biz}\nService: ${svc}\n\n${msg}`;
  window.open(`https://wa.me/918094845254?text=${encodeURIComponent(text)}`,'_blank');
}

// Active nav link
const path=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav-links a').forEach(a=>{
  if(a.getAttribute('href')===path)a.classList.add('active');
  else a.classList.remove('active');
});
