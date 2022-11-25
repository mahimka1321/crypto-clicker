///////////////////////////////////
/*конвертор больших чисел*/
///////////////////////////////////
function kFormatter(clk) {
    return Math.abs(clk) > 999 ? Math.sign(clk) * ((Math.abs(clk) / 1000).toFixed(1)) + 'k' : Math.sign(clk) * Math.abs(clk)
}
function mFormatter(clk) {
    return Math.abs(clk) > 999999 ? Math.sign(clk) * ((Math.abs(clk) / 1000000).toFixed(1)) + 'M' : Math.sign(clk) * Math.abs(clk)
}
function bFormatter(clk) {
    return Math.abs(clk) > 999999999 ? Math.sign(clk) * ((Math.abs(clk) / 1000000000).toFixed(1)) + 'B' : Math.sign(clk) * Math.abs(clk)
}

///////////////////////////////////
/*кнопки открытия и закрытия магазинов*/
///////////////////////////////////
var bank = document.getElementById("bankSelector")
var skin = document.getElementById("skinsSelector")
var factory = document.getElementById("factorySelector")
var bankSelect = document.getElementById("bankCls")
var skinSelect = document.getElementById("skinsCls")
var factorySelect = document.getElementById("factoryCls")
var back = document.getElementById("back")
var backTw = document.getElementById("backTw")
var backZw = document.getElementById("backZw")
///////////////////////////////////
/* основнее классы Клика, Дисплея и Апгрейда */
///////////////////////////////////
let click = document.getElementById('click')
let click2 = document.getElementById('skinBlr')
let click3 = document.getElementById('skinDog')
let click4 = document.getElementById('skinEfir')
let click5 = document.getElementById('skinVk')
let display = document.getElementById('display')
let upgradeSum = document.getElementById('upgradeSum')
let upgradeAc = document.getElementById('upgradeAc')
let autoClickOn = document.getElementById('autoClickOn')
let clikPluss = document.getElementById('clikPluss')
///////////////////////////////////
/*счетчик кликов и улучшений*/
///////////////////////////////////

let clk = 0
let up = 1000
let upg = 0
///////////////////////////////////
/*значния цен магазина улучшений*/
///////////////////////////////////
let One = 15
let Two = 500
let Thre = 1250
let For = 15000
let Five = 17500
let Six = 20000
let Seven = 30000
let Eight = 50000
let Nine = 100000
let Ten = 125000
let Eleven = 150000
let Twelve = 250000
let Thirteen = 500000
let Fourteen = 750000
let Fifteen = 1000000
let Sixteen = 3500000
///////////////////////////////////
/*autoClk*/
///////////////////////////////////
let autoClk = 150
let autoClk2 = 1250
let autoClk3 = 1
let autoClk4 = 1
let autoClk5 = 1
let autoClk6 = 1
let autoClk7 = 1
let autoClk8 = 1
let autoClk9 = 1

let skinBlr = 10
let skinDog = 10
let skinEfir = 10
let skinVk = 10
///////////////////////////////////
/*цена + название блока улучшения*/
///////////////////////////////////
let txtSumOne = document.getElementById('txtSumOne')
let txtSumTwo = document.getElementById('txtSumTwo')
let txtSumThre = document.getElementById('txtSumThre')
let txtSumFor = document.getElementById('txtSumFor')
let txtSumFive = document.getElementById('txtSumFive')
let txtSumSix = document.getElementById('txtSumSix')
let txtSumSeven = document.getElementById('txtSumSeven')
let txtSumEight = document.getElementById('txtSumEight')
let txtSumNine = document.getElementById('txtSumNine')
let txtSumTen = document.getElementById('txtSumTen')
let txtSumEleven = document.getElementById('txtSumEleven')
let txtSumTwelve = document.getElementById('txtSumTwelve')
let txtSumThirteen = document.getElementById('txtSumThirteen')
let txtSumFourteen = document.getElementById('txtSumFourteen')
let txtSumFifteen = document.getElementById('txtSumFifteen')
let txtSumSixteen = document.getElementById('txtSumSixteen')

let txtSumAutoClick = document.getElementById('txtSumAutoClick')
let txtSumAutoClick2 = document.getElementById('txtSumAutoClick2')
let txtSumAutoClick3 = document.getElementById('txtSumAutoClick3')
let txtSumAutoClick4 = document.getElementById('txtSumAutoClick4')
let txtSumAutoClick5 = document.getElementById('txtSumAutoClick5')
let txtSumAutoClick6 = document.getElementById('txtSumAutoClick6')
let txtSumAutoClick7 = document.getElementById('txtSumAutoClick7')
let txtSumAutoClick8 = document.getElementById('txtSumAutoClick8')
let txtSumAutoClick9 = document.getElementById('txtSumAutoClick9')


