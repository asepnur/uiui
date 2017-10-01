Uiui on going ...

Documentation css naming convention.
this project use BEM methodology for naming convention with a little change:
BEM (Block Element Modifier)
Block?
Block is a top-level abstraction of a new component
prefix for block document is b2, and name for block max 2 for each name
e.g
we have block with name containter, the name should be _2co

Element?
Element represents a descendent of block that helps form .block as a whole
bridge/conjuction between block name and element name is 5, and name for element max 2 for each name
e.g
we have block name _2co, and we have element blue, the name should _2co5bl

Modifier?
represents a different state or version of .block
modifiers can manipulate the block so that we can theme or style that particular component without inflicting changes on a completely unrelated module.
name for modifier max 2 for each name, and bridge between modifier and block or element is 3
e.g 
we have blcok name _2co and we have modifier name small, the name should _2co3sm

here is list css name for this project :


_co5gr =   group from container
_c5m31 =   col-md-number
_c5x31 =   col-xs- number
_pl =      pull
_pl5r =    pull-right
_pl5l =    pull-left

_cn =      container
_bl =      block
_he =      Header
_me =      Message
_bt =       Button

== Button ==
    = naming =
        _bt = parent
        3color = for color
    
    = color =
    Available color button : (Silver (default) ,Blue, Main Green, Red)
    
    _bt = default color Silver
    _bt3b = button blue
    _bt3m = button main
    _bt3g = button green
    _bt3r = button Red

    = size and color =
    Available size button : small, medium, big
    _bt5(size)3(color)


    padding : ?
    margin : ?
    _bt5 =      default small button with silver color
    _bt53b =    small button blue
    _bt53m =    small button main
    _bt53g =    small button green
    _bt53r =    small button red


    padding : ?
    margin : ?
    _bt5m =     default medium button with silver color
    _bt5m3b =   medium button blue
    _bt5m3m =   medium button main
    _bt5m3g =   medium button green
    _bt5m3r =   medium button red

    padding : ?
    margin : ?
    _bt5l =     default large button with silver color
    _bt5l3b =   large button blue
    _bt5l3m =   large button main
    _bt5l3g =   large button green
    _bt5l3r =   large button red

== Head ==
    = naming =
    _he = parent

    = text-align and color=
        Available text align  : Right (default), Center, Left
        Available color head : silver (default), main, blue, black
        _he5 = Heading large normal, right, silver
        _he5m = Heading large normal, right, main
        _he5b = Heading large normal, right, blue
        _he5bk = Heading large normal, right, black

        _he5c = Heading large normal, right, silver
        _he5cm = Heading large normal, right, main
        _he5cb = Heading large normal, right, blue
        _he5cbk = Heading large normal, right, black

        _he5l = Heading large normal, right, silver
        _he5lm = Heading large normal, right, main
        _he5lb = Heading large normal, right, blue
        _he5lbk = Heading large normal, right, black
    
    
    = font Weight and size = 
        Available font-wight : normal (default), bold
        Available size head : large (default), medium, small
        large = 2em
        medium = 1.2em
        small = .9em
        _he5l = large
        _he5m = medium 
        _he5s = small
        
    = bold and italic =
        _bo = bold
        _it = italic