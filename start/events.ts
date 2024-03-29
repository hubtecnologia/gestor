/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/
import Event from '@ioc:Adonis/Core/Event'
import Mail from '@ioc:Adonis/Addons/Mail'
Event.on('new:user', async (user) => {
  console.log(user.email)
  await Mail.use('mailgun').send(
    (message) => {
      message.to('mesquitadev@gmail.com')
      message.subject('Welcome Onboard!')
    },
    {
      oTags: ['signup'],
    }
  )
})
