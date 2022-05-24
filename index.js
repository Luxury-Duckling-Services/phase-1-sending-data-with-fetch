const body = document.getElementsByTagName('body')[0]

const submitData = (userName , userEmail) => {
    const formData = {
        name: userName,
        email: userEmail,
      };
      
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      };
      
    return fetch("http://localhost:3000/users", configurationObject)
    
    .then(function (response) {
        return response.json();
    })
    
    .then(function (object) {
        body.innerHTML += object.id.toString()
    })

    .catch(function (error) {
        body.innerHTML += error.message.toString()
    })
    
}

