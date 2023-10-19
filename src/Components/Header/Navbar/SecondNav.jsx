import { FaClock } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs'; 
const SecondNav = () => {
  return (
    <div className='bg-red-400'>
      <div className='  max-w-7xl mx-auto'>
      <div className='md:flex justify-between items-center text-white font-normal text-sm p-3'>
        <p>Hot Days! 50% get ready for summer!</p>
        <div className='flex items-center sm:text-xs'>
        <div className='flex items-center mr-5'>
          <FaClock></FaClock>
          <span className='ml-5'>Sat-Thu: 09am to 06pm</span>
        </div>
        <div className='flex items-center mx-5'>
          <BsTelephone></BsTelephone>
          <span className='ml-5'>+8801700000000</span>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SecondNav;