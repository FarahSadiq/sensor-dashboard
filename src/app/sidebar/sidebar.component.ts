import { Component, OnInit } from '@angular/core';

export interface ChildrenItem {
  path: string;
  title: string;
  icon?: string;
  class: string;
  type: 'link' | 'sub' | 'extLink' | 'extTabLink';
  children?: ChildrenItem[];
}
export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  type: 'link' | 'sub' | 'extLink' | 'extTabLink';
  children?: ChildrenItem[];
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard/1',     title: 'Nodes',         icon: 'nc-atom',     class: '', type : 'sub',
    'children': [
      { title: 'Node 1',     path: '/dashboard/1',     class: '', type : 'link'
      },
      { title: 'Node 2',     path: '/dashboard/2',     class: '', type : 'link'
      }]
  },
  { path: '/dashboard/3',     title: 'Average Values',         icon: 'nc-chart-bar-32',       class: '', type : 'link'
  },
  // { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' ,  type: "link",},
  // { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' ,  type: "link", },
  // { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' ,  type: "link",},
  // { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '',  type: "link", },
  // { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '',  type: "link", },
  // { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' ,  type: "link",},
  // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro',  type: "link", },
];
@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
  constructor() {}
    public menuItems: any[];
    ngOnInit() {
      //this.storage.get('nodeId') + '#avg'
      let submenu = [];
      this.menuItems = ROUTES.filter(menuItem => menuItem);
        ROUTES.forEach((item) => {
          // tslint:disable-next-line:triple-equals
              if (submenu.findIndex(submenuItem => submenuItem == item) == -1) {
                submenu.push(item)
              }
            return;
        });
        this.menuItems.concat(submenu);

    }
}
