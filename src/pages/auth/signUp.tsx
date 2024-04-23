import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('restaurant successfully registered.', {
        action: {
          label: 'login',
          onClick: () => navigate('/signIn'), // Aqui aperte o botão e renvia
        },
      })
    } catch {
      toast.error('error when registering restaurant.')
    }
  }

  return (
    <>
      <Helmet title="cadasted" />
      <div className="p-8 ">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/signIn">make login</Link>
        </Button>
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Create account free
            </h1>
            <p className="text-sm text-muted-foreground">
              Become a partner and start your sales!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Establishment Name</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register('restaurantName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">your name</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">your e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">your phone</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              finish register
            </Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              as it continues you agree like our{' '}
              <a className="underline underlineunderline-offset-4" href="#">
                terms in servecer
              </a>{' '}
              the{' '}
              <a className="underline underlineunderline-offset-4" href="#">
                political in privacite
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
