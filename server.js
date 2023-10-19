import express from 'express'

/* sai daqui curioso >:( */

const app = express()
const PORT = 3000 | 3001

app.use(express.static('./'))
app.listen(PORT, () => {
    console.log(`server rodando em http://localhost:${PORT}`);
})