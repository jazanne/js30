const PLAY_CLASS = 'playing';
const SECOND = 1000;

window.addEventListener('keydown', function(e){
    // get key code
    const key = window.event ? e.keyCode : e.which;

    // form selector
    const KEY_SELECTOR = `[data-key="${key}"]`

    // get key "button"
    const el = document.querySelector( `div${KEY_SELECTOR}` );
    el.classList.add( PLAY_CLASS );
    setTimeout(function(){
        el.classList.remove( PLAY_CLASS );
    }, SECOND / 10);

    // get sound
    const sound = document.querySelector( `audio${KEY_SELECTOR}`);
    sound.play();
});