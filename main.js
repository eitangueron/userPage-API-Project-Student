localStorage.clear()

const apiManager = new APIManager()
const renderer = new Renderer()



$('#loadButton').on('click',function(){
    apiManager.getUsers()
    apiManager.getKanyeQuote()
    apiManager.getRandomPoke()
    apiManager.getMeatTalk()
})


const diaplsyData = function(dataObj){

    const mainUser = dataObj.mainUsers
    renderer.renderMainUser(mainUser)

    const friendsUsersArray = dataObj.friendUsers 
    renderer.renderFriendUsers(friendsUsersArray)

    const kanyeQuote = dataObj.kanyeQuote
    renderer.renderKnyeQuote(kanyeQuote)

    const pokemon = dataObj.poke
    renderer.renderPoke(pokemon)

    const meatTalk = dataObj.meatTalk
    renderer.getMeatTalk(meatTalk)
}



$('#displayButton').on('click',function(){
    diaplsyData(apiManager.data)
})



$('#saveUserButton').on('click', function(){
    const currentUserData = apiManager.data
    const usersName = (currentUserData.mainUsers.name.title + ' ' + currentUserData.mainUsers.name.first + ' ' + currentUserData.mainUsers.name.last)
    let savedAlredy = false
    const savedUsers = $('option')
    for(user of savedUsers){
        if(usersName === $(user).text()){
            alert('User is already saved!')
            savedAlredy = true 
        } 
    } 
    if(savedAlredy === false){
        const displayiedUserName = $('#userName').text()
        if(displayiedUserName === usersName){ 
            localStorage[usersName] = JSON.stringify(currentUserData)
            $('#savedUsers').append(`<option value="${usersName}">${usersName}</option>`)
        }
    }
    
})


$('#loadUserButton').on('click',function(){
    const userName = $('#savedUsers').val()
    const userData = JSON.parse(localStorage[userName])
    diaplsyData(userData)
})