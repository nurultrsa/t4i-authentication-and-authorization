import express from "express"
import { getUsers, Register, Login, Logout } from "../controllers/Users.js"
import { Index, Store, Update, Delete } from "../controllers/Books.js"
import { verifyToken } from "../middleware/VerifyToken.js"
import { refreshToken } from "../controllers/RefreshToken.js"

const router = express.Router()

//Users
router.get('/users', verifyToken, getUsers)
router.post('/users', Register)
router.post('/login', Login)
router.get('/token', refreshToken)
router.delete('/logout', Logout)


//Books
router.get('/books', verifyToken, Index)
router.post('/books', verifyToken, Store)
router.put('/books/:id', verifyToken, Update)
router.delete('/books/:id', verifyToken, Delete)

export default router