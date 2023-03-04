var express = require('express')
var cors = require('cors')
const Timetable = require('comcigan-parser')
const timetable = new Timetable();
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))


app.get('/api/getSc', async function(req, res) {
    var result = await timetable.getTimetable()
    res.status(200).json({
        "message" : "done",
        "result" : result[1][7]
    })
})


app.listen(3000, async function(){
    await timetable.init()
    timetable.setSchool(98749)
    console.log('Server Started Up At 3000')
})