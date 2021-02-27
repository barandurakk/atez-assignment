import React from "react";
import { HashLink } from 'react-router-hash-link';

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
                    <HashLink to="#positions-section" smooth={true}>{actionSVG}</HashLink>
                </div>      
            </div>
            }
        </div>
    )

}

export default News;