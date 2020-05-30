
/*var do_log = console.log
console.log = function() {
    if (debug) {
        do_log(arguments);
    }
}*/

var data
var book = document.getElementsByClassName("flipbook")[0]
var frontimage = document.getElementById("frontimage")
var midimage = document.getElementById("midimage")
var backimage = document.getElementById("backimage")
var inited = false
var editable = false
var currentEditingPageIndex
var _editor
var settings
var onClose
var bookIsOpen = false

document.getElementById("closesettingsbutton").onclick = function() {
    SetClass("w_settings","off")
}

function StartBook(args) {
    if( args == null ) { return false }
    if( args.data == null ) {return false}
    d = args.data
    edit = !!args.edit
    onClose = args.onClose


    SetClass("w_book","off",false)
    SetClass("w_content","off",false)

    if( !inited ) {
        inited = true
        $('.flipbook').turn({
            width:922*1.5,
            height:600*1.5,
            elevation: 50,
            gradients: true,
            autoCenter: true
        });
    }


    editable = edit
    data = d
    frontimage.value = data.frontImage || ""; frontimage.onchange = function() { data.frontImage = frontimage.value }
    midimage.value = data.midImage || ""; midimage.onchange = function() { data.midimage = midimage.value }
    backimage.value = data.backImage || ""; backimage.onchange = function() { data.backimage = backimage.value }

    if( data == null || data == "" || data.pages == null || data.pages.length == 0 ) {
        $(".flipbook").turn("addPage", CreatePageElement(editable))
        $(".flipbook").turn("addPage", CreatePageElement(editable))
        $(".flipbook").turn("addPage", CreatePageElement(editable))
    } else {
        BuildPages()
        $(".flipbook").turn("page",1);
    }
    $(".flipbook").bind("turned", function(event, page, view) {
        document.getElementsByClassName("w_flip")[0].classList.toggle("off",true)
    });

}
function StopBook() {
    SetClass("w_book","off",true)
    SetClass("w_content","off",true)
}
function BuildPages() {
    var pageCount = $(".flipbook").turn("pages")
    for( var i = pageCount; i > 0; i--) {
        if($(".flipbook").turn("hasPage",i) == false ) { continue}
        $(".flipbook").turn("removePage", i);
    }
    for( var i = 0; i < data.pages.length; i++ ) {
        $(".flipbook").turn("addPage", CreatePageElement(editable,data.pages[i]))
    }
}
function CreatePageElement(editable,data) {

    var element = document.createElement("div")
    element.classList.add("w_bookpage")
    element.id = "bookpage" + ($(".flipbook").turn("pages")+1)

    if( data != null && data.background != null ) {
        element.style.backgroundImage = "url('"+data.background+"')"
    }
    if( data != null && data.backgroundColor != null ) {
        element.style.backgroundColor = data.backgroundColor
    }
    if( data != null && data.color != null ) {
        element.style.color = data.color
    }

    var cont = document.createElement("div")
    cont.id = "pagecontent" + ($(".flipbook").turn("pages")+1)
    cont.classList.add("w_pagecontent")
    //cont.classList.add("markdown-body")
    cont.setAttribute("pageIndex",$(".flipbook").turn("pages")+1)
    cont.innerHTML = data.content || ""
    element.appendChild(cont)


    return element
}



function SetClass(className,otherClassName,enable) {
    if(document.getElementsByClassName(className).length == 1 ) {
        document.getElementsByClassName(className)[0].classList.toggle(otherClassName,enable)
    } else {
        document.getElementById(className).classList.toggle(otherClassName,enable)
    }
}


function index(page) {
    $(".flipbook").turn("page",page);
}

