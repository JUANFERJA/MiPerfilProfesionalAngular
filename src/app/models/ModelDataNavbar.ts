interface ItemMenu {
  name: string;
  link: string;
  isRoute: boolean;
}

interface ItemRedSocial {
  name: string;
  link: string;
  icon: any;
}

export default interface ModelDataNavbar {
  itemsMenu: ItemMenu[];
  itemsRedesSociales: ItemRedSocial[];
}
