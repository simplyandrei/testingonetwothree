export default function TestNavbar(props: {title: string}) {
  return (
    <nav className="navbar bg-primary">
    <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
        {/* <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" /> */}
        {props.title}
        </a>
    </div>
    </nav>
  )
}