'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { login } from '@/app/auth/actions'
import { useActionState } from 'react' // Changed from 'react-dom' to 'react' for React 19 compatibility if needed, or stick to react-dom if using < 19. Wait, package.json says react 19.
import Link from 'next/link'
import { toast } from 'sonner'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Wrap server action to match useActionState signature if needed, or simply handle it inside the component.
// In Next.js 15 / React 19, useActionState is in 'react'.

const initialState = {
  error: '',
  success: false,
}

export default function LoginPage() {
  const router = useRouter()
  const [state, formAction, isPending] = useActionState(async (prevState: { error: string; success: boolean }, formData: FormData) => {
    const result = await login(formData)
    if (result?.error) {
      return { error: result.error, success: false }
    }
    return { error: '', success: true }
  }, initialState)

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error)
    }
    if (state?.success) {
      toast.success('Logged in successfully!')
      window.location.href = '/'
    }
  }, [state])

  return (
    <div className="flex h-screen w-full items-center justify-center bg-royal-blue px-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-royal-blue">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <form action={formAction}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="mail@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
              <br />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full bg-royal-blue hover:bg-royal-blue/90" disabled={isPending}>
              {isPending ? 'Signing in...' : 'Sign in'}
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="underline hover:text-royal-blue">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
