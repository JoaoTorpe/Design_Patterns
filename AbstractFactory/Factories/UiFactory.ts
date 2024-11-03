import { Button } from "../Entities/Button";
import { Menu } from "../Entities/Menu";


export interface uiFactory{

    createButton () : Button
    creteMenu() : Menu
}