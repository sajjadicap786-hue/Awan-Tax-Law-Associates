const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
document.getElementById('year').textContent=new Date().getFullYear();
const current=location.pathname.split('/').pop()||'index.html';nav.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href')===current)a.setAttribute('aria-current','page')});
const form=document.getElementById('enquiry');
if(form)form.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value.trim();if(!name){document.getElementById('name').focus();return}const text='Hello Awan Tax Law Associates, my name is '+name+'. I need help with '+document.getElementById('service').value+'. '+document.getElementById('message').value.trim()+' Please share the required documents and service fee.';const url='https://wa.me/923335232992?text='+encodeURIComponent(text);document.getElementById('enquiry-status').textContent='Opening WhatsApp. Review your message and press Send there.';window.location.assign(url)});
