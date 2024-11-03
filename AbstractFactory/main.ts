import {uiFactory} from "./Factories/UiFactory"
import {DesktopFactory} from "./Factories/DesktopFactory"
import {MobileFactory} from "./Factories/MobileFactory"
import { DesktopButton } from "./Entities/DesktopButton"
import { DesktopMenu } from "./Entities/DesktopMenu"
import { MobileButton } from "./Entities/MobileButton"
import { MobileMenu } from "./Entities/MobileMenu"
import { Button } from "./Entities/Button"
import { Menu } from "./Entities/Menu"

let factory : uiFactory



//Factory sendo do tipo desktop
factory = new DesktopFactory()
let desktopButton : Button = factory.createButton()
desktopButton.Render()

let desktopMenu : Menu = factory.creteMenu()
desktopMenu.Render()


//Factory sendo do tipo mobile
factory = new MobileFactory()

let mobileButton : Button = factory.createButton()
mobileButton.Render()

let mobileMenu : Menu = factory.creteMenu()
mobileMenu.Render()


