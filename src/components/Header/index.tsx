import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <div className="bg-cover-top h-72 bg-no-repeat bg-cover grid justify-center">
      <img src={logo} alt="Github Blog" className="mt-16" />
    </div>
  )
}
