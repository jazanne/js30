const PLAY_CLASS = 'playing';
const SECOND = 1000;

window.addEventListener('keydown', function(e){
    const key = window.event ? e.keyCode : e.which;
    const el = document.querySelector( `div[data-key="${key}"]` );
    el.classList.add( PLAY_CLASS );
    setTimeout(function(){
        el.classList.remove( PLAY_CLASS );
    }, SECOND / 10);
});