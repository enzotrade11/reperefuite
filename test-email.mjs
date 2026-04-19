const formData = new FormData(); 
formData.append('access_key', 'c7e3c242-ab85-405c-9c02-7a072a04a323'); 
formData.append('name', 'Test Web3Forms'); 
formData.append('email', 'test@example.com'); 
formData.append('message', 'Message de test pour voir si l\'API fonctionne avec cette clé.'); 

fetch('https://api.web3forms.com/submit', { 
  method: 'POST', 
  body: formData 
})
.then(r => r.text())
.then(console.log)
.catch(console.error);
