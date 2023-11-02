
import Banner from '../Banner/Banner';
import About from '../About/About';

import Time from '../Time/Time';
import Popular from '../Popular/Popular';
import Team from '../Team/Team';
import Services from '../Service/Services';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Time></Time>
            <Popular></Popular>
            <Team></Team>
            
        </div>
    );
};

export default Home;