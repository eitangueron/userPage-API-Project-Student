const getRandomNum = function(maxNum){   //max num is included
    return Math.floor(Math.random() * Math.floor(maxNum+1));  
}
//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }
    

    
    getUsers(){
        $.ajax({
            method: 'GET',
            url: 'https://randomuser.me/api/?results=7&inc=name,location,picture',
            success: (users) => {
                this.data.mainUsers = users.results[0]
                this.data.friendUsers = users.results
                this.data.friendUsers.shift()
            }
        })
    }

    getKanyeQuote(){
        $.ajax({
            method: 'GET',
            url: 'https://api.kanye.rest',
            success: (kanyeQuote) => {
                this.data.kanyeQuote = kanyeQuote.quote
            }
        })
    }

    getRandomPoke(){
        $.ajax({
            method: 'GET',
            url: `https://pokeapi.co/api/v2/pokemon/${getRandomNum(100)}/`,
            success: (poke) => {
                this.data.poke = {name: poke.name, img: poke.sprites.front_default}   
            }
        })
    }

    
    getMeatTalk(){
        $.ajax({
            method: 'GET',
            url: 'https://baconipsum.com/api/?type=meat-and-filler&sentences=10/',
            success: (meatTalk) => {
                this.data.meatTalk = meatTalk[0]   
            }
        })
    }

}

