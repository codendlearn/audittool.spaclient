export interface INavigationItem {
  name: string
  icon?: (props: React.ComponentProps<"svg">) => JSX.Element
  path?: string
  children?: INavigationItem[]
}
