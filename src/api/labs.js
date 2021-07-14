import axios from "axios"

export default function formHandler(req, res) {
  // req.body has the form values
  console.log("req.body",req.body)
 console.log("GATSBY_MAILERLITE_API_KEY",process.env.GATSBY_MAILERLITE_API_KEY)
    const form = {
      name:req.body.name,
      email:req.body.email
    }

  axios({
    method: 'post',
    url: `https://api.mailerlite.com/api/v2/groups/${process.env.GATSBY_LABS_GROUP_ID}/subscribers`,
    data: form,
    headers: {
        'Content-type':'application/json',
        'X-MailerLite-ApiKey': `${process.env.GATSBY_MAILERLITE_API_KEY}`
    }
  })
  .then(function (response) {
    console.log(response)
  })
  .catch(error => {  
    // Handle error.
    console.log('An error occurred:', error);
  })

  if (!req.body.name) {
    return res.status(422).json("Name field is required")
  }
  return res.json(`OK`)
}

