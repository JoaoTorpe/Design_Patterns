import { Button } from "../Entities/Button";
import { DesktopButton } from "../Entities/DesktopButton";
import { DesktopMenu } from "../Entities/DesktopMenu";
import { Menu } from "../Entities/Menu";
import { uiFactory } from "./UiFactory";

export class DesktopFactory implements uiFactory{
    
    createButton(): Button {
       return new DesktopButton
    }
    creteMenu(): Menu {
        return new DesktopMenu
    }


    
}