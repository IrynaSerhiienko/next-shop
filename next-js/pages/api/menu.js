import { menu } from './data/menu';

export default function handler(req, res) {
  console.log(req.method);

  if (req.method === 'GET') {
      res.status(200).json(menu);
      // res.status(200).json(JSON.stringify(menu))
  }
}
// import { cakes } from './data/menu';

// export default function handler(req, res) {
//   console.log(req.method);

//   if (req.method === 'GET') {
//     res.status(200).json(cakes);
//     // console.log(cakes);
//   }
// }
