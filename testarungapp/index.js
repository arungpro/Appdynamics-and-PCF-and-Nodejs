require("appdynamics").profile({
 controllerHostName: 'ec2-52-64-15-64.ap-southeast-2.compute.amazonaws.com',
 controllerPort: 8090,
 accountName: 'customer1',
 accountAccessKey: 'cc85737f-7626-41a2-81d6-2c72250f07d3',
 applicationName: 'Docker_devil',
 tierName: 'pcf',
 nodeName: 'process',
});
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/hhello', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
