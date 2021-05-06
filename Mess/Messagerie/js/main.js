
// CHOOSEYOURFRIEND.forEach(element => {
//     element.addEventListener("click",()=> {
//         SENDMESSAGE.placeholder = `envoyer un message à ${element.children[0].textContent}`
//     })
// })

// function MySunFunction () {
//     if(SETTINGS.classList.contains("moon")){
//         document.body.style.background ="#fff"
//         SETTINGS.style.color = "#000"
//         SETTINGS.classList.remove("moon")
//     }
//     else {
//     document.body.style.background ="#555"
//     SETTINGS.style.color = "#fff"
//     SETTINGS.classList.add("moon")
// }
// }
// window.addEventListener("keydown",(event)=>{
//     if(event.code == 'Enter'){
//         MESSAGE.innerHTML = SENDMESSAGE.value
//         SENDMESSAGE.value = ""
//     }
// })
const CLICKFORMESSAGE = document.querySelector(".MessageIsYourChoice")
const CLICKFORFRIENDS = document.querySelector(".FriendsIsYourChoice")
const CLICKFORPROFIL = document.querySelector(".ProfileIsYourChoice")
const PICTURE = document.querySelector(".PictureIsYourChoice")
const FRIENDSCONVERSATION = document.querySelector(".FriendsConversation")
const ADDFRIENDS = document.querySelector(".YourFriends")
const PROFIL = document.querySelector(".profil")
const PSEUDO = document.querySelector(".YourPseudo")
const PSEUDOVIEW = document.querySelector(".pseudoView")
const MYFRIENDS = document.querySelectorAll(".MyFriends")
const SENDMESSAGE = document.querySelector(".YourMessage")

CLICKFORMESSAGE.addEventListener("click",()=> {
ADDFRIENDS.style.display = "none"
PROFIL.style.display = "none"
FRIENDSCONVERSATION.style.display = "flex"
CLICKFORMESSAGE.style.color = "yellowgreen"
CLICKFORFRIENDS.style.color = "white"
PICTURE.style.border = "none"
})

CLICKFORFRIENDS.addEventListener("click",()=>{
    ADDFRIENDS.style.display = "flex"
    PROFIL.style.display = "none"
    FRIENDSCONVERSATION.style.display = "none"
    CLICKFORMESSAGE.style.color = "white"
    CLICKFORFRIENDS.style.color = "yellowgreen"
    PICTURE.style.border = "none"
})

CLICKFORPROFIL.addEventListener("click",()=>{
    ADDFRIENDS.style.display = "none"
    PROFIL.style.display = "flex"
    FRIENDSCONVERSATION.style.display = "none"
    CLICKFORMESSAGE.style.color = "white"
    CLICKFORFRIENDS.style.color = "white"
    PICTURE.style.border = "solid 5px yellowgreen"
})

PSEUDO.addEventListener("keydown",(event)=>{
    if(event.code == 'Enter'){
        PSEUDOVIEW.innerHTML= PSEUDO.value
        PSEUDO.value = ""
    }
    })
MYFRIENDS.forEach(element => {
    element.addEventListener("click",()=> {
        SENDMESSAGE.placeholder = `write a message to ${element.children[1].textContent}`
    })
})
