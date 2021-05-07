const express = require('express')
const Wyze = require('wyze-node')
const morgan = require('morgan')

require('dotenv').config()

const app = express()

const port = process.env.PORT || 3025

const options = {
  username: process.env.WYZE_USERNAME,
  password: process.env.WYZE_PASSWORD,
}
const wyze = new Wyze(options)

app.use(morgan('combined'))

app.get('/', async (req, res, next) => {
  try {
    const { mac } = req.query

    if (!mac) {
      return res.status(400).json({
        online: false,
        error: 'Please specify a MAC address',
      })
    }

    const device = await wyze.getDeviceByMac(mac)

    if (!device) {
      return res.status(404).json({
        online: false,
        error: 'Camera not found',
      })
    }

    return res.status(device.conn_state ? 200 : 500).json({
      online: !!device.conn_state,
      device,
    })
  } catch (err) {
    return res.status(500).json({
      online: false,
      error: err?.message ?? err.toString(),
    })
  }
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
