# reveal-infopanel
Small plugin that takes information from a slide and puts it in a custom menu
panel

## Prerequisites
This plugin requires the menu plugin.

## Installation

Place the plugin directory in the plugin folder. Include the plugin in your
Reveal initialization dependencies. Create a custom panel in the menu and
include a ```<div>``` with the class ```infopanel```.

```
Reveal.initialize({

    //other reveal options

    dependencies: [
        //other reveal dependencies
        { src: '/plugin/menu/menu.js', },
        { src: '/plugin/reveal-infopanel/reveal-infopanel.js', },
    ],

    menu: {
        custom: [
            {
                "title":"More Info",
                "icon":"<i class=\"fa fa-info\">",
                "content":"<h1> More Info </h1> <div class=\"infopanel\"> <p>Nothing here for this slide.</p> </div> "
            }
        ],
    },
    
});
```

## Configuration
Nothing to configure.

## Usage
Install the plugin and put HTML in an ```<aside>``` element with the class,
```infopanel```.

```
<section>
<aside class="infopanel">
Your info here.
</aside>
</section>
