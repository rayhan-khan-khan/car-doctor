

const Popular2 = ({popular}) => {
    const { img, title, price} = popular;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-2">
                <img src={img}  alt="" className="w-[280px] bg-[#F3F3F3] rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
         <div className="rating gap-1">
                <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
                <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
         </div>
                <h2 className="card-title text-[#444]">{title}</h2>
                <p className="text-[#FF3811]">{price}</p>
                <div className="card-actions">
                
                </div>
            </div>
       </div>
    );
};

export default Popular2;