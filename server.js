const express = require('express')
const app = express()
let wrestlers = {
    "rey mysterio": {
        "name": "Oscar Gutierrez Rubio",
        "age": "49",
        "catchPhrase": "Booyaka!",
        "birthPlace": "Chaula Vista, California",
        "finisherMove": "619"
    },
    "the undertaker": {
        "name": "Mark William Callaway",
        "age": "59",
        "catchPhrase": "Rest In Peace",
        "birthPlavce": "Houston, Texas",
        "finisherMove": "Tombstone Piledriver"
    },
    "kane": {
        "name": "Glenn Thomas Jacobs", 
        "age": "57",
        "catchPhrase": "unknown",
        "birthPlace": "Torrejon de Ardoz, Spain",
        "finisherMove": "Chokeslam"
    },
    "the rock": {
        "name": "Dywane Douglas Johnson",
        "age": "52",
        "catchPhrase": ["If you smell what The Rock is cooking", "Know your role and shut your mouth", "It doesn't matter"], 
        "birthPlace": "Hayward, California", 
        "finisherMove": ["Rock Bottom", "People's Elbow"]  
    },
    "john cena": {
        "name": "John Felix Anthony Cena",
        "age": "47", 
        "catchPhrase": "You can't see me",
        "birthPlace": "West Newbury, Massachusetts",
        "finisherMove": ["Attitude Adjustment", "Stepover Toehold Facelock", "Five Knuckle Shuffle"]
    }, 
    "not available": {
        "name": "unknown",
        "age": "unknown",
        "catchPhrase": "unknown",
        "birthPlace": "unknown",
        "finisherMove": "unknown"
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')

})

app.get('/api', (request, response) => {
    response.json(wrestlers)
})

app.get('/api/:name', (request, response) => {
    const wrestler = request.params.name.toLowerCase()
    if(wrestlers[wrestler]){
        response.json(wrestlers[wrestler])
    }else{
        response.json(wrestlers["not available"])
    }
})

app.get('/script.js', (request, response) => {
    response.sendFile(__dirname + '/script.js')
})


const PORT = 9000
app.listen(PORT)
console.log(`The server is running on port ${PORT}`)