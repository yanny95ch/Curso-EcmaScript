function newUser(name,age,country){
    var  name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'MX';
    console.log(name,age,country);
    
}
newUser();
newUser('David', 55 , 'Colombia')

function newAdmin (name= 'Oscar', age= 32, country= 'CL'){
    console.log(name,age,country);   
}

newAdmin();
newAdmin('Ana', 28, 'MX')