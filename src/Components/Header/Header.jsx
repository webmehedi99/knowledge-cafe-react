import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='w-10/12 mx-auto flex justify-between items-center p-8  border-b-2'>
            <h1 className=' text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;