import {Menu} from "../request/menu";

export class Menus {
  content: [
    {
      label: string;
      icon: string;
      routerLink: string;
      items: Menu[];
    }
  ]
}
