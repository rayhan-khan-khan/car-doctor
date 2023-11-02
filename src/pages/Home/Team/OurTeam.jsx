/* eslint-disable react/prop-types */
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram} from 'react-icons/bs';


const OurTeam = ({team}) => {
    const {img, title, p} = team;
    return (
        <div className="card wx-96 h-[370px] bg-[#00b5fc] shadow-xl">
        <figure className="p-4"><img src={img} className="rounded-xl" /></figure>
        <div className="text-white text-center font-semibold">
          <h2 className="text-xl">{title}</h2>
          <p>{p}</p>
       
        </div>
        <div className='flex ml-24 mt-2 gap-4'>
       <p className='text-[#031f54] bg-white rounded-full text-2xl'><BsFacebook></BsFacebook></p>
       <p className='text-[#2a65d4] bg-white rounded-full text-3xl'><AiFillTwitterCircle></AiFillTwitterCircle></p>
       <p className='text-[#145be0] bg-white rounded-full text-3xl'><BsLinkedin></BsLinkedin></p>
       <p className='text-white bg-[#c43408] rounded-full text-3xl'><BsInstagram></BsInstagram></p>
       </div>
      </div>
    );
};

export default OurTeam;