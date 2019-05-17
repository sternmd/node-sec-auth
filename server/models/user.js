const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_I = 10; // salt iteration

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        required: true,
        minlength: 6      
    }
})

// hash password
userSchema.pre('save', (next) => {
    var user = this;
    
    // check if password was modified
    if(user.isModified('password')){
        bcrypt.genSalt(SALT_I, (err,salt) => {
            if(err) return next(err);
    
            bcrypt.hash(user.password, salt, (err,hash) => {
                if(err) return next(err);
                user.password = hash;
                next();
            })
        })
    } else {
        next();
    }
})

// compare password method
userSchema.methods.comparePassword = function(candidatePassword, callback){
        
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if(err) throw err;
        callback(null,isMatch)
    })
}

const User = mongoose.model('User', userSchema)

module.exports = { User }