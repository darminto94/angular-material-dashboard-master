import {RoleModel} from "./role.model";
import {MenuModel} from "./menu.model";

export class RoleMenuModel {
  id?: number;
  isActive?: boolean;
  roleId?: number;
  role? = new RoleModel();
  menuId?: number;
  menu? = new MenuModel();
}
