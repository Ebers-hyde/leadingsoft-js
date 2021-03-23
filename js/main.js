//событие, после того как загрузится документ

window.addEventListener("load", function() { 
    //ещё обработчик события нажатия любой клавиши. Он запускает функцию с параметром
    this.addEventListener('keyup', function(evt) {
        //тернарный оператор. если нажата именно одна из стрелочек, показывается alert, иначе не происходит ничего.
        evt.key === 'ArrowUp' || evt.key === 'ArrowDown' || evt.key === 'ArrowLeft' || evt.key === 'ArrowRight' ? alert(evt.key) : void(0);
    })
});

