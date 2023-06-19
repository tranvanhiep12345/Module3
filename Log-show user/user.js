const http = require('http')
const qs = require('qs')
let server = http.createServer((req,res)=>{
    let data = ''
    req.on('data', (dataRaw)=> {
        data += dataRaw
        data = qs.parse(data)
        res.write('Name: ' + data.name + '<br>' +
                   'Email: ' + data.email + '<br>' +
                   'Password: ' + data.password)
        res.end()
    })
})
server.listen(8080,"localhost")