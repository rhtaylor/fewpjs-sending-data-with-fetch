function submitData(name, email){  
    
    const userInfo = { name: name , email: email}
    
    const configureObj = {  
        "method": "POST",
        headers: {  
             
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    };
 
    return fetch('http://localhost:3000/users', configureObj)
        .then(function (response) { 
            
            return response.json();
        })
        .then( data => {  
            let xyz = document.getElementById("yo");
            let zzz = document.createElement("h1"); 
            zzz.innerHTML = data["id"] + " " + data["name"] + " " + data["email"] ;
            xyz.appendChild(zzz);  
            })   
        .then(data => function(resolve){ 
              
            resolve(data)  
        }) 
        .catch(function (error) {  
             debugger
            if (error){
            let xyz = document.getElementById("yo");
            error.message = "Unauthorized Access"; 
            
            xyz.innerHTML = error.message}
                 
        });

    } 

