var base  = new Zumen({id: 'base'}, 'base');
var panel = new Zumen({id: 'panel'}, 'panel');
var card  = new Zumen({id: 'card'}, 'card');

base.addRecipe('design', {
    Visible: true
});

var view = new View({id: 'main'});
view.addZumen([base, panel, card]);

view.generateHTML('index.html');

view.generateChromeAppManifest('Recipe3 App',
    {
        width: 480,
        height: 640,
        icon: 'apricot_icon.png',
        description: 'Painting!'
    }
);
