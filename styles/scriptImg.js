
function changeProfileImage() {
    const images = [
        "./styles/images/profile-img-animated1.png",
        "./styles/images/profile-img-animated2.png",
        "./styles/images/profile-img-animated3.png",
        "./styles/images/profile-img.png"
    ]

    let r = (Math.random() * images.length)
    let randomInt = Math.round(r)
    console.log(randomInt)

    // replacing image
    let imageSlot = window.document.getElementById("profile-image")
    if (randomInt == 0) {
        imageSlot.src = images[randomInt]
    }

    else {
        imageSlot.src = images[randomInt - 1]
    }
}