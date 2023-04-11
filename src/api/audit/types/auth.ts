export interface IAuthRequestData {
  id: number,
  phone: number,
  name: string,
  status: string,
  state: string,
  submit: string,
  modules: string,
  anthstate: string,
  data: string,
  anthtime:string,
  authtcons: string,
  operation: string,

}

export interface AuthDataRespnseData {
  TableData:IAuthRequestData[]
}