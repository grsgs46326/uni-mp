declare type loginResult = {
  //用户ID
  id: number
  //头像
  avatar: string
  //账户名
  account: string
  //昵称
  nickname?: string
  //手机号
  moblie: string
  //登录凭证
  token: string
}
declare type LoginParams = {
  code: string
}
