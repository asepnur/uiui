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
        Available text align  : left (default), Center, right
        Available color head : silver (default), main, blue, black
        Available size : large (default), medium, small
        _he3 = Heading large normal, left, silver
        _he3m = Heading large normal, left, main
        _he3b = Heading large normal, left, blue
        _he3bk = Heading large normal, left, black

        _he3c = Heading large normal, center, silver
        _he3cm = Heading large normal, center, main
        _he3cb = Heading large normal, center, blue
        _he3cbk = Heading large normal, center, black

        _he3l = Heading large normal, right, silver
        _he3lm = Heading large normal, right, main
        _he3lb = Heading large normal, right, blue
        _he3lbk = Heading large normal, right, black

        = medium =
        _he33 = Heading medium normal, left, silver
        _he3m3m = Heading medium normal, left, main
        _he3m3b = Heading medium normal, left, blue
        _he3m3bk = Heading medium normal, left, black

        _he3m3c = Heading medium normal, center, silver
        _he3m3cm = Heading medium normal, center, main
        _he3m3cb = Heading medium normal, center, blue
        _he3m3cbk = Heading medium normal, center, black

        _he3m3l = Heading medium normal, right, silver
        _he3m3lm = Heading medium normal, right, main
        _he3m3lb = Heading medium normal, right, blue
        _he3m3lbk = Heading medium normal, right, black

        = SMALL =
        _he33 = Heading small normal, left, silver
        _he3x3m = Heading small normal, left, main
        _he3x3b = Heading small normal, left, blue
        _he3x3bk = Heading small normal, left, black

        _he3x3c = Heading small normal, center, silver
        _he3x3cm = Heading small normal, center, main
        _he3x3cb = Heading small normal, center, blue
        _he3x3cbk = Heading small normal, center, black

        _he3x3l = Heading small normal, right, silver
        _he3x3lm = Heading small normal, right, main
        _he3x3lb = Heading small normal, right, blue
        _he3x3lbk = Heading small normal, right, black

    
    
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

== Padding and Margin ==
    Available padding : little(5px) default, medium(10px), large(15px), xlarge(30px), none
    Available padding position : top, right, bottom, left, top & bottom, left & right, all
    _pd = padding parent
    _pd3t = padding little top
    _pd3r = padding little right
    _pd3b = padding little bottom
    _pd3l = padding little left
    _pd3tb = padding little top and bottom
    _pd3lr = padding little left and right
    _pd3a = padding little all
    
    _pd3m3t = padding medium top
    _pd3m3r = padding medium right
    _pd3m3b = padding medium bottom
    _pd3m3l = padding medium left
    _pd3m3tb = padding medium top and bottom
    _pd3m3lr = padding medium left and right
    _pd3m3a = padding medium all

    _pd3l3t = padding large top
    _pd3l3r = padding large right
    _pd3l3b = padding large bottom
    _pd3l3l = padding large left
    _pd3l3tb = padding large top and bottom
    _pd3l3lr = padding large left and right
    _pd3l3a = padding large all

    _pd3xl3t = padding xlarge top
    _pd3xl3r = padding xlarge right
    _pd3xl3b = padding xlarge bottom
    _pd3xl3l = padding xlarge left
    _pd3xl3tb = padding xlarge top and bottom
    _pd3xl3lr = padding xlarge left and right
    _pd3xl3a = padding xlarge all

    _pd3n3t = padding none top
    _pd3n3r = padding none right
    _pd3n3b = padding none bottom
    _pd3n3l = padding none left
    _pd3n3tb = padding none  top and bottom
    _pd3n3lr = padding none  left and right
    _pd3n3a = padding none all
== content text for description or Message ==
    _ct = parent
    = SIZE = 
    Available size : small (default)(.9em), xsmall(.8em), medium(1em)
    Availabel color : black (default), silver, main, Blue
    _ct3 = small, black
    _ct3s = small silver
    _ct3m = small main 
    _ct3b = small blue

    _ct3x = xsmall, black
    _ct3xs = xsmall silver
    _ct3xm = xsmall main 
    _ct3xb = xsmall blue

    _ct3m = medium, black
    _ct3ms = medium silver
    _ct3mm = medium main 
    _ct3mb = medium blue


