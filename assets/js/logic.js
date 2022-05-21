///////////////////////////////////
/*анимация выпода денег*/
///////////////////////////////////
function show_image(src, width, height, alt) {
    var visual = document.getElementById('visualcont')
    var img = document.createElement("img")
    img.src = src
    img.width = width
    img.height = height
    img.style.position = 'absolute'
    img.style.transform = `rotate(${this.d = (this.d | 1000) + 90}deg)`
    img.style.left = visual.clientWidth * Math.random() + 'px'
    visual.appendChild(img)
    var m = 100
    let timer = setInterval(function() {
        m = m + 30
        img.style.top = m / +13 + 'px'
        if (m > 10000) {
            clearInterval(timer)
            end()
        }
    })
    function end() {
        visual.removeChild(img)
    }
}

function style() {
    show_image("assets/img/123/btk 1.png", 50, 50, )
}

function style2() {
    show_image("assets/img/dlr.png", 50, 50, )
}

function style3() {
    show_image("assets/img/dog.png", 50, 50, )
}

function style4() {
    show_image("assets/img/efir.png", 50, 50, )
}

function style5() {
    show_image("assets/img/vk.png", 50, 50, )
}


///////////////////////////////////
/* система покупки + система +- счета */
///////////////////////////////////
upOne.addEventListener('click', function() {
    if (clk >= One) {
        clk -= One
        One += 4
        up += 1
        display.textContent = clk
        document.title = clk + " CriptoCoin"           
        upgradeSum.textContent = up
        txtColor()
        contentex()
    }
})

upTwo.addEventListener('click', function() {
    if (clk >= Two) {
        clk -= Two
        Two += 250
        up += 3
        display.textContent = clk
        document.title = clk + " CriptoCoin"           
        upgradeSum.textContent = up
        txtColor()
        contentex()
    }
})

upThre.addEventListener('click', function() {
    if (clk >= Thre) {
        clk -= Thre
        Thre += 550
        up += 4
        display.textContent = clk
        document.title = clk + " CriptoCoin"           
        upgradeSum.textContent = up  
        txtColor()
        contentex()
    }
})

upFor.addEventListener('click', function() {
    if (clk >= For) {
        clk -= For
        For += 650
        up += 6
        display.textContent = clk
        document.title = clk + " CriptoCoin"           
        upgradeSum.textContent = up  
        txtColor()
        contentex()
    }
})

upFive.addEventListener('click', function() {
    if (clk >= Five) {
        clk -= Five
        Five += 700
        up += 7
        display.textContent = clk
        document.title = clk + " CriptoCoin"           
        upgradeSum.textContent = up  
        txtColor()
        contentex()
    }
})

upSix.addEventListener('click', function() {
    if (clk >= Six) {
        clk -= Six
        Six += 850
        up += 10
        display.textContent = clk
        document.title = clk + " CriptoCoin"           
        upgradeSum.textContent = up  
        txtColor()
        contentex()
    }
})

upSeven.addEventListener('click', function() {
    if (clk >= Seven) {
        clk -= Seven
        Seven += 1250
        up += 12
        display.textContent = clk
        document.title = clk + " CriptoCoin"           
        upgradeSum.textContent = up  
        txtColor()
        contentex()
    }
})

upEight.addEventListener('click', function() {
    if (clk >= Eight) {
        clk -= Eight
        Eight += 2750
        up += 14
        display.textContent = clk
        document.title = clk + " CriptoCoin"           
        upgradeSum.textContent = up  
        txtColor()
        contentex()
    }
})

upNine.addEventListener('click', function() {
    if (clk >= Nine) {
        clk -= Nine
        Nine += 6500
        up += 16
        display.textContent = clk
        document.title = clk + " CriptoCoin"           
        upgradeSum.textContent = up  
        txtColor()
        contentex()
    }
})

upTen.addEventListener('click', function() {
    if (clk >= Ten) {
        clk -= Ten
        Ten += 10500
        up += 20
        display.textContent = clk
        document.title = clk + " CriptoCoin"           
        upgradeSum.textContent = up  
        txtColor()
        contentex()
    }
})

upEleven.addEventListener('click', function() {
    if (clk >= Eleven) {
        clk -= Eleven
        Eleven += 13550
        up += 22
        display.textContent = clk
        document.title = clk + " CriptoCoin"           
        upgradeSum.textContent = up  
        txtColor()
        contentex()
    }
})

upTwelve.addEventListener('click', function() {
    if (clk >= Twelve) {
        clk -= Twelve
        Twelve += 17850
        up += 24
        display.textContent = clk
        document.title = clk + " CriptoCoin"           
        upgradeSum.textContent = up  
        txtColor()
        contentex()
    }
})

upThirteen.addEventListener('click', function() {
    if (clk >= Thirteen) {
        clk -= Thirteen
        Thirteen += 25000
        up += 26
        display.textContent = clk
        document.title = clk + " CriptoCoin"           
        upgradeSum.textContent = up  
        txtColor()
        contentex()
    }
})

upFourteen.addEventListener('click', function() {
    if (clk >= Fourteen) {
        clk -= Fourteen
        Fourteen += 34650
        up += 27
        display.textContent = clk
        document.title = clk + " CriptoCoin"           
        upgradeSum.textContent = up  
        txtColor()
        contentex()
    }
})

upFifteen.addEventListener('click', function() {
    if (clk >= Fifteen) {
        clk -= Fifteen
        Fifteen += 75000
        up += 30
        display.textContent = clk
        document.title = clk + " CriptoCoin"           
        upgradeSum.textContent = up  
        txtColor()
        contentex()
    }
})

upSixteen.addEventListener('click', function() {
    if (clk >= Sixteen) {
        clk -= Sixteen
        Sixteen += 125000
        up += 35
        display.textContent = clk
        document.title = clk + " CriptoCoin"           
        upgradeSum.textContent = up  
        txtColor()
        contentex()
    }
})
