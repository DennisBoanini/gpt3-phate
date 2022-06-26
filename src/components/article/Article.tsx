// @flow
import * as React from 'react';
import './article.scss';

type Props = {
    imgUrl: string;
    date: string;
    title: string;
};
export const Article = (props: Props) => {
    return (
        <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-img">
                <img src={props.imgUrl} alt="blog"/>
            </div>
            <div className="gpt3__blog-container_article-content">
                <div>
                    <p>{props.date}</p>
                    <h3>{props.title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    );
};
