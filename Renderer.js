// dothis(template, template-selector, where to append to)
Handlebars.registerHelper('capitalized',function (aName) {
    const name = aName.split(' ')
    const capd = []
    name.forEach(name => capd.push(name[0].toUpperCase() + name.slice(1,).toLowerCase()))
    return capd.join(' ')
})


class Renderer {

    renderMainUser(mainUser){
        const imgUrl = mainUser.picture.large
        const userName = `${mainUser.name.title} ${mainUser.name.first} ${mainUser.name.last}`
        const location = `${mainUser.location.city}, ${mainUser.location.country}`

        const source = $('#main-user-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({imgURL:imgUrl, name:userName , location:location})

        $('.user-container').empty()
        $('.user-container').append(newHTML)
    }


    renderFriendUsers(friendsUsersArray){

        const source = $('#friends-users-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({friendUsers:friendsUsersArray})

        $('.friends-container').empty()
        $('.friends-container').append(newHTML)
    }


    renderKnyeQuote(quote){
        const source = $('#knyeQuote-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({quote})

        $('.quote-container').empty()
        $('.quote-container').append(newHTML)
    }


    renderPoke(poke){
        const source = $('#poke-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({pokeImgURL: poke.img, pokeName:poke.name})

        $('.pokemon-container').empty()
        $('.pokemon-container').append(newHTML)
    }


    getMeatTalk(meatText){
        const source = $('#meat-text-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({meatText:meatText})

        $('.meat-container').empty()
        $('.meat-container').append(newHTML)
    }
}
