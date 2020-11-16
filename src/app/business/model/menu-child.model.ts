import {MenuModel} from "./menu.model";

export class MenuChildModel {
  id?: number;
  isActive?: boolean;
  icon?: string;
  label?: string;
  routerLink?: string;
  menuId?: number;
  menu? = new MenuModel();
}
