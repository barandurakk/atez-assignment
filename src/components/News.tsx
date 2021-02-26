import React from "react";

//styles
import "../scss/news.scss";

//svg
import {actionSVG} from "../svg/actionArrow";

interface NewsProps {
    news:{
        newsHeader: string,
        newsText: string,
        newsBtnText: string
    }
    
}

const News: React.FC<NewsProps> = ({news}: NewsProps) => {

    return(
        <div id="news-container">
             {news 
            && 
            <div className="news-content">
               <h2>{news.newsHeader}</h2>
               <p>{news.newsText}</p>
               <div>
                    <span>{news.newsBtnText}</span>
                    <a href="#positions-section">{actionSVG}</a>
                </div>      
            </div>
            }
        </div>
    )

}

export default News;