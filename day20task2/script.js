const dog_result = document.getElementById( 'dog-result' );
const dog_btn = document.getElementById( 'dog-btn' );
cat_btn.addEventListener( 'click', getRandomDog );
function getRandomDog() {
	fetch( 'https://random.dog/woof.json' )
		.then( res => res.json() )
		.then( data => {
			if ( data.url.includes( '.mp4' ) ) {
				getRandomDog();
			} else {
				dog_result.innerHTML = `<img src="${data.url}" />`;
			}
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