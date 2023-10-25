
const ServiceCard = () => {
  return (
    <div className="mt-5 mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/G2SQsNw/users-with-speech-bubbles-vector-53876-82250.jpg" alt="Shoes" className="rounded-xl w-80 h-60" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[#2E937A]">Communications</h2>
    <p>Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.</p>
    <div className="card-actions">
      <button className="bg-[#2e937a] text-white px-5 py-1 text-center rounded-2xl">MORE</button>
    </div>
  </div>
</div>
<div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/02FsM2y/fdf.jpg" alt="Shoes" className="rounded-xl w-80 h-60" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[#2E937A]">Inspired Design</h2>
    <p>Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.</p>
    <div className="card-actions">
      <button className="bg-[#2e937a] text-white px-5 py-1 text-center rounded-2xl">MORE</button>
    </div>
  </div>
</div>
<div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/X3nMhB8/dsds.jpg" alt="Shoes" className="rounded-xl w-80 h-60" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[#2E937A]">Happy Customers</h2>
    <p>Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.</p>
    <div className="card-actions">
      <button className="bg-[#2e937a] text-white px-5 py-1 text-center rounded-2xl">MORE</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default ServiceCard;