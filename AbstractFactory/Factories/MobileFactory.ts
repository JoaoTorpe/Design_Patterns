import { Button } from "../Entities/Button";
import { Menu } from "../Entities/Menu";
import { MobileButton } from "../Entities/MobileButton";
import { MobileMenu } from "../Entities/MobileMenu";
import { uiFactory } from "./UiFactory";


export class  MobileFactory implements uiFactory{

    createButton(): Button {
       return new MobileButton
    }
    creteMenu(): Menu {
        return new MobileMenu
    }


    
}