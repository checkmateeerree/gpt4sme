import fetch from 'isomorphic-unfetch';

const handler = async (req, res) => {
  const { email } = req.body;

  console.log({ email });

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;
    const data = {
      email_address: email,
      status: 'subscribed',
    };
    console.log("hi")
    console.log(process.env.MAILCHIMP_API_SERVER)
    const response = await fetch(
      `https://${process.env.MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`,

      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    );
      console.log("hi2")
    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter.
        Hit me up peter@peterlunch.com and I'll add you the old fashioned way :(.`,
      });
    }

    return res.status(201).json({ error: '', success: true });
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ error: error.message || error.toString() });
  }
};

export default handler;