import React from 'react';
import NewsSlider from '../../../widgets/news-slider/slider';
import NewsList from '../../../widgets/NewsList/newslist';


const NewsMain = () => (
    <div>
       <NewsSlider
       type="featured"
       start={0}
       amount={3}       
       />

       <NewsList
       type="cardMain"
       loadmore={true}
       start={3}
       amount={5}
       
       />
    </div>
)
export default NewsMain;