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
