import express from "express";
import cors from "cors" ;

const app = express()
let data = null

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.route('/customer')
    .put((req,res) => {
        data = req.body
        console.log(data)
        try{
            res.status(200).send('complete')
        } catch(error) {
            res.status(500).send('error')
        }
    })
    .get((req,res) => {
        try{
            res.status(200).send(data)
        } catch(error) {
            res.status(500).send('error')
        }
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})