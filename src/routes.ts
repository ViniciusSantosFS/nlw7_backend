import { Router } from 'express'
import { AuthUserController } from './controllers/AuthUserController'
import { CreateMessageController } from './controllers/CreateMessageController'
import { ensureAuth } from './middleware/ensureAuth'

const router = Router()

router.post('/authenticate', new AuthUserController().handle)
router.post('/messages', ensureAuth, new CreateMessageController().handle)

export { router }
