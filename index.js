const a = require('express')
const b = require('cors')

const copyExpress = a()
copyExpress.use(b())

copyExpress.get('/torelli',(req,res)=>{
    res.send([
        {nome:"teste", rgm:"123", curso:"ADS"},
        {nome:"testeDOIS", rgm:"321", curso:"ADM"}
    ])
})

copyExpress.listen(3027, ()=>{
    console.log('porta aberta, server ligado')
})