
let char = new Sorcener('Neto Dos Magos');
let monster = new LittleMonster('Letícia Monster');

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);

stage.start();






