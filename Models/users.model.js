const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Registration')
    .then(() => {
        console.log('connect to mongodb');
    })
    .catch((error) => {
        console.log(error);
    })

const UserSchema = new mongoose.Schema({
    Full_Name: {
        type: String,
        required: [true, 'Full Name is required']
    },
    Mobile_Number: {
        type: Number,
        required: [true, 'Mobile Number is required'],
        validate: {
            validator: function (value) {
                return /^\d{10}$/.test(value);
            },
            message: 'Mobile Number must be a 10-digit number'
        }
    },
    Email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validate: {
            validator: function (value) {
                return /\S+@\S+\.\S+/.test(value);
            },
            message: 'Invalid email address'
        }
    },
    Password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long']
    },
});

const UserModel = mongoose.model('User', UserSchema);


const userRegistration = async (userData) => {
    try {
        const userInf = new UserModel(userData)
        const data = await userInf.save()
        console.log(data);
        return {message : "user created", data}
    } catch (error) {
        console.log(error);
        if(error.code ==="E11000"){
            return "duplicate error"
        }
        return {error}
    }
}

module.exports = {
    userRegistration
}
