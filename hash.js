const bcrypt = require('bcrypt');
const {MD5} = require('crypto-js');

// bcrypt.genSalt(10, (err,salt)=> {
//     if(err) return next(err);

//     bcrypt.hash('password123', salt, (err,hash) => {
//         if(err) return next(err);
//         console.log(hash)
//     })
// })

const secret = 'mysecretpassword';
const secretSalt = 'dfihuvdS8324husdk'

const user = {
    id: 1,
    token: MD5('password').toString() + secretSalt
}

const receivedToken = '5f4dcc3b5aa765d61d8327deb882cf99dfihuvdS8324husdk';

if (receivedToken === user.token) {
    console.log('move forward')
}

console.log(user);