import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const signUpForm = z.object({
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    try{
      await new Promise(resolve => setTimeout(resolve, 2000))
      toast.success('send a link of authentication to your email.', {
        action: {
          label: "resend",
          onClick: () => handleSignUp(data), //Aqui aperte o botão e renvia
        }
      })
      } catch {
        toast.error('credentials invalid.')
      }
  }

  return <>
  <Helmet title="cadasted" />
    <div className="p-8 ">
      <div className="w-[350px] flex flex-col justify-center gap-6">
      <div className="flex flex-col gap-2 text-center">
      <h1 className="text-2xl font-semibold tracking-tighter">Create account free</h1>
      <p className="text-sm text-muted-foreground">Become a partner and start your sales!</p>
      </div>

      <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">your e-mail</Label>
          <Input id="email" type="email" {...register('email')} />
        </div>
        <Button disabled={isSubmitting} className="w-full" type="submit">finish register</Button>
      </form>
      </div>
    </div>
  </>
}