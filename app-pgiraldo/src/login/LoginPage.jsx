import BaseButton from "../components/shared/BaseButton"
import BaseInput from "../components/shared/BaseInput"

const LoginPage = () => {
  return (
    <main className="w-[400px] m-auto flex flex-col gap-5">
      <div className="bg-slate-300 p-8 rounded-lg flex flex-col gap-6">
        <h2 className="text-center text-4xl font-bold">Login</h2>

        <p className="font-light text-center">Ingresa un nombre de usuario y password</p>

        <form>
          <BaseInput
            label='Usuario:'
            placeholder='pablo'
            name="username"
          />

          <BaseInput
            type="password"
            label='Password'
            placeholder='mypassword'
            name="password"
          />

          <BaseButton
            label='Login'
            bgColor='bg-violet-500'
            classx='w-full hover:bg-violet-600 duration-300'
          />
        </form>
      </div>
    </main>
  )
}

export default LoginPage