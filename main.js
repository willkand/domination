// line through

function lineThrough () {
    let lineThrough = document.querySelector('li');
    lineThrough.style.textDecoration = "line-through"
}

// strikeOut

lineThrough();


// setImage
function setImage(Id, Source) {
    let img = document.querySelector(imageID);
    img.src = Source; 
    img.style.height = "200px"
}

// three pictures

setImage("https://www.bing.com/images/search?view=detailV2&ccid=cZjUZ0Eh&id=0DA43D16A6148B0B38C1491976309375591E4300&thid=OIP.cZjUZ0Eh0G26TsD3dawdfAHaEK&mediaurl=https%3a%2f%2fimages.pushsquare.com%2faf2496f9abbd0%2f1280x720.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.7198d4674121d06dba4ec0f775ac1d7c%3frik%3dAEMeWXWTMHYZSQ%26pid%3dImgRaw%26r%3d0&exph=720&expw=1280&q=avangers&simid=607994247964658430&FORM=IRPRST&ck=C9784C51A995F72071D8FCABD87324D1&selectedIndex=49")
setImage("https://www.bing.com/images/search?view=detailV2&ccid=kAgNEzlP&id=5D3CF43DDEAAF2599EC5B230A9F4A68C8180127B&thid=OIP.kAgNEzlPeYdLsQzrP_8NRgHaEo&mediaurl=https%3a%2f%2fwww.hdwallpapers.in%2fdownload%2fthe_avengers_concept_art-wide.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.90080d13394f79874bb10ceb3fff0d46%3frik%3dexKAgYym9Kkwsg%26pid%3dImgRaw%26r%3d0&exph=1600&expw=2560&q=avangers&simid=607987960136359180&FORM=IRPRST&ck=4E1DB8EE16D499BE74062727E784496C&selectedIndex=28")
setImage("image-3, https://th.bing.com/th/id/OIP.gchMfKmlsvR9HddLpG0NTwHaEK?w=305&h=180&c=7&r=0&o=5&dpr=2&pid=1.7")

//remove first li
function remove (){
    let li = document.querySelector(`#arguments li`)
    li.remove();
}

remove();
remove();

// setTextsize and ID

function sideID (ID, testSize) {
    let text = document.querySelector(ID);
    text.style.fontSize = fontSize;
}

setID("50px", "h1")



// part 2

function Append (element) {
    const UL = document.getElementById('arguments');
    UL.appendChild(element);
}




