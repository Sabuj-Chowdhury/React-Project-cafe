import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="container mx-auto md:flex justify-between items-center p-4 my-4 border-b-2">
      <h1 className="text-4xl font-bold ">Knoweledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
