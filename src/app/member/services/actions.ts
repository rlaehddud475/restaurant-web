'use server'
import { redirect } from 'next/navigation'
export const processJoin = async (parms, formData: FormData) => {
  const redirectUrl = parms?.get('redirectUrl') ?? '/memeber/login'
  const form = {},
    erros = {}
  let hasErrors = false
  for (const [key, value] of formData.entries()) {
    form[key] = value
  }
  redirect(redirectUrl)
}
export const processLogin = async (parms, formData: FormData) => {}
