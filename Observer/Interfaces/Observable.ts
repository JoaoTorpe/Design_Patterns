import { Observer } from "./Observer";

export interface Observable{

registerObserver(observer : Observer):void;
unregisterObserver(observer : Observer):void;
notifyAll():void;

}