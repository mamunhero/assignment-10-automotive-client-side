
const BrandSingleCard = ({ brand }) => {
  const { name, logo, info } = brand || {};
  return (
    <div className="">
      <div className="mt-10 mb-10">
        <div className="card  bg-base-100 shadow-xl w-96 h-96">
          <figure>
            <img src={logo} alt="logo" className="w-full h-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-red-500">{name}</h2>
            <p>{info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSingleCard;
