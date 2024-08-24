import express from 'express'
import controller from '../../controllers/api/v1.controller'
const router = express.Router()

router.get('/gallery/items', controller.galleryItems)

export default router