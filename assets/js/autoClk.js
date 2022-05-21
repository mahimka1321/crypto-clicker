/////////////////////////////////////
/* автоклик и визуал дисплея */
/////
///////////////////////////////////
upAc.addEventListener('click', function() {
    if (clk >= autoClk) {
        clk -= autoClk
        upg += 1
        autoClk += 35
        auto.classList.add("autOneOff")
        display.textContent = clk
        document.title = clk + " CriptoCoin"
        upgradeSum.textContent = up
        upgradeAc.textContent = upg
        if (autoClk >= 500) {
            autoClk = 'Куплено'
            block2.classList.add("cerckaUp2")
            upAc2.classList.remove("cerckaUp2")
            cercka1.classList.add("cercka")
        }
        setInterval(()=>{
            display.textContent = clk
            document.title = clk + " CriptoCoin"
            upgradeSum.textContent = up
            upgradeAc.textContent = upg
            clk += 1
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
        }
        , 5000);
        txtColor()
        contentex()
    }
})

upAc2.addEventListener('click', function() {
    if (clk >= autoClk2) {
        clk -= autoClk2
        upg += 3
        autoClk2 = "Куплено"
        auto.classList.remove("autOneOff")
        auto2.classList.add("autOneOff")
        block3.classList.add("cerckaUp2")
        upAc3.classList.remove("cerckaUp2")
        display.textContent = clk
        document.title = clk + " CriptoCoin"
        upgradeSum.textContent = up
        upgradeAc.textContent = upg
        setInterval(()=>{
            display.textContent = clk
            document.title = clk + " CriptoCoin"
            upgradeSum.textContent = up
            upgradeAc.textContent = upg
            clk += 3
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
        }
        , 5000);
        txtColor()
        contentex()
    }
})

upAc3.addEventListener('click', function() {
    if (clk >= autoClk3) {
        clk -= autoClk3
        upg += 4
        autoClk3 = "Куплено"
        auto2.classList.remove("autOneOff")
        auto3.classList.add("autOneOff")
        block4.classList.add("cerckaUp2")
        upAc4.classList.remove("cerckaUp2")
        display.textContent = clk
        document.title = clk + " CriptoCoin"
        upgradeSum.textContent = up
        upgradeAc.textContent = upg
        setInterval(()=>{
            display.textContent = clk
            document.title = clk + " CriptoCoin"
            upgradeSum.textContent = up
            upgradeAc.textContent = upg
            clk += 4
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
        }
        , 5000);
        txtColor()
        contentex()
    }
})

upAc4.addEventListener('click', function() {
    if (clk >= autoClk4) {
        clk -= autoClk4
        upg += 6
        autoClk4 = "Куплено"
        auto3.classList.remove("autOneOff")
        auto4.classList.add("autOneOff")
        block5.classList.add("cerckaUp2")
        upAc5.classList.remove("cerckaUp2")
        display.textContent = clk
        document.title = clk + " CriptoCoin"
        upgradeSum.textContent = up
        upgradeAc.textContent = upg
        setInterval(()=>{
            display.textContent = clk
            document.title = clk + " CriptoCoin"
            upgradeSum.textContent = up
            upgradeAc.textContent = upg
            clk += 6
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
        }
        , 5000);
        txtColor()
        contentex()
    }
})

upAc5.addEventListener('click', function() {
    if (clk >= autoClk5) {
        clk -= autoClk5
        upg += 8
        autoClk5 = "Куплено"
        auto4.classList.remove("autOneOff")
        auto5.classList.add("autOneOff")
        block6.classList.add("cerckaUp2")
        upAc6.classList.remove("cerckaUp2")
        display.textContent = clk
        document.title = clk + " CriptoCoin"
        upgradeSum.textContent = up
        upgradeAc.textContent = upg
        setInterval(()=>{
            display.textContent = clk
            document.title = clk + " CriptoCoin"
            upgradeSum.textContent = up
            upgradeAc.textContent = upg
            clk += 8
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
        }
        , 5000);
        txtColor()
        contentex()
    }
})

upAc6.addEventListener('click', function() {
    if (clk >= autoClk6) {
        clk -= autoClk6
        upg += 9
        autoClk6 = "Куплено"
        auto5.classList.remove("autOneOff")
        auto6.classList.add("autOneOff")
        block7.classList.add("cerckaUp2")
        upAc7.classList.remove("cerckaUp2")
        display.textContent = clk
        document.title = clk + " CriptoCoin"
        upgradeSum.textContent = up
        upgradeAc.textContent = upg
        setInterval(()=>{
            display.textContent = clk
            document.title = clk + " CriptoCoin"
            upgradeSum.textContent = up
            upgradeAc.textContent = upg
            clk += 9
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
        }
        , 5000);
        txtColor()
        contentex()
    }
})

upAc7.addEventListener('click', function() {
    if (clk >= autoClk7) {
        clk -= autoClk7
        upg += 10
        autoClk7 = "Куплено"
        auto6.classList.remove("autOneOff")
        auto7.classList.add("autOneOff")
        block8.classList.add("cerckaUp2")
        upAc8.classList.remove("cerckaUp2")
        display.textContent = clk
        document.title = clk + " CriptoCoin"
        upgradeSum.textContent = up
        upgradeAc.textContent = upg
        setInterval(()=>{
            display.textContent = clk
            document.title = clk + " CriptoCoin"
            upgradeSum.textContent = up
            upgradeAc.textContent = upg
            clk += 10
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
        }
        , 5000);
        txtColor()
        contentex()
    }
})

upAc8.addEventListener('click', function() {
    if (clk >= autoClk8) {
        clk -= autoClk8
        upg += 15
        autoClk8 = "Куплено"
        auto7.classList.remove("autOneOff")
        auto8.classList.add("autOneOff")
        block9.classList.add("cerckaUp2")
        upAc9.classList.remove("cerckaUp2")
        display.textContent = clk
        document.title = clk + " CriptoCoin"
        upgradeSum.textContent = up
        upgradeAc.textContent = upg
        setInterval(()=>{
            display.textContent = clk
            document.title = clk + " CriptoCoin"
            upgradeSum.textContent = up
            upgradeAc.textContent = upg
            clk += 15
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
        }
        , 5000);
        txtColor()
        contentex()
    }
})

upAc9.addEventListener('click', function() {
    if (clk >= autoClk9) {
        clk -= autoClk9
        upg += 25
        autoClk9 = "Куплено"
        auto8.classList.remove("autOneOff")
        auto9.classList.add("autOneOff")
        display.textContent = clk
        document.title = clk + " CriptoCoin"
        upgradeSum.textContent = up
        upgradeAc.textContent = upg
        setInterval(()=>{
            display.textContent = clk
            document.title = clk + " CriptoCoin"
            upgradeSum.textContent = up
            upgradeAc.textContent = upg
            clk += 25
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
        }
        , 5000);
        txtColor()
        contentex()
    }
})


