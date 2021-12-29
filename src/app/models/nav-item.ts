export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName?: string;
  route?: string;
  tooltip?:string;
  children?: NavItem[];
}
