import IEngagement from "./IEngagement"
import IUser from "./IUser"

export interface IGlobalState {
  currentEngagement?: IEngagement
  user?: IUser
  busy: boolean
  error: boolean
  errorMessage?: string
  pageTitle: string
}
