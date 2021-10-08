const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()


// /api/auth/register
router.post(
    '/register', 
    [
        check('email', 'Email is not correct').isEmail(),
        check('password', 'Minimum password length is 6 symbols').isLength({ min: 6 })
    ],
    async (req, res)=>{
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: "Email or password is not correct"
            
            })
        }
        const {email, password} = req.body
        const candidate = await User.findOne({email})
        if(candidate){
            res.status(400).json({message: "There are already user with this email"})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({email, password: hashedPassword})

        await user.save()

        res.status(201).json({message: "User has been created"})
    } catch(e) {
        res.status(500).json({message: "Something is wrong"})
    }
})


module.exports = router