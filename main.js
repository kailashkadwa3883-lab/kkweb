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

// ===== Fluid Scroll Reveal =====
(function(){
  const selectors=[
    '.section-head','.svc-mini','.step','.why-card','.svc-card',
    '.proj-card','.price-card','.ci-card','.about-img-box','.about-content',
    '.contact-form','.skill-group','.cta-inner'
  ];
  const targets=document.querySelectorAll(selectors.join(','));
  if(!targets.length || !('IntersectionObserver' in window)) return;

  // group by parent so siblings stagger together
  const groups=new Map();
  targets.forEach(el=>{
    const p=el.parentElement;
    if(!groups.has(p))groups.set(p,[]);
    groups.get(p).push(el);
  });
  groups.forEach(list=>{
    list.forEach((el,i)=>{
      el.classList.add('reveal');
      el.style.transitionDelay=(i*90)+'ms';
    });
  });

  const io=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  },{threshold:0.15,rootMargin:'0px 0px -60px 0px'});

  targets.forEach(el=>io.observe(el));
})();
