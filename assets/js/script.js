
let char = new Sorcener('Neto Dos Magos');
let monster = new LittleMonster('Letícia Monster');
let log = new Log(document.querySelector('.log'));

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log

);

stage.start();






