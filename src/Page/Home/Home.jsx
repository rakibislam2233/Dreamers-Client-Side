import Banner from "./Banner/Banner";
import Blogs from "./Blogs/Blogs";
import Gallary from "./Gallary/Gallary";
import PopularCollege from "./PopularCollege.js/PopularCollege";


const Home = () => {
    return (
       <>
       <Banner></Banner>
       <PopularCollege></PopularCollege>
       <Gallary></Gallary>
       <Blogs></Blogs>
       </>
    );
};

export default Home;