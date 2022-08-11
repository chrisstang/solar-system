import { data } from '../../data/piValue'
import calculatePi from '../../utils/calculatePi'

export default function handler(req, res) {
  if (req.query.digit) {
    const piValue = calculatePi(parseInt(req.query.digit))
    data.piValue = piValue
    data.digits = req.query.digit

    return res.status(200).json({ piValue: piValue, digits: req.query.digit })
  }

  if (req.method == 'POST' && req.body.digit) {
    const piValue = calculatePi(parseInt(req.body.digit))
    data.piValue = piValue
    data.digits = req.body.digit

    return res.status(200).json({ piValue: piValue, digits: req.body.digit })
  }
  
  res.status(200).json({ piValue: data.piValue, digits: data.digits })
}
