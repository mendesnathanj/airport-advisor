const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateSignupInput = require('../../validations/signup');
const validateLoginInput = require('../../validations/login');

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        username: req.user.username,
    });
})

router.post('/signup', (req, res) => {
    const { errors, isValid } = validateSignupInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ username: req.body.username }).then(user => {
        if (user) {
            return res.status(400).json({ username: "Username already taken" })
        } else {
            const newUser = new User({
                username: req.body.username,
                password: req.body.password
            })

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save().then(user => {
                        res.json({
                            user: user,
                            token: getToken(user),
                        })
                    }).catch(err => console.log(err));
                })
            })
        }
    })
})

function getToken(user) {
    const payload = { id: user.id, name: user.name };

    return jwt.sign(
        payload,
        keys.secretOrKey,
        { expiresIn: 3600 }
    )
};

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username }).then(user => {
        if (!user) {
            return res.status(400).json({ username: 'This user does not exist' });
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                res.json({
                    success: true,
                    token: 'Bearer ' + getToken(user)
                });
            } else {
                return res.status(400).json({ password: 'Incorrect password' });
            }
        })

    })
})

module.exports = router;


