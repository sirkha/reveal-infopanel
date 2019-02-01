var RevealInfoPanel = window.RevealInfoPanel || (function(){
    let module = {};
    
    let menuDiv;
    let menuDivInitial = document.createDocumentFragment();
    
    module.menuDiv = menuDiv;
    module.menuDivInitial = menuDivInitial;
    
    function transfer ( event ) {
        let slidePanel = event.currentSlide.querySelector("aside.infopanel");
        let nodeSource = menuDivInitial;
        if (slidePanel) {
            nodeSource = slidePanel;
        }
        while( menuDiv.firstChild) {
            menuDiv.removeChild(menuDiv.firstChild);
        }
        for (let i = 0; i < nodeSource.childNodes.length; i++) {
            menuDiv.appendChild(nodeSource.childNodes[i].cloneNode(true));
        }
    }
    function setup (event ) {
        menuDiv = document.querySelector("div.infopanel");
        
        for (let i = 0; i < menuDiv.childNodes.length; i++) {
            menuDivInitial.appendChild(menuDiv.childNodes[i].cloneNode(true));
        }
        transfer({currentSlide: Reveal.getCurrentSlide()});
        Reveal.addEventListener( 'slidechanged', transfer);
    }
    Reveal.addEventListener( 'menu-ready', setup);
    
    return module;
})();
