//button 1
document.querySelector('#button1').addEventListener('click',getText);
//button 2
document.querySelector('#button2').addEventListener('click',getJson);
//button 3
document.querySelector('#button3').addEventListener('click',getAPIData);

//get text function
function getText(){
    fetch('test.txt').then(function(response, rejects){
        return response.text();
    })//catching the first promis where all the text content and prototype is available
    .then(function(data){
        document.querySelector('#output').innerHTML = data;//again we use then to get the text, which is in side of first then.
    })
    .catch(function(err){
        console.log(err);
    })
}

//get json function
function getJson(){
    fetch('post.json').then(function(response, rejects){
        return response.json();
    })
    .then(function(data){
        let output ='';
        data.forEach(function(post){
            output += `<li>${post.title}</li>`;
        })
        document.querySelector('#output').innerHTML = output;
    })
    .catch(function(err){
        console.log(`something went wrong ${err}`);
    });
}

//Get external api data
function getAPIData(){
    fetch('https://api.github.com/users').then(function(response, rejects){
        return response.json();
    })
    .then(function(data){
        let output ='';
        data.forEach(function(user){
            output += `<li>${user.login}</li>`;
        })
        document.querySelector('#output').innerHTML = output;
    })
    .catch(function(err){
        console.log(`something went wrong ${err}`);
    });
}