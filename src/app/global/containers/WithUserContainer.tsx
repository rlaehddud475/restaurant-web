'use client'
/* eslint-disable react-hooks/rules-of-hooks */
import LoginContainer from '@/app/member/containers/LoginContainer'
import useUser from '../hooks/useUser'
export default function WithUserContainer(UserContainer) {
  const { isLogin } = useUser()
  return isLogin ? <UserContainer /> : <LoginContainer />
}
