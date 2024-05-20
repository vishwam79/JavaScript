const URL = "https://jsonplaceholder.typicode.com/posts";


/// get methods API call 


async function getData(){

    try {
const response = await fetch(URL);
const data = await response.json();
console.log(data);
        
    } catch (error) {

        console.error('error', Error)
        
    }
}

// getData();



/// post API methods 

async function postData(){

    try {

        const response = await fetch(URL, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({

                title: 'foo',
                body: 'bar',
                userId: 1

            })

        })

        const data = await response.json();
        console.log(data);
        console.log(response.status);

        
    } catch (error) {
        console.error('error', Error);
        
    }
}

// postData();



//// put Method Api 


async function putData(){

    try {
        const response = await fetch(URL, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: 15,
            title: 'foo',
            body: 'hello this is put api',
            userId: 100
          })
        });
    
        if (!response.ok) {
          console.log("kuchh dikkt hai");
          return; 
        } else {
          console.log("koi dikkt nahi");
        }
    
        const data = await response.json();
        console.log(data);
    
      } catch (error) {
        console.error("Error", error);
      }
}

// putData();



///// delet data Api methods


async function deletData(){
    try {
        const response = await fetch(URL, {
            method: 'DELETE'
        });

        if(response.ok){
            console.log("delete ho gaya bhai");
        }

        else{
            console.log("kichh to gadbad hai dayaa")
        }
        
    } catch (error) {
        
    }
}deletData();