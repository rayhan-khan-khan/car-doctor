import moment from 'moment';
import { MdLocalDrink } from "react-icons/md"
import { FaBlenderPhone} from "react-icons/fa"
import { FcAlarmClock} from "react-icons/fc"

const Time = () => {
    return (
        <div className='my-12'>
            <div className='flex gap-4 justify-between bg-black w-[800px] items-center px-8 h-[200px] mx-auto  rounded p-4'>
                {/* 1 */}
            <div className='pl-4 flex'>
           <div>
                <h1 className='mt-5 text-4xl mr-4'><FcAlarmClock></FcAlarmClock></h1>
           </div>
           <div> <h1 className='font-semibold text-white text-xl'>{moment().format("dddd")}</h1>
            <h1 className='font-semibold text-white text-xl'>{moment().format("MMMM D YYYY")}</h1></div>
            </div>
            {/* 2 */}
            <div className='flex shadow rounded text-center'>
                <div className='mt-6'>
                    <p className='mr-2 text-3xl text-[#FF3811]'><FaBlenderPhone></FaBlenderPhone></p>
                </div>
                <div>
                <h4 className='text-xl text-white font-semibold text-white mb-2'>Have a question?</h4>
                <h3 className="text-xl text-white font-bold">+2546 251 2658</h3>
                </div>
               
            </div>
            {/* 3 */}
                <div className='flex'>
                    <div className='mt-4 mr-4'>
                    <h1 className='text-3xl text-[#FF3811]'><MdLocalDrink></MdLocalDrink></h1>
                    </div>
                    <div>
                    <p className='text-white'>Need a repair? our address</p>
                    <h2 className="text-2xl text-white">Liza Street, New York</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Time;