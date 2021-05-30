import IUser from './model/IUser'
import IEngagement from './model/IEngagement'

export async function getUsers(): Promise<IUser[]> {
  var response = await fetch('http://127.0.0.1:5500/src/data/users.json')
  let users = (await response.json()) as []

  return users.map<IUser>((u: any) => {
    let usr: IUser = {
      id: u.id,
      name: u.name,
      loggedIn: false,
    }
    return usr
  })
}

export async function getEngagements(): Promise<IEngagement[]> {
  var response = await fetch('http://127.0.0.1:5500/src/data/engagements.json')
  let users = (await response.json()) as []

  return users.map<IEngagement>((u: any) => {
    let usr: IEngagement = {
      Id: u.id,
      Name: u.name,
      Client: u.client,
      Clientid: u.Clientid,
      Industry: u.industry,
      CreatedOn: u.CreatedOn,
      Archived: u.Archived,
      RolloffDate: u.RolloffDate,
      Status: u.Status,
    }

    return usr
  })
}
