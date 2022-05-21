///////////////////////////////////
/*открыть банк улучшений*/
///////////////////////////////////
bank.addEventListener('click', function() {
    bankSelect.classList.add("open-shop")
})
///////////////////////////////////
/*открыть магазин скинов*/
///////////////////////////////////
skin.addEventListener('click', function() {
    skinSelect.classList.add("open-shop")
})
///////////////////////////////////
/*открыть магазин автоклика*/
///////////////////////////////////
factory.addEventListener('click', function() {
    factorySelect.classList.add("open-shop")
})
///////////////////////////////////
/*закрыть банк улучшений*/
///////////////////////////////////
back.addEventListener('click', function() {
    bankSelect.classList.remove("open-shop")
})
///////////////////////////////////
/*закрыть магазин скинов*/
///////////////////////////////////
backTw.addEventListener('click', function() {
    skinSelect.classList.remove("open-shop")
})
///////////////////////////////////
/*закрыть магазин автоклика*/
///////////////////////////////////
backZw.addEventListener('click', function() {
    factorySelect.classList.remove("open-shop")
})
