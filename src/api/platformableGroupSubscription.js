const axios = require('axios')

export default function formHandlerPlatformable(req, res) {

    const form = {
      email:req.body.email
    }

  const play = axios({
    method: 'post',
    url: `https://api.mailerlite.com/api/v2/groups/${process.env.GATSBY_PLATFORMABLE_GROUP_ID}/subscribers`,
    data: form,
    headers: {
        'Content-type':'application/json',
        'X-MailerLite-ApiKey': `${process.env.GATSBY_MAILERLITE_API_KEY}`
    }
  })
  .then(function (response) {
   console.log("response.statusText",response.statusText)
   console.log(response)
   console.log("response.statusMessage",response.statusMessage)
   if(response.statusText==='OK' || response.statusMessage==='OK' ||  response.statusCode==='200')
    res.send('OK')
  })
  .catch(error => {  
    // Handle error.
    console.log('An error occurred:', error);
    res.send(error)
 
  })

/*   if (!req.body.name) {
    return res.status(422).json("missing data")
  } */

 
/* return res.json(`OK`) */
  
}