window.addEventListener('message', function(event) {

    console.log("receive UI mssg", event)
    if (event.data.type == "OpenBookGui") {
        console.log("open?")
        if (event.data.value == true) {
            //DebugInit(true)
            this.console.log("tryoneisgay")
            var url = new URL(window.location.href);
            StartBook({data:{pages:[
                        {   /* 1 cover */
                            content:"<div>  <div class=\"HomeBanner__imgWrap__ytSx9\"><img src=\"http://phoenix-rp.co.uk/img/steady/page1.png\" alt=\"Wheeler, Rawson and Co.\" class=\"HomeBanner__img__1bLBq\" tabindex=\"0\"></div>",
                            background:"http://phoenix-rp.co.uk/img/steady/leather.jpg",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 2 index */
                            content:"<div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <h2 class=\"index_header\">INDEX</h2>  <div class=\"ProductPurchaseButtons__button__index__handguns\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"index\" onclick=\"index(4)\" type=\"button\">             <span class=\"Button__text__index\">Handguns</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__index__repeaters\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"index\" onclick=\"index(12)\" type=\"button\">             <span class=\"Button__text__index\">Repeaters</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__index__rifles\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"index\" onclick=\"index(17)\" type=\"button\">             <span class=\"Button__text__index\">Rifles</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__index__shotguns\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"index\" onclick=\"index(22)\" type=\"button\">             <span class=\"Button__text__index\">Shotguns</span>         </button>     </div></div>  ",
                            background:"http://phoenix-rp.co.uk/img/steady/background.jpg",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 3 ad */
                            content:"<img class = \"ad\" src=\"http://phoenix-rp.co.uk/img/steady/page2.png\" alt=\"gun\" tabindex=\"0\">",
                            background:"http://phoenix-rp.co.uk/img/steady/background.jpg",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 4 */
                            content:"<div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <div class=\"ProductPurchaseButtons__button__1Vwwn\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_REVOLVER_CATTLEMAN',0)\" type=\"button\">             <span class=\"Button__text__2C2ug\">$13.00 Buy</span>         </button>     </div></div><br><div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <br>     <div class=\"ProductPurchaseButtons__button__ammo\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_REVOLVER_CATTLEMAN',1)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"cattermanammo\">$10 Buy ammo</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__back\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"back\" onclick=\"index(2)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"back\">Back to index</span>         </button>     </div></div>",
                            background:"http://phoenix-rp.co.uk/img/steady/page3.png",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 5 */
                            content:"<div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <div class=\"ProductPurchaseButtons__button__1Vwwn\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_REVOLVER_DOUBLEACTION',0)\" type=\"button\">             <span class=\"Button__text__2C2ug\">$15.00 Buy</span>         </button>     </div></div><br><div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <br>     <div class=\"ProductPurchaseButtons__button__ammo\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_REVOLVER_DOUBLEACTION',1)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"cattermanammo\">$10 Buy ammo</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__back\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"back\" onclick=\"index(2)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"back\">Back to index</span>         </button>     </div></div>",
                            background:'http://phoenix-rp.co.uk/img/steady/page4.png',
                            backgroundColor:"",
                            color:"",
                        },
                        {   /* 6 */
                            content:"<div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <div class=\"ProductPurchaseButtons__button__1Vwwn\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_REVOLVER_SCHOFIELD',0)\" type=\"button\">             <span class=\"Button__text__2C2ug\">$17.00 Buy</span>         </button>     </div></div><br><div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <br>     <div class=\"ProductPurchaseButtons__button__ammo\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_REVOLVER_SCHOFIELD',1)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"cattermanammo\">$10 Buy ammo</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__back\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"back\" onclick=\"index(2)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"back\">Back to index</span>         </button>     </div></div>",
                            background:"http://phoenix-rp.co.uk/img/steady/page5.png",
                            backgroundColor:"#353535",
                            color:"white",
                        },              
                        {   /* 7 */
                            content:"<div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <div class=\"ProductPurchaseButtons__button__1Vwwn\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_REVOLVER_LEMAT')\" type=\"button\">             <span class=\"Button__text__2C2ug\">$25.00 Buy</span>         </button>     </div></div><br><div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <br>     <div class=\"ProductPurchaseButtons__button__ammo\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_REVOLVER_LEMAT',1)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"cattermanammo\">$10 Buy ammo</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__back\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"back\" onclick=\"index(2)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"back\">Back to index</span>         </button>     </div></div>",
                            background:"http://phoenix-rp.co.uk/img/steady/page7.png",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 8 */
                            content:"<div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <div class=\"ProductPurchaseButtons__button__1Vwwn\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_PISTOL_VOLCANIC')\" type=\"button\">             <span class=\"Button__text__2C2ug\">$25.00 Buy</span>         </button>     </div></div><br><div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <br>     <div class=\"ProductPurchaseButtons__button__ammo\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_PISTOL_VOLCANIC',1)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"cattermanammo\">$10 Buy ammo</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__back\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"back\" onclick=\"index(2)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"back\">Back to index</span>         </button>     </div></div>",
                            background:"http://phoenix-rp.co.uk/img/steady/page8.png",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 9 */
                            content:"<div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <div class=\"ProductPurchaseButtons__button__1Vwwn\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_PISTOL_SEMIAUTO')\" type=\"button\">             <span class=\"Button__text__2C2ug\">$40.00 Buy</span>         </button>     </div></div><br><div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <br>     <div class=\"ProductPurchaseButtons__button__ammo\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_PISTOL_SEMIAUTO',1)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"cattermanammo\">$10 Buy ammo</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__back\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"back\" onclick=\"index(2)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"back\">Back to index</span>         </button>     </div></div>",
                            background:"http://phoenix-rp.co.uk/img/steady/page9.png",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 10 */
                            content:"<div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <div class=\"ProductPurchaseButtons__button__1Vwwn\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_PISTOL_MAUSER')\" type=\"button\">             <span class=\"Button__text__2C2ug\">$45.00 Buy</span>         </button>     </div></div><br><div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <br>     <div class=\"ProductPurchaseButtons__button__ammo\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_PISTOL_MAUSER',1)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"cattermanammo\">$10 Buy ammo</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__back\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"back\" onclick=\"index(2)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"back\">Back to index</span>         </button>     </div></div>",
                            background:"http://phoenix-rp.co.uk/img/steady/page10.png.",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 11 ad */
                            content:"<img class = \"ad\" src=\"http://phoenix-rp.co.uk/img/steady/page11.png\" alt=\"gun\" tabindex=\"0\">",
                            background:"http://phoenix-rp.co.uk/img/steady/background.jpg",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 12 */
                            content:"<div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <div class=\"ProductPurchaseButtons__button__1Vwwn\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_REPEATER_CARBINE')\" type=\"button\">             <span class=\"Button__text__2C2ug\">$60.00 Buy</span>         </button>     </div></div><br><div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <br>     <div class=\"ProductPurchaseButtons__button__ammo\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_REPEATER_CARBINE',1)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"cattermanammo\">$15 Buy ammo</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__back\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"back\" onclick=\"index(2)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"back\">Back to index</span>         </button>     </div></div>",                            
                            background:"http://phoenix-rp.co.uk/img/steady/page12.png",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 13 */
                            content:"<div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <div class=\"ProductPurchaseButtons__button__1Vwwn\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_REPEATER_WINCHESTER')\" type=\"button\">             <span class=\"Button__text__2C2ug\">$63.00 Buy</span>         </button>     </div></div><br><div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <br>     <div class=\"ProductPurchaseButtons__button__ammo\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_REPEATER_HENRY',1)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"cattermanammo\">$15 Buy ammo</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__back\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"back\" onclick=\"index(2)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"back\">Back to index</span>         </button>     </div></div>",                            
                            background:"http://phoenix-rp.co.uk/img/steady/page13.png",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 14 */
                            content:"<div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <div class=\"ProductPurchaseButtons__button__1Vwwn\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_REPEATER_EVANS')\" type=\"button\">             <span class=\"Button__text__2C2ug\">$63.00 Buy</span>         </button>     </div></div><br><div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <br>     <div class=\"ProductPurchaseButtons__button__ammo\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_REPEATER_EVANS',1)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"cattermanammo\">$15 Buy ammo</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__back\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"back\" onclick=\"index(2)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"back\">Back to index</span>         </button>     </div></div>",                            
                            background:"http://phoenix-rp.co.uk/img/steady/page14.png",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 15 */
                            content:"<div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <div class=\"ProductPurchaseButtons__button__1Vwwn\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_REPEATER_HENRY')\" type=\"button\">             <span class=\"Button__text__2C2ug\">$65.00 Buy</span>         </button>     </div></div><br><div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <br>     <div class=\"ProductPurchaseButtons__button__ammo\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_REPEATER_HENRY',1)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"cattermanammo\">$15 Buy ammo</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__back\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"back\" onclick=\"index(2)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"back\">Back to index</span>         </button>     </div></div>",                            
                            background:"http://phoenix-rp.co.uk/img/steady/page15.png",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 16 */
                            content:"<div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <div class=\"ProductPurchaseButtons__button__1Vwwn\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_RIFLE_VARMINT')\" type=\"button\">             <span class=\"Button__text__2C2ug\">$35.00 Buy</span>         </button>     </div></div><br><div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <br>     <div class=\"ProductPurchaseButtons__button__ammo\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_RIFLE_VARMINT',1)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"cattermanammo\">$10 Buy ammo</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__back\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"back\" onclick=\"index(2)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"back\">Back to index</span>         </button>     </div></div>",
                            background:"http://phoenix-rp.co.uk/img/steady/page16.png",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 17 */
                            content:"<div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <div class=\"ProductPurchaseButtons__button__1Vwwn\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_RIFLE_SPRINGFIELD')\" type=\"button\">             <span class=\"Button__text__2C2ug\">$55.00 Buy</span>         </button>     </div></div><br><div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <br>     <div class=\"ProductPurchaseButtons__button__ammo\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_RIFLE_SPRINGFIELD',1)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"cattermanammo\">$20 Buy ammo</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__back\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"back\" onclick=\"index(2)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"back\">Back to index</span>         </button>     </div></div>",
                            background:"http://phoenix-rp.co.uk/img/steady/page17.png",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 18 */
                            content:"<div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <div class=\"ProductPurchaseButtons__button__1Vwwn\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_RIFLE_BOLTACTION')\" type=\"button\">             <span class=\"Button__text__2C2ug\">$65.00 Buy</span>         </button>     </div></div><br><div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <br>     <div class=\"ProductPurchaseButtons__button__ammo\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_RIFLE_BOLTACTION',1)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"cattermanammo\">$20 Buy ammo</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__back\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"back\" onclick=\"index(2)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"back\">Back to index</span>         </button>     </div></div>",
                            background:"http://phoenix-rp.co.uk/img/steady/page18.png",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 19 */
                            content:"<div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <div class=\"ProductPurchaseButtons__button__1Vwwn\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_SNIPERRIFLE_ROLLINGBLOCK')\" type=\"button\">             <span class=\"Button__text__2C2ug\">$75.00 Buy</span>         </button>     </div></div><br><div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <br>     <div class=\"ProductPurchaseButtons__button__ammo\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_SNIPERRIFLE_ROLLINGBLOCK',1)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"cattermanammo\">$30 Buy ammo</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__back\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"back\" onclick=\"index(2)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"back\">Back to index</span>         </button>     </div></div>",
                            background:"http://phoenix-rp.co.uk/img/steady/page19.png",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 20 */
                            content:"<div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <div class=\"ProductPurchaseButtons__button__1Vwwn\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_SNIPERRIFLE_CARCANO')\" type=\"button\">             <span class=\"Button__text__2C2ug\">$70.00 Buy</span>         </button>     </div></div><br><div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <br>     <div class=\"ProductPurchaseButtons__button__ammo\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_SNIPERRIFLE_CARCANO',1)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"cattermanammo\">$20 Buy ammo</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__back\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"back\" onclick=\"index(2)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"back\">Back to index</span>         </button>     </div></div>",
                            background:"http://phoenix-rp.co.uk/img/steady/page20.png",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 21 ad */
                            content:"<img class = \"ad\" src=\"http://phoenix-rp.co.uk/img/steady/page21.png\" alt=\"ad\" tabindex=\"0\">",
                            background:"http://phoenix-rp.co.uk/img/steady/background.jpg",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 22*/
                            content:"<div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <div class=\"ProductPurchaseButtons__button__1Vwwn\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_SHOTGUN_SAWEDOFF')\" type=\"button\">             <span class=\"Button__text__2C2ug\">$25.00 Buy</span>         </button>     </div></div><br><div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <br>     <div class=\"ProductPurchaseButtons__button__ammo\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_SHOTGUN_SAWEDOFF',1)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"cattermanammo\">$10 Buy ammo</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__back\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"back\" onclick=\"index(2)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"back\">Back to index</span>         </button>     </div></div>",
                            background:"http://phoenix-rp.co.uk/img/steady/page22.png",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 23*/
                            content:"<div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <div class=\"ProductPurchaseButtons__button__1Vwwn\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_SHOTGUN_DOUBLEBARREL')\" type=\"button\">             <span class=\"Button__text__2C2ug\">$33.00 Buy</span>         </button>     </div></div><br><div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <br>     <div class=\"ProductPurchaseButtons__button__ammo\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_SHOTGUN_DOUBLEBARREL',1)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"cattermanammo\">$10 Buy ammo</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__back\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"back\" onclick=\"index(2)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"back\">Back to index</span>         </button>     </div></div>",
                            background:"http://phoenix-rp.co.uk/img/steady/page23.png",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 24*/
                            content:"<div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <div class=\"ProductPurchaseButtons__button__1Vwwn\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_SHOTGUN_PUMP')\" type=\"button\">             <span class=\"Button__text__2C2ug\">$40.00 Buy</span>         </button>     </div></div><br><div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <br>     <div class=\"ProductPurchaseButtons__button__ammo\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_SHOTGUN_PUMP',1)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"cattermanammo\">$10 Buy ammo</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__back\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"back\" onclick=\"index(2)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"back\">Back to index</span>         </button>     </div></div>",
                            background:"http://phoenix-rp.co.uk/img/steady/page24.png",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 25*/
                            content:"<div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <div class=\"ProductPurchaseButtons__button__1Vwwn\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_SHOTGUN_REPEATING')\" type=\"button\">             <span class=\"Button__text__2C2ug\">$43.00 Buy</span>         </button>     </div></div><br><div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <br>     <div class=\"ProductPurchaseButtons__button__ammo\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_SHOTGUN_REPEATING',1)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"cattermanammo\">$10 Buy ammo</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__back\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"back\" onclick=\"index(2)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"back\">Back to index</span>         </button>     </div></div>",
                            background:"http://phoenix-rp.co.uk/img/steady/page25.png",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 26*/
                            content:"<div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <div class=\"ProductPurchaseButtons__button__1Vwwn\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_SHOTGUN_SEMIAUTO')\" type=\"button\">             <span class=\"Button__text__2C2ug\">$45.00 Buy</span>         </button>     </div></div><br><div class=\"ProductPurchaseButtons__buttons__14Q7z\">  <br>     <div class=\"ProductPurchaseButtons__button__ammo\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" onclick=\"Buy('WEAPON_SHOTGUN_SEMIAUTO',1)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"cattermanammo\">$10 Buy ammo</span>         </button>     </div>  <div class=\"ProductPurchaseButtons__button__back\" tabindex=\"0\">         <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"back\" onclick=\"index(2)\"type=\"button\">             <span class=\"Button__text__2C2ug\" id=\"back\">Back to index</span>         </button>     </div></div>",
                            background:"http://phoenix-rp.co.uk/img/steady/page26.png",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 28 ad */
                            content:"<img class = \"ad\" src=\"http://phoenix-rp.co.uk/img/steady/page27.png\" alt=\"ad\" tabindex=\"0\">",
                            background:"http://phoenix-rp.co.uk/img/steady/background.jpg",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                        {   /* 27 back-side*/
                            content:"<div>  <img class = \"ad\" src=\"http://phoenix-rp.co.uk/img/steady/page28.png\" alt=\"ad\" tabindex=\"0\">  <p class=\"credits\">Made by Steady and Erratic. RIP Depth.</p></div>",
                            background:"http://phoenix-rp.co.uk/img/steady/leather.jpg",
                            backgroundColor:"#353535",
                            color:"white",
                        },
                    ],
                },
                edit:(url.searchParams.get("edit") != null),
            })
            bookIsOpen = true
        } else if (event.data.value === false) {
            if (bookIsOpen) {
                StopBook()
            }
        }
    } else if( event.data.func != null ) {
        //call func
        var ret = window[event.data.func](event.data.args)
        if( event.data.ret != null ) {
            Post(event.data.ret,ret)
        }
    } else if( event.data.var != null ) {
        if( event.data.ret != null ) {
            //get var
            Post(event.data.ret,window[event.data.var])
        } else {
            //set var
            window[event.data.var] = event.data.value
        }
    }
})

$('.Button__btn__1bc-t Button__black__h0BRc').bind(($.isTouch) ? 'touchend' : 'click', zoomHandle);

function zoomHandle(e) {
    console.log("hi")


}

$(".Button__btn__1bc-t Button__black__h0BRc").click(function() {
    console.log("hi2")
  });

$(document).keydown(function(e){

    var previous = 37, next = 39, close = 27, close2 = 8;

    switch (e.keyCode) {
        case previous:

        $('.flipbook').turn('previous');
        break;

        case next:

        $('.flipbook').turn('next');            
        break;
        
        case close:
            Post('http://bookv2/close')
        break;

        case close2:
            Post('http://bookv2/close')
        break;
    }

});


function Buy(weapon,isammo) {
    var d = {}
    d.weapon = weapon;
    if (isammo == null) {
        d.isammo = 0
    } else {
        d.isammo = isammo;
    }
    Post('http://bookv2/purchaseweapon',d)
}

Post = function(url,data) {
    var d = (data ? data : {});
    $.post(url,JSON.stringify(d));
  };

/*
//debug
/*
//var debug = true
function DebugInit(debug) {
    document.getElementById("debugonly").classList.toggle("off",true)
    var url = new URL(window.location.href);
    //debug = url.searchParams.get("debug") != null
    if( !debug ) { return }
    var debugonly = document.getElementById("debugonly")
    if( debugonly != null ) { debugonly.classList.toggle("off",false) }
    /////////////////////////////////////
    /*fire it in debug mode here*/
    //Init()
    /*StartBook(

        {
            data:{
                pages:[
                    {
                        content:"<p style=\"text-align: center;\"><span style=\"font-size: 48px;\"><strong><br></strong></span></p><p style=\"text-align: center;\"><span style=\"font-size: 48px;\"><strong><br></strong></span></p><p style=\"text-align: center;\"><span style=\"font-size: 48px;\"><strong><br></strong></span></p><p style=\"text-align: center;\"><span style=\"font-size: 48px;\"><strong><br></strong></span></p><p style=\"text-align: center;\"><span style=\"font-size: 48px;\"><strong>START YOUR BOOK</strong></span><br></p>",
                        background:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0QEBAQEA4VFhEPEA8VFRAQFxUVEBAQGBUYGBYVFRUaKCghGBolHhkVIjMhJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGhAQGyslHyU2LS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIARwAsgMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAQIEBQYAB//EAEQQAAIBAgQBCAUJCAEDBQAAAAECAAMRBBIhMQUGEyI0QVFxsjJhcoGRFSMzQlNzkrHRFFJUocHC4fBiBxaCJENEdKL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQMCBAX/xAApEQEAAQQCAQQABgMAAAAAAAAAAQIDETEhMhIEIkFRExQzYZHxcYHw/9oADAMBAAIRAxEAPwBsUCcI+kVBBZcw/dva/vnsfLNAjgJYsmGuQAv0bkPmb0wzWFr6kjL/AJ2h6NHB5VJILEUMwJYWJI5y1v8ARCqkCKBLGgmH5tS1s9jcXbfnALWvoAv9d7R9elhslQqRnC0ygBJuc1nG57O+23vIVoEcBLVaGFzVRmBUGjkNzYg+n7v90i4ujhQjmmRmGXJqTfU3v6/8e+ZFVaLllsKOF5xQSAh5wXBJIs3RJ8Rp/oJc1PCWBAGqU9CzaMb5tj4RlcKfLOyy2xFLDZKhUjMFplACTc5rONz2d9tveSGjg9TcAhXIW7WJB6I3vqIyYUuWJaW1Klhjmvl+kqW6TXyaZbDtFrm/fYa7Rz4fC3azCwFS3SN/qFbd+hf3i0ZMKYiNIlxQo4Wwz22obM2Y3Pzlx2Hf3fE9Uo4TMoU6dElixAtnUEanfLmP+6MphSkRpEtuaoFdlzWa4zEC4Wpbdu8J37xKdLClmuQEDsASxzZAvRIHbc3Pw99FSRGkS8TD4Kwu4vkGl2y59Lg7dv5yKKeHD2NsmShrc+kWQVO3exfu227wqzEk3iKUgRzVsvT1vc+mwF9T9XL3e+QzCEiRZ0oeJL4caQqA1RdLNffextt67SKBHgSKuVqYHuH0g7GsafN2I8c35+qCd8Pl6IW5D/VOhyKFtcfvZtfz3lcBHWMCwd8NakAB/wC1nIB2F83idto9Dh7PtfnKuW6t6BU5O+2vZKVFxNhcpft3t2/4hAuI11T1bkXt+V/fIuF874O5ygWOewIa+oXL2bXzdt48Pg82wygndW2y9vvvKMrWtoVuVW47A/bbTURMmJ7029e/r/n/ACgW5OH5ykR6ARc4Ib0+lc7H/jH12w9gEA9KlfQ3yi+bf3fGVb89fohLWHpE3DXN9uzbtioK19clte+/bb+n8/cFpSbDZRcDN09w22cW7P3b/wCO3s2GCgWBI5y5s2pAulrjYkW7N9u6rK1raFc1/wDxtpp398RxX6NsnbcG9t9LH1CBaI2Hz1b5cpboXViLWNtLbbE+Hbe8SpUw4Ayqt+bX6p9PJUvv/wAub/28rAK9jcJfMLb2y5db+u8awr30yWsN76G2p+MC1pNhMouOkBS3DWJ0z9n9DG4V8IAM63IdwTY2NOzEG3jlFpV2ra3yjQ2IvvfQ69wvGMMR3IfXqP5f7tAtEq4bQFV9EXJU3zdutj/WDz4YMmgy80ge4NuczDMR7r/GV9qtzcLaxsRfQ6WHr7fgO/QR5/TRPXv6v8/AQLLFvhubtTHSIO4Nx0hax8LwtapgvnMoGt8vRb90X7Ph3Hu3lKvPXGYLbtK300Pf67QhEINj3pZ6nNAZGK5dGBQAa79+shmPIjTKGTo6dCHgR4EQCPAhTgI9REUQgEBQI8CUjcrOGq2U4gXva6rUZPxAWI9Y0l3h6iOqujBlYXDKbqw7wZImJWaZjcHgRwEqsdylwFCo1KrXKumW683Va1wGGqqRsR2w3CuO4PFMyUKuZlXMRkqLZb2vdgI8oXwqxnCxAi2lZxHlFgcNU5qtWyvYHLkqtodtVUiApcr+GMyouJOZ2Cgc1WF2JsBcr3yeUHhVvC6tOtCWiWlQy0QiVGJ5WcNpu9N8QQ9NmVhzdY2YGxFwtjr3SXwvi+FxQc0KmcIQG6LrYm9vTAvsZMws0VRGcJREYRBcT4lh8MoevUCAmwvcsx7lUXJ9wkXhnHsHiiVo1gzAXyEMrW7wGAuPCXMaTxnGcJhEYRH4moqIzubKiszGxNlAuTYanSUg5W8NJsMRv306wHxKxMxBFMzqFowjCI+jWSoodGDK2zKbg++cwlQEiMIhSIMiAydFiwCKIRRGqIRRAcogOK4Z6uHrU0NnqUqirfQZipAueySlETEM6oxppncKSqE5QzdgzdkSsbYHgvEMFh6ZwuOwZV7vmdqYLEE6E/WFtgVvsCJveE08OtGmMPl5m3Ryagi+pv2m9731ve8yWP4/Wq0HoV+F1TWZWWwRjTD7B10J030vtvNByN4fVw+ERKos5Z2K/uBjcA+vt98yp3htcjjMspxjF0KPFq716JqpkpjmwquSTRp2OVtNJqOS2Pwdc1Th8GaJphAxanTQsGvYAoTf0fylFxCvXw3Fq2IGErVEyIo5tHIN6SDRgCNCDNLwLj1TFOyNg61EKubNWDANqBYXA1ina19Y4+I+RuN8Pw70q1R6FNnFGpZ2RS4sptZiL6Si/wCn/D8O+EWo9Cmzis9nZFLixFrMRfSajiak0K4AuTRqgAaknIdAJSf9PqFRMEFqIyNztQ5XUq1tNbHWdTHucRPslpLTrRZ06ZvMKHEcDh8fjzjKYdWrVQgKK9mFRr6NtpNryaxmCr03qYSkETnMjWRUu4UHZd9GH85U8lcLUXiHEmekwVqj5WdWCt86x6JIsdO6a8LOKIa3ZjX+GG4lQXEcap0qozU6VEEI2qmyM+o8SPGwg+V+Gp4fGcPrUUVGerZsgChsr0xqBpqHYH1SXylwmJw+OpcQo0WqoEy1KaAlhoVOgubEEa20K67yJV/aOJ4vDP8As1Slh8K2YtVBBY5lYgX3JyqLC9tSZzPzHy7p+J+MNRx4f+lxP/16/kMwfAuJ8Lp4bJiaIerdyfmwzEE9EBzt8dJv+NoThsQACSaFYAAXJJQ2AHaZl+CcENbhbUXplKrNVK51KurhroTfW23uJnVWc8ObcxFPP2d/0/w9VcM5dSFerdA3aMoBYeo237bTSMJT8jcTWfDCnWpur0Dk+cVlzJ9Ui+9vR9w75dsJ1R1hnc7yAwg2EMwg2E6cB2nRbToBVEKojFEKogPUQiiF4dTDVqKsLhqtIEd4LAET0H5AwX2C/Fv1nFVcUtKLc16efCOAh8fTVa1VVFlWrUAHcAxAEEJ04ngoizhJfCqSvWpKwurOAR3iJIjM4RZ03vyJhPsR8T+sxvFaSpXqqosqsQB3Cc01xU0rtTRGZRJ0WavgHDMPUoK70wWJfU37GMtVWIy5oomqcQyc6b35Ewn2I+J/WJ8iYT7EfE/rOPxYa/l6vtgo0y/5U4KlSNIU0C5g97X1tltv4mUJncTmMsaqfGcGERjCbXgnCMNUw9N3pAswa5N9ekZO+QcH9gvxb9ZxNyIaxYqmMvOGEEwnpf8A2/gvsF+LfrKXlZwnDUaAenSCtzii4vtYyxciZwlViqIyxLCDYQzCCaaMQ7Totp0AywqiDWFWBN4V9PQ++o+cT1CeYcK+noffUfOJ6fMLu3q9PqXnHFOsV/vqvnMjiSeJ/T1/vqvmMjibRp552WTeC9Yo+2shSdwXrFH21knRTuG/mB431it7Zm+mB411it7ZmVrb0+o6wgzbcl+rJ7T+YzFTa8l+rJ7T+Yzq7pnY7B8peIVaAp82wGYve4B2tbfxlF/3Di/3x+FZZcs9qPjU/tmYiimJpLtdUVziUnH8Qq18vOMDlvawA3tfbwEiR0QzRjMzO275OdVpeDeYyDyo4pXoNTFJgMwe9wDsRbeTuTvVaXg3mMpeW/pUfZf8xMIjNb2VTMW+P2Vp5TY37QfhWQ+I8ZxNdMlRgVuDYKBqPCRWgmm0Uw8k11T8gsIJoZoJp05CnRZ0AywqwawqwJvC/p6H31HzienTzLhf09D76j5xPTZhd29Xp9S854n9PX++q+YyOJJ4n9PX++q+YyOJtGnnnZZN4N1ij7ayEJN4N1ij7ayTop3DfzA8a6xW9szfTA8a6xW9szK1t6fUdYQpteS/Vk9p/MZipteS/Vk9p/MZ1c0zsdkHlntR8an9sy81HLLaj41P7ZmJbfVze7ySJFnTtm3XJ3qtLwbzGUvLb0qPsv8AmJdcneq0vBvMZS8tvSo+y/5iYU93rr/S/hmGgmhWg2m7xgtBNDNAtKBzos6AVYZYFYZYE3hf09D76l5xPTZ5lwv6eh99S84npswu7ev0+pedcT+nr/fVfMZHEkcT+nr/AH1XzGRxNo0807KJN4N1ij7ayFJvBusUfbWSdFO4b+YHjXWK3tmb6YHjXWK3tmZWtvT6jrCFNryX6sntP5jMVNryX6sntP5jOrmmdjsNxbha4jJdyuTNtbW9v0lJxPk+lGk9QVGJW2hAsbkD+sueM8V/Z8nzebPm7bWtb1HvlHxHlDz1J6fM2zW1zXtYg7W9U5o8v9Nbn4fOdqGcZ04zZ5G65O9WpeDeYxOMcHXElCzlcgI0A1vb9IvJ3q1LwbzGM41xn9mKDm82cMfSta1vUe+efny4e72+EeWlFxrk8lCi1QVGJBUWIFtTaZtpoeL8oefpGlzOW5U5s19jfa0zzTanOOXkueOfaE0C0M0C07ZhzosSAVYZYFYZYE3hf09D76l5xPTZ5lwv6eh99S84npswu7ev0+pedcT+nr/fVfMZHEkcT+nr/fVfMZHE2jTzTssm8G6xR9tZCk3g3WKPtrJOincN/MDxrrFb2zN9MDxrrFb2zMrW3p9R1hCm15L9WT2n8xmKm15L9WT2n8xnVzTOx2QeWW1Hxqf2zMTT8stqPjU/tmYlt9XN7vJJxnTjO2bdcnerUvBvMZTctfSo+y/5iXPJ3q1LwbzGU3LX0qPsv+YmFPd66/0v4ZhoNoRoNpu8YTQLQzQLShk6dEgFWFWBWGWBO4X9PQ++o+cT02eY8L+noffUvOJ6dMLu3r9PqXnXE/p6/wB9V8xkcS2x/B8U1aqy0SQ1WoQbrqCxIO8B8iYv7Bviv6zSKow8801Z0giTeDdYo+2shspBIO4JBHcRJnBusUfbWWdJTuG/mB411it7Zm+mB411it7ZmVrb0+o6whTa8l+rJ7T+YzFTa8l+rJ7T+Yzq5pnY7IPLLaj41P7ZmJp+WW1Hxqf2zMS2+rm93kk6dOnbNuuTvVqXg3mMpuWvpUfZf8xLnk71al4N5jK7lXgK1VqRp0y2VXva2lyO+YU93rrjNrj9mQMG0tDwPGfYN8V/WRsZwzEUlzVKRVb2ubb+6bZh5Zpn6V7QLQrQTTpyZEnToD1hlgFhlgTeGuBWokmwFWkSTsAGFyZ6J8rYT+Ip/jX9Z5msIs4qo8mtu5ND0j5Vwv8AEU/xrO+VML/EU/xrPOhHicfhQ7/MT9DYog1HIOhdyCNiLmH4S6rXpMxAAcEk6AD1mQxFE1xwxzzl6D8qYX+Ip/jWYrizq1eqykEFzYjUEeoyHOnFNHi7ruzXGCzXcncdQTDqr1UVgX0ZgD6R7DMjOlqpzGHNFfjOWh5V4qlUFLJUVrF75SDbbe0zs6dLTGIwV1eU5dEixJXLZcCx+HTD01asgYBrqzKCOkdxJ/yrhf4in+NZ56Y0zObcS3i/MRjD0T5Wwn8RT/Gv6yk5XY+hUw4WnWRm5xTZWUm1jrYTJNBtEW4icpVfmYxgNoFoVoJpqwMnRJ0BywqwKwqmAdYRYFTCqYBBHiDEeJFPnRBOv3D3d8B06U2Gw2LWmoDEMcgJZg5uEALtmuAC1yQutgLWJNj5MYGZs91+cIpnIBb53KLgX+w7f3pMrhZTpXNTxa5sr3GUKq9C6/RrmBI1NhVazGxuBpBtSx2XSqQ5SgCQKbKrBW5xlU2BJYi99Lbai0ZMLWdI1cVOcpWBKDPmKkCzHKFJBOq2Lnt2Eh1aGL1ZXIYogAGRgrNUZqhCtYEgZFBJta/vuTC1iRlItazDUaX0Gaw1YDsBN9I4whDGmKY0wGNBtHtBtKgbQTQjQTQGTp06AqmEUwKmFUwDKYVTAKYVTAMDHiCUx4MgIIsaIsKbiKwRHc7IrMbdwFz+UhUeNUGDN0gihellJuShdgALnogG/cQR2Se6BgQRcHcHYiDfC0m3QHpZtt2tlv8ADSFjAVXiuHXOWewpkBiVa1yzLYG3S1VhpfYw1LFU2YorXZQLix0uARfuuGFu/XuMQ4Wkb9Aam99je7Nv4u/4j3x1Kgqs7D0qjBmJ3JAAA8AABHJwjjilA3s5NnKGyubMACb2G1mXXbWEoYxHd0W96YBJIIXVnXQnfVG1HdOp4KioAWmoAtaw29G3kT8I7o+lh0S5VQMxubdp1P8AU/GOTgWNMWNMIQxpimMJgNYwTGPYwbGVA2MG0e0E0Bs6JOgcphVMCphFMAymFUwCmEUwDqY8GBUwgMAWNwoq82GVWVagLZhfogHbxOUeF/CRjg8UAQlYDPULG5vlDGozZDbvanptZD362IMcDJh1lE4jh61RqWRwq06iOQc13Kupy6bDLm3vqR3QbYbF3dlr6kVMqtYorEVMv1dgWpfg9ZvYgzrxgyg/s2IKMDV6XNMF7ucYvq2moUFAPA3v2piqOLKVBTZQzMcpJOVEs2WygaEdC+pvr6hLC868mDKPh6dUO7O91N7LuAMxt2C3Ry+8nuEhYXAVlJJKrzjKX5tiWbWozNcgaksi+pV32AtbxLy4MqutQxpWplqrmeo2Ukm1On08pFh6WtMEbdE763KtHEc7mNToZycl9Mvzlha3dzXbvm7hecTGkyYMkJjCYpMYTK5NYwbGOYwbGUMYwbRzGDYwEvOiRIHAxxcKCSQABck6ADvJjAYlamHVlJtmBFxuPCAVMVTJsKi3uBbML3K5gPErc+GsKcQgtd1GYEi5GoAuSO8W1lYnDbZfnDZXpsAB2qip7gQDtbeSBg7qgLA5KbobroysANRf1DQ3H9JyvCYuOo/ap2fWXtUuP/yGPgCYWliqTAlaikKFJIYEAMLrfuuCDK8cPvkJqElCpudSSFC3JNztm9eu/eajgcq1Fzm1Tm/cVpqnfbXID2e+OV4TP2ukLk1EsL3JYaWFz8BrHfttG9udS/R0zLfUXHxAJ90qxwVLMOcbpGuR/wATVphGt8CffJTYDMWJc9KxIAsL821MnUnUhhr/AMRvvJycJtLFU2NlqKTlzWVgTlvbNbuv2xwxFOwOdbNaxuLN2Cx7ZBwvDwjl85LFHU6aXZ85IBvbXs8L3tOocNC0qNI1CwoOGBI1Nr5QfC4136IvcxycJoxlG4HOpclQBmFyWF1HiQCR4RTi6V8vOLmzBcuYXzkXC27z3SFR4cVKWqaU2RgLd1NkNyDc3zeAsNN7uqcOQsHuc3PJUv35dlPq395vvHJwkpjaLWy1UOYBhZlN1JygjvF9L98RcdQO1ZDdQ2jLqpbKD4FtL9+khUuF5VRecNkp0k29Lm3DKWuTfa3/AJN6gAvwRWRkNQ2dEUkCxDJVaqrLrYG7H4DWOV9qzOLpWZudTKhys2YWVu4nsOo0jTiqViecWwcoTmFg4Nit/wB6/ZI9fAhqb085Gcg3tt0Qu3gIyvgAyFM5F6tR77+kzMRvt0j6vUdRLynCRUxlEXvVQWFzdgLC9rn1X0g3xlEaGqg9Pdl+p6f4e3ukOvwrNmtVIzKRoNiWBzb+q3532jcTwsPvUP8A8q1r7Vr37ey+m0cmKUs4ul9qn1frD63o/HsgqmMpC96qCwJ1YCwFrn3XHxEC/DxmLK1tVIFgctkyHffTv7e+B+TQAyhzZkrLbXTnLEka99zr39kcnCYtVWvlYGxsbEGx7j64jGDpUspfW+dy1tgt97fn/Pe5LiZXJLxY2dAQR4MGI4GAUGPBgQY8GBoeMYfDUqaBKTdNKbU8QGJWsLfOBwdFIPYI/htHCLQp1K6XFWrUQvdr0lVLgqF3N7bgwOJxuEGGelSZzzjUmWk40w7qOmQ59LN6oThWOwnM00r3+Zq1H5vLmFYMlgt/qkHvnHOGvHl8A8Eo03aqai5hRw9WrluQGZbWBI1trCcVpUqVZCqdBqdGoadzbpC5UNvb1yPwTF06bVBUJC1qFWkWAzZC1ulbtGkdxnFpUqA0ySqU6aBiLFsotmt2S85c8eKXxxKCNTWlRyXp03Jzu18wvazbWj+KDDijRanh8jVlZr53bKFYi1jveQuLYtKroUJstGkpuLdJVsYuNxSPSwyLvSRw3iXJFu/SIjSzMco15bcTGHFGi1PD5GrBzfO7ZcrWtY6G8pbybjMUjUcMg9KktUN4l7i3fpLMacxPErfB8OovhkY0Td6WJZq4ZrU2psctx6Oo/KQuB4ZKgrFqJqGnTBWmCyknNb6usJh+K0hQSizG3MYpGFjYOzhqbeu1v5yLwfFUkFdajsnO0woZQWIIYHYTnnl37cx/3wXhlGnVxSI1OyM7A07t0RYnLm30juM4BaCUrDpGpiQWuekqsuQ22Gh7O+A4ZiaVHFJULE00dulbpFbEA5Y7ivElrUcKuvOUVqK/r9AKb9uiy85Tjxn7/pIxFHCU6KK6WqVMKKq1bsSapY2TKNAtgdYDg/DxWpYgimWdGwuXLmuFZyH0G/RHuhK2OwrUFLXNVMLzK0yuiuGuKofbbskThmPSlSroSQ1R8KVtfZKhL6+Bk5wcZA41RSniK1NBZUcgC5Nh4nWQCZM4ziVq4itUT0XckX0NvCQCZ1GnFW5ITGmcTGmVHXnRJ0BBFEbFEIeDHgwYMUGFFBjwYEGPBgFBjgYIGKDAMDFzTIcp+UVXC1sgLAPTUpakrqz5tbsWHZcWA7QfVLrEcQqJUYZLoo+qpLbKd77asNuztk8odeE4W2admlP8s7gUWJ6Y0OhysATe3o66HvB0EccfXzX5m1OyXv6QuWFywPZZbgKbAk37IynjK2zRCZUtxV7r8w2UipcEHMrArbP+7e5PboL37CShjajnLzeW4DAtcjLpcG3bqf5e5kxKxJjSY0mNJlQpMaTEJjSYHExpM4mNJgcY0ziY0whYk6JA6LGxZQ4GKDGiKJA8GOBgxHCA8GOBg4ohT2AO4BsQdddRqD4xx1Fjsew7EQYMW8BUpouqqAbAXAAOUbDw9UfmjLzrwH5ol428S8B14hMbEgKTGkzohgcTGmdEMI4xJxiGUdOiToH/2Q==",
                        backgroundColor:"white",
                        color:"white",
                    },
                    {
                        content:"<p class=\"no-indent\">anymore. He also started his habit of fasting for long periods of time (he would still do so ten years later, when he was a multi-millionaire). He occasionally used LSD, and became something of a laggard hippie. One of his best friends at Reed was Dan Kottke, who shared his interests in such philosophies.</p><p><img class=\"left-pic zoom-this\">The following year, in 1974, Steve desperately needed money, so he got a job at Atari. Atari was arguably the first video game company: it was created by Nolan Bushnell in 1972, and one of its ␣rst employees was Al Acorn, the inventor of Pong. Steve was hired although he would often call his co-workers names and smell pretty bad. That’s why he was soon moved to the night shift.</p></div><span class=\"page-number\">17</span>",
                        background:"https://i.imgur.com/LKiOlri.jpg",
                        backgroundColor:"",
                        color:"white",
                    },
                    {
                        content:"<p class=\"no-indent\">sat on Apple’s boardof directors for three whole years, from 2006 to 2009. But it’s no wonder he left in 2009: by entering the smartphone market with its Android mobile OS(and its own app store!), Google had become a direct competitor of Apple. This confict of interest was as good a reason for him to leave, as Steve Jobs’shrinking tolerance for what he felt was a plain and simple betrayal.</p><h2>Has Steve changed?</h2><p>Finally, an old debate about Steve’s personality has also re-emerged in2010: has he changed? Although some of his traits, such as his propensity to take the spotlight then and again to unveil insanely great products to theworld, have not changed... People have noticed two minor evolutions in his public persona.</p><p>The first is his increasing habit of communicating by writing emails tocustomers.</p> ",
                        background:"https://i.imgur.com/LKiOlri.jpg",
                        backgroundColor:"#353535",
                        color:"white",
                    },
                    {
                        content:"",
                        background:"https://i.imgur.com/LKiOlri.jpg",
                        backgroundColor:"#353535",
                        color:"white",
                    }

                ],
            },
            edit:(url.searchParams.get("edit") != null),
        }
    )
}*/
console.log("started startbook")

//#endregion


/*
<div class=\"ProductPurchaseButtons__buttons__14Q7z\">
   <div class=\"ProductPurchaseButtons__button__1Vwwn\" tabindex=\"0\">
     <button class=\"Button__btn__1bc-t Button__black__h0BRc\" data-ui-name=\"buyNow\" type=\"button\">
       <span class=\"Button__text__2C2ug\">$250.00 Buy</span>
     </button>
   </div>
 </div>
 <br>

<div class=\"ProductPurchaseButtons__buttons__14Q7z\">
<br>
   <div class=\"ProductPurchaseButtons__button__ammo\" tabindex=\"0\">
     <button class=\"Button__btn__1bc-t Button__black__h0BRc\" id="test" data-ui-name=\"buyNow\" onclick="tyroneisafaggot()"type=\"button\">
       <span class=\"Button__text__2C2ug\" id=\"cattermanammo\">Buy ammo</span>
     </button>
   </div>
 </div>

 
*/

//document.getElementById("cattermanammoamount").input
//document.getElementById("cattermanammo").className = "gay"
