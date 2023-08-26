# Font Utilities
*also known as `font-utils`*

---
*Support will not be provided unless using the [latest release](https://github.com/EL20202/crosscode-font-utils/releases/latest).*

Adds in some new font colors for you to use in CrossCode! This adds in a total of 6 brand new font colors - as well as making one vanilla font color available for all character sets instead of just one! It also adds in a handy new text command to let you color fonts using color names rather than a bunch of IDs.

Colors offered:<br>
![](./readme-img/colors.png)

As for the named color codes:

| Color | Code |
|-|-|
| White | `\\C[white]` |
| Red | `\\C[red]` |
| Green | `\\C[green]` |
| Yellow | `\\C[yellow]` |
| Gray | `\\C[gray]` *or* `\\C[grey]` |
| Orange | `\\C[orange]` |
| Purple | `\\C[purple]` |
| Blue | `\\C[blue]` |
| Dark Blue | `\\C[dark-blue]` *or* `\\C[dark_blue]`|
| Pink | `\\C[pink]` |
| Teal | `\\C[teal]` |
| Lime | `\\C[lime]` |
| Fuchsia | `\\C[fuchsia]` |
| Olive | `\\C[olive]` |
| Violet | `\\C[violet]` |
| Brown | `\\C[brown]` |
| Gold | `\\C[gold]` |
| Dark Red | `\\C[dark-red]` *or* `\\C[dark_red]` |

There is also support for inserting text from a lang entry by using the `\\l[...]` text command. This can be used to look up some existing text - for example, `\\l[sc.gui.menu.equip.foc]` would be replaced with `Focus` (if you're playing in English) or whatever the set language would call it.