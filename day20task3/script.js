const fox_btn = document.getElementById( 'fox-btn' );
fox_btn.addEventListener( 'click', getRandomFox );
function getRandomFox() {
	fetch( 'https://cors-anywhere.herokuapp.com/' + 'https://randomfox.ca/floof/' )
		.then( res => res.json() )
		.then( data => {
			fox_result.innerHTML = `<img src="${data.image}" />`;
		} );
}

(async () => {
  const rawResponse = await 	fetch('https://kronapp.ru/api/v1/login/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
	  username: 'junspecorp@gmail.com',
	  password: 'Stritflesh5'
	})
  });
  const content = await rawResponse.json();
	
  console.log(rawResponse);
})();

