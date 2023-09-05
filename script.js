document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fecha').value;
  
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: nombre,
        apellido: apellido,
        fecha: fecha,
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // respuessta aca
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  