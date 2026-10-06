// Add confirmed business contact details here to activate direct enquiry buttons.
const BUSINESS = { whatsapp: "923335232992", email: "" };
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
document.getElementById('year').textContent=new Date().getFullYear();
const direct=document.getElementById('direct-contact');
if(/^\d{10,15}$/.test(BUSINESS.whatsapp)){const a=document.createElement('a');a.className='button gold direct-button';a.href='https://wa.me/'+BUSINESS.whatsapp;a.textContent='Enquire on WhatsApp ↗';a.target='_blank';a.rel='noopener noreferrer';direct.append(a)}
if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(BUSINESS.email)){const a=document.createElement('a');a.className='button gold direct-button';a.href='mailto:'+BUSINESS.email;a.textContent='Email us ↗';direct.append(a)}
document.getElementById('enquiry').addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value.trim();if(!name){document.getElementById('name').focus();return}document.getElementById('prepared').value='Hello Awan Tax Law Associates, my name is '+name+'. I need assistance with '+document.getElementById('service').value+'. '+document.getElementById('message').value.trim()+' Please let me know the documents required and your service fee.';document.getElementById('enquiry-result').hidden=false;document.getElementById('copy-status').textContent='Copy this message and send it to our official business contact.'});
document.getElementById('copy').addEventListener('click',async()=>{const t=document.getElementById('prepared');try{await navigator.clipboard.writeText(t.value);document.getElementById('copy-status').textContent='Copied. You can now paste your enquiry into a message.'}catch{t.focus();t.select();document.getElementById('copy-status').textContent='Select and copy the message using your device’s copy option.'}});
