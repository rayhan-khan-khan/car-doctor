/* eslint-disable react/prop-types */
import { IoIosArrowRoundForward  } from 'react-icons/io';
import { Link } from 'react-router-dom';

const ServicesCurd = ({services}) => {
    const { title, img, price} = services
    return (
        <div className="card w-[300px] bg-base-100 shadow-xl">
  <figure className="">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className="text-[#FF3811] font-bold text-xl">Price: ${price}</p>
    <div className="card-actions justify-end">
      <Link to={`/checkout`}>
      <h2 className='text-3xl text-[#FF3811]'><IoIosArrowRoundForward></IoIosArrowRoundForward></h2>
      </Link>
    </div>
  </div>
</div>
    );
};

export default ServicesCurd;