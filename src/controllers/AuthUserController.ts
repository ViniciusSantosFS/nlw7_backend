import { Request, Response } from 'express'
import { AuthUserService } from '../services/AuthUserService'

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { code } = req.body
    const service = new AuthUserService()
    try {
      const result = await service.execute(code)
      return res.json(result)
    } catch (error) {
      return res.json({ error: error.message })
    }
  }
}
export { AuthUserController }
