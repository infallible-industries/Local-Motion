const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

// Define userSchema
const taskSchema = new Schema({
	info: { type: String, required: true },
	user:{type: Schema.Types.ObjectId},
	
	loc:{
		lat:{type:Number, required: true  },
		lng:{type:Number, required: true  }
	}
})


// Create reference to User & export
const Task = mongoose.model('Task', taskSchema)
module.exports = Task
