import express from 'express'
import controller from '../../controllers/api/v1.controller'
const router = express.Router()

router.get('/gallery/items', controller.galleryItems)

router.post('/contact', controller.contact)

export default router