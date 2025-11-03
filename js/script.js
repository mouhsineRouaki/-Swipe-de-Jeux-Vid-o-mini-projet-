const btnLike = document.getElementById("like");
const btnDislike = document.getElementById("dislike");
const containerImages = document.getElementById("containerImages");
const sectionLike = document.getElementById("sectionLike");
const sectionDislike = document.getElementById("sectionDisLike");
const gamesLike = document.getElementById("gamesLike");
const gamesDisLike = document.getElementById("gamesDisLike");


const imageUrls = [
  "../assets/img1.jpg",
  "../assets/img2.jpg",
  "../assets/img3.jpg",
  "../assets/img4.jpg",
  "../assets/img5.jpg",
  "../assets/img1.jpg",
  "../assets/img2.jpg",
  "../assets/img3.jpg",
  "../assets/img4.jpg",
];
const imagesLike = [];
const imagesDisLike = [];
let position = imageUrls.length - 1;
let cmp = -25;
imageUrls.forEach(url=>{
    const img= document.createElement("img");
    img.src = url
    img.alt = "jeux video"
    img.style.rotate = `${cmp}deg`;
    cmp +=5
    containerImages.append(img)
})
const images = document.querySelectorAll("#containerImages img");

btnLike.addEventListener('click' , function(){
    images[position].style.rotate = "0deg"
    images[position].style.transform = 'translateX(400%)';
    imagesLike.push(imageUrls[position])
    position -=1
    relodSectionLike();
})
btnDislike.addEventListener('click' , function(){
    images[position].style.rotate = "0deg"
    images[position].style.transform = 'translateX(-400%)';
    imagesDisLike.push(imageUrls[position]);
    position -=1
    relodSectionDisLike();
})
function relodSectionLike(){
    if(imagesLike.length > 0){
        gamesLike.innerHTML = "";
        console.log(imagesLike.length)
        imagesLike.forEach(url=>{
            const img= document.createElement("img");
            img.src = url
            img.alt = "jeux video"
            gamesLike.append(img)
        })
    }else{
        sectionLike.style.display = 'none';
    }
}
function relodSectionDisLike(){
    if(imagesDisLike.length >= 0){
        gamesDisLike.innerHTML = ""
        imagesDisLike.forEach(url=>{
            const img= document.createElement("img");
            img.src = url
            img.alt = "jeux video"
            gamesDisLike.append(img)
        })
    }else{
        sectionDislike.style.display = 'none';
    }
}


