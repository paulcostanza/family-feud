import Logo from '../../assets/logo.png'

export default function Header() {
    return (
        <div className="container">
            <img src={Logo} alt='Family Feud Soundboard Logo' className='logo' />
        </div>
    )
}