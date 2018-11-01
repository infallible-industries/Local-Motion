const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const GoogleStratgey = require('./googleStrategy')
const User = require('../db/models/user')

passport.serializeUser((user, done) => {

	done(null, { _id: user._id })
})

passport.deserializeUser((id, done) => {
	console.log('DEserialize ... called')
	User.findOne(
		{ _id: id },
		'firstName lastName photos local.username',
		(err, user) => {
			
			done(null, user)
		}
	)
})

// ==== Register Strategies ====
passport.use(LocalStrategy)
// ==== Uncommit from google login ====
//passport.use(GoogleStratgey)

module.exports = passport
