 ///////////////////////////////////
/*Первый скин*/////////////////////
//////////////////////////////////
skin1.addEventListener('click', function() {
    if (clk >= skinBlr) {
        clk -= skinBlr
        skinBlr = "Куплено"
        up += 10    
        display.textContent = clk
        document.title = clk + " CriptoCoin"
        upgradeSum.textContent = up
        skinBlr2.classList.add("skin")
        cli.classList.add("clickOff")
        bay2block.classList.add("cerckaUp2")
        bay2.classList.remove("cerckaUp2")
        txtColor()
        contentex()
    }
})

///////////////////////////////////
/* клик и визуал дисплея *////////
/////////////////////////////////
click.addEventListener('click', function() {
    clk += up
    display.textContent = clk
    upgradeSum.textContent = up
    document.title = clk + " CriptoCoin"
    if (clk > 999) {
        display.textContent = kFormatter(clk)
        document.title = kFormatter(clk) + " CriptoCoin"
    }
    if (clk > 999999) {
        display.textContent = mFormatter(clk)
        document.title = mFormatter(clk) + " CriptoCoin"
    }
    if (clk > 999999999) {
        display.textContent = bFormatter(clk)
        document.title = bFormatter(clk) + " CriptoCoin"
    }
    style()
    txtColor()
    contentex()
})


click2.addEventListener('click', function() {
    clk += up
    display.textContent = clk
    upgradeSum.textContent = up
    document.title = clk + " CriptoCoin"
    if (clk > 999) {
        display.textContent = kFormatter(clk)
        document.title = kFormatter(clk) + " CriptoCoin"
    }
    if (clk > 999999) {
        display.textContent = mFormatter(clk)
        document.title = mFormatter(clk) + " CriptoCoin"
    }
    if (clk > 999999999) {
        display.textContent = bFormatter(clk)
        document.title = bFormatter(clk) + " CriptoCoin"
    }
    style2()
    txtColor()
    contentex()
})

skin2.addEventListener('click', function() {
    if (clk >= skinDog) {
        clk -= skinDog
        skinDog = "Куплено"
        up += 0    
        display.textContent = clk
        document.title = clk + " CriptoCoin"
        upgradeSum.textContent = up
        skinDog2.classList.add("skin")
        skinBlr2.classList.remove("skin")
        bay3block.classList.add("cerckaUp2")
        bay3.classList.remove("cerckaUp2")
        txtColor()
        contentex()
    } 
})

click3.addEventListener('click', function() {
    clk += up
    display.textContent = clk
    upgradeSum.textContent = up
    document.title = clk + " CriptoCoin"
    if (clk > 999) {
        display.textContent = kFormatter(clk)
        document.title = kFormatter(clk) + " CriptoCoin"
    }
    if (clk > 999999) {
        display.textContent = mFormatter(clk)
        document.title = mFormatter(clk) + " CriptoCoin"
    }
    if (clk > 999999999) {
        display.textContent = bFormatter(clk)
        document.title = bFormatter(clk) + " CriptoCoin"
    }
    style3()
    txtColor()
    contentex()
})

skin3.addEventListener('click', function() {
    if (clk >= skinEfir) {
        clk -= skinEfir
        skinEfir = "Куплено"
        up += 0    
        display.textContent = clk
        document.title = clk + " CriptoCoin"
        upgradeSum.textContent = up
        skinEfir3.classList.add("skin")
        skinDog2.classList.remove("skin")
        bay4block.classList.add("cerckaUp2")
        bay4.classList.remove("cerckaUp2")
        txtColor()
        contentex()
    } 
})

click4.addEventListener('click', function() {
    clk += up
    display.textContent = clk
    upgradeSum.textContent = up
    document.title = clk + " CriptoCoin"
    if (clk > 999) {
        display.textContent = kFormatter(clk)
        document.title = kFormatter(clk) + " CriptoCoin"
    }
    if (clk > 999999) {
        display.textContent = mFormatter(clk)
        document.title = mFormatter(clk) + " CriptoCoin"
    }
    if (clk > 999999999) {
        display.textContent = bFormatter(clk)
        document.title = bFormatter(clk) + " CriptoCoin"
    }
    style4()
    txtColor()
    contentex()
})


skin4.addEventListener('click', function() {
    if (clk >= skinVk) {
        clk -= skinVk
        skinVk = "Куплено"
        up += 0    
        display.textContent = clk
        document.title = clk + " CriptoCoin"
        upgradeSum.textContent = up
        skinVk4.classList.add("skin")
        skinEfir3.classList.remove("skin")
        bay4block.classList.add("cerckaUp2")
        bay4.classList.remove("cerckaUp2")
        txtColor()
        contentex()
    } 
})

click5.addEventListener('click', function() {
    clk += up
    display.textContent = clk
    upgradeSum.textContent = up
    document.title = clk + " CriptoCoin"
    if (clk > 999) {
        display.textContent = kFormatter(clk)
        document.title = kFormatter(clk) + " CriptoCoin"
    }
    if (clk > 999999) {
        display.textContent = mFormatter(clk)
        document.title = mFormatter(clk) + " CriptoCoin"
    }
    if (clk > 999999999) {
        display.textContent = bFormatter(clk)
        document.title = bFormatter(clk) + " CriptoCoin"
    }
    style5()
    txtColor()
    contentex()
})