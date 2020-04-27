const apiManager = new APIManager()
const renderer = new Renderer()

$('#loadButton').on('click',function(){

    apiManager.getUsers()
    apiManager.getKanyeQuote()
    apiManager.getRandomPoke()
    apiManager.getMeatTalk()
})



$('#displayButton').on('click',function(){
    const mainUser = apiManager.data.mainUsers
    renderer.renderMainUser(mainUser)

    const friendsUsersArray = apiManager.data.friendUsers 
    renderer.renderFriendUsers(friendsUsersArray)

    const kanyeQuote = apiManager.data.kanyeQuote
    renderer.renderKnyeQuote(kanyeQuote)

    const pokemon = apiManager.data.poke
    renderer.renderPoke(pokemon)

    const meatTalk = apiManager.data.meatTalk
    renderer.getMeatTalk(meatTalk)
})
