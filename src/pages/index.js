import fetch from 'isomorphic-fetch';
import Slider from '../components/Slider';

const Index = (props) => {
    return (
        <div className='mt-2'>
            <Slider url={'movies'} ext={'movie/popular'} query={''} title={'Popular'} />
            <Slider url={'movies'} ext={'movie/top_rated'} query={''} title={'IMDB Favourites'} />
            <Slider url={'movies'} ext={'movie/now_playing'} query={''} title={'In Cinemas'} />
            <Slider url={'movies'} ext={'movie/upcoming'} query={''} title={'Coming Soon'} />
        </div>
    );
};

// fetches initial props where required
// Index.getInitialProps = async ({ req }) => {
// };

export default Index;
