function newUser(user, age,country,uid){
    return{
        user,
        age,
        country,
        id: uid
    }
}
console.log(newUser('gdnx', 24, 'MX', 1));
