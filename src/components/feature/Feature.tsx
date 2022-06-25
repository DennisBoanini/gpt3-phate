// @flow
import * as React from 'react';
import './feature.scss';

type Props = {
    title: string;
    text: string;
};
export const Feature = ({ title, text }: Props) => {
    return (
        <div className="gpt3__features-container__feature">
            <div className="gpt3__features-container__feature-title">
                <div />
                <h1>{title}</h1>
            </div>
            <div className="gpt3__features-container__feature-text">
                <p>{text}</p>
            </div>
        </div>
    );
};
