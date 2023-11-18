
let oldNum = 0

function changeProfileImage() {
    // replacing image
    let imageSlot = window.document.getElementById("profile-image")

    // all images
    const images = [
        // for bias
        "./styles/images/profile-img-animated4.png",
        "./styles/images/profile-img.png",

        "./styles/images/profile-img-animated1.png",
        "./styles/images/profile-img-animated2.png",
        "./styles/images/profile-img-animated3.png",
        "./styles/images/profile-img-animated4.png",
        "./styles/images/profile-img.png"
    ]

    let r = (Math.random() * images.length)
    let randomInt = Math.round(r)
    console.log(randomInt)

    // to try to prevent the generation of the same number
    while (randomInt == oldNum) {
        r = (Math.random() * images.length)
        randomInt = Math.round(r)
    }


    if (randomInt == images.length) {
        imageSlot.src = images[randomInt - 1]
    }

    else {
        imageSlot.src = images[randomInt]
    }

    oldNum = randomInt
}
