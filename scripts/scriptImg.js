
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
    imageSlot.src = images[randomInt]

    if (randomInt == 4) {
        imageSlot.src = images[randomInt - 1]
    }

    else {
        imageSlot.src = images[randomInt]
    }
}