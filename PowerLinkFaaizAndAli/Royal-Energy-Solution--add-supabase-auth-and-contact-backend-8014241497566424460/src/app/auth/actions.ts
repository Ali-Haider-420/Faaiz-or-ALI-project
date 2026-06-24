'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
})

export async function login(formData: FormData) {
  const supabase = await createClient()

  // Parse and validate data
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const result = loginSchema.safeParse(data)

  if (!result.success) {
    return { error: 'Invalid email or password' }
  }

  const { error } = await supabase.auth.signInWithPassword(result.data)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  return { success: true }
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
    name: formData.get('name'),
  }

  const result = signupSchema.safeParse(data)

  if (!result.success) {
    return { error: 'Invalid input data' }
  }

  const { error } = await supabase.auth.signUp(result.data)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  redirect('/login')
}

export async function signout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath('/', 'layout')
  redirect('/login')
}
