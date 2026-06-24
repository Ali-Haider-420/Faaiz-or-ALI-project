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
import { signup } from '@/app/auth/actions'
import { useActionState } from 'react'
import Link from 'next/link'
import { toast } from 'sonner'
import { useEffect } from 'react'

const initialState = {
  error: '',
}

export default function SignupPage() {
  const [state, formAction, isPending] = useActionState(async (prevState: { error: string }, formData: FormData) => {
    const result = await signup(formData)
    if (result?.error) {
      return { error: result.error }
    }
    return { error: '' }
  }, initialState)

  useEffect(() => {
    if (state?.error) {
      toast.error(state.error)
    }
  }, [state])

  return (
    <div className="flex h-screen w-full items-center justify-center bg-royal-blue px-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-royal-blue">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account.
          </CardDescription>
        </CardHeader>
        <form action={formAction}>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="Enter Your Name" />
            </div>
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
              {isPending ? 'Creating account...' : 'Sign Up'}
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link href="/login" className="underline hover:text-royal-blue">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
