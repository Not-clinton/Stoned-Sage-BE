import UploadBankStatementsController from '#controllers/upload_bank_statements_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/upload-bank-statements', () => [UploadBankStatementsController])
