import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Add your user name'],
    maxlength: [15, 'Your user name is up to 15 chars long'],
  },
  email: {
    type: String,
    required: [true, 'Add your e-mail'],
  },
  password: {
    type: String,
    required: [true, 'Add your password'],
    minlength: [6, 'Password must be at least 6 chars'],
  },
})

export default mongoose.model('user', userSchema)
