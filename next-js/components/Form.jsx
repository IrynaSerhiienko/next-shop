export default function Form() {
    return (
      <form action="/api/form" method="post">
        <label htmlFor="first">First Name</label>
        <input type="text" id="first" name="first" required />
  
        <label htmlFor="last">Last Name</label>
        <input type="text" id="last" name="last" required />
  
        <button type="submit">Submit</button>
      </form>
    )
  }

  import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  data: string
}


// import type { NextApiRequest, NextApiResponse } from 'next'

// type ResponseData = {
//   data: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   const body = req.body
//   console.log('body: ', body)

//   // Both of these are required.
//   if (!body.first || !body.last) {
//     return res.json({ data: 'First or last name not found' })
//   }

//   // Found the name.
//   res.json({ data: `${body.first} ${body.last}` })
// }