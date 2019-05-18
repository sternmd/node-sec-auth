const bcrypt = require('bcrypt');
const {MD5} = require('crypto-js');
const jwt = require('jsonwebtoken');

// bcrypt.genSalt(10, (err,salt)=> {
//     if(err) return next(err);

//     bcrypt.hash('password123', salt, (err,hash) => {
//         if(err) return next(err);
//         console.log(hash)
//     })
// })

// const secret = 'mysecretpassword';
// const secretSalt = 'dfihuvdS8324husdk'

// const user = {
//     id: 1,
//     token: MD5('password').toString() + secretSalt
// }

// const receivedToken = '5f4dcc3b5aa765d61d8327deb882cf99dfihuvdS8324husdk';

// if (receivedToken === user.token) {
//     console.log('move forward')
// }

// console.log(user);

const id = '1000';
const secret = 'supersecret';

const token = jwt.sign(id, secret);

const receivedToken = 'eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y';

const decodeToken = jwt.verify(receivedToken, secret);

console.log(decodeToken);