let txtSumskinBlr = document.getElementById('txtSumskinBlr')
let txtSumskinDog = document.getElementById('txtSumskinDog')
let txtSumskinEfir = document.getElementById('txtSumskinEfir')
let txtSumskinVk = document.getElementById('txtSumskiVk')
///////////////////////////////////
/*добавления счечика улучшения*/
///////////////////////////////////
let upOne = document.getElementById('upOne')
let upTwo = document.getElementById('upTwo')
let upThre = document.getElementById('upThre')
let upFor = document.getElementById('upFor')
let upFive = document.getElementById('upFive')
let upSix = document.getElementById('upSix')
let upSeven = document.getElementById('upSeven')
let upEight = document.getElementById('upEight')
let upNine = document.getElementById('upNine')
let upTen = document.getElementById('upTen')
let upEleven = document.getElementById('upEleven')
let upTwelve = document.getElementById('upTwelve')
let upThirteen = document.getElementById('upThirteen')
let upFourteen = document.getElementById('upFourteen')
let upFifteen = document.getElementById('upFifteen')
let upSixteen = document.getElementById('upSixteen')

let upAc = document.getElementById('upAc')
let upAc2 = document.getElementById('upAc2')
let upAc3 = document.getElementById('upAc3')
let upAc4 = document.getElementById('upAc4')
let upAc5 = document.getElementById('upAc5')
let upAc6 = document.getElementById('upAc6')
let upAc7 = document.getElementById('upAc7')
let upAc8 = document.getElementById('upAc8')
let upAc9 = document.getElementById('upAc9')

let skin1 = document.getElementById('bay')
let skin2 = document.getElementById('bay2')
let skin3 = document.getElementById('bay3')
let skin4 = document.getElementById('bay4')
let block2 = document.getElementById('upAc2block')
let block3 = document.getElementById('upAc3block')
let block4 = document.getElementById('upAc4block')
let block5 = document.getElementById('upAc5block')
let block6 = document.getElementById('upAc6block')
let block7 = document.getElementById('upAc7block')
let block8 = document.getElementById('upAc8block')
let block9 = document.getElementById('upAc9block')

var auto = document.getElementById("cirka1")
var auto2 = document.getElementById("cirka2")
var auto3 = document.getElementById("cirka3")
var auto4 = document.getElementById("cirka4")
var auto5 = document.getElementById("cirka5")
var auto6 = document.getElementById("cirka6")
var auto7 = document.getElementById("cirka7")
var auto8 = document.getElementById("cirka8")
var auto9 = document.getElementById("cirka9")


var cercka1 = document.getElementById("cercka1")


///////////////////////////////////
/*покупка скинов*/////////////////
/////////////////////////////////
var skinBlr2 = document.getElementById("skinBlr")
var skinDog2 = document.getElementById("skinDog")
var skinEfir3 = document.getElementById("skinEfir")
var skinVk4 = document.getElementById("skinVk")
var cli = document.getElementById("click")
///////////////////////////////////
/*цены*/
///////////////////////////////////
let soomm = document.getElementsByClassName('sum-cls')

///////////////////////////////////
/*значение и его прибовление к цене*/
///////////////////////////////////
upgradeSum.textContent = up
upgradeAc.textContent = upg
///////////////////////////////////
/*значения изменения сумм и текстового контента*/
///////////////////////////////////
function contentex() {
    txtSumOne.textContent = One
    txtSumTwo.textContent = Two
    txtSumThre.textContent = Thre
    txtSumFor.textContent = For
    txtSumFive.textContent = Five
    txtSumSix.textContent = Six
    txtSumSeven.textContent = Seven
    txtSumEight.textContent = Eight
    txtSumNine.textContent = Nine
    txtSumTen.textContent = Ten
    txtSumEleven.textContent = Eleven
    txtSumTwelve.textContent = Twelve
    txtSumThirteen.textContent = Thirteen
    txtSumFourteen.textContent = Fourteen
    txtSumFifteen.textContent = Fifteen
    txtSumSixteen.textContent = Sixteen

    txtSumAutoClick.textContent = autoClk
    txtSumAutoClick2.textContent = autoClk2
    txtSumAutoClick3.textContent = autoClk3
    txtSumAutoClick4.textContent = autoClk4
    txtSumAutoClick5.textContent = autoClk5
    txtSumAutoClick6.textContent = autoClk6
    txtSumAutoClick7.textContent = autoClk7
    txtSumAutoClick8.textContent = autoClk8
    txtSumAutoClick9.textContent = autoClk9



    txtSumskinBlr.textContent = skinBlr
    txtSumskinDog.textContent = skinDog
    txtSumskinEfir.textContent = skinEfir
    txtSumskinVk.textContent = skinVk
}
contentex()

