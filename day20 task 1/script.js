const cat_result = document.getElementById( 'cat-result' );
const cat_btn = document.getElementById( 'cat-btn' );
cat_btn.addEventListener( 'click', getRandomCat );

function getRandomCat() {
	fetch( 'https://aws.random.cat/meow' )
		.then( res => res.json() )
		.then( data => {
			cat_result.innerHTML = `<img src="${data.file}" />`;
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