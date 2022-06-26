// @flow
import * as React from 'react';
import './brand.scss';
import { atlassian, dropbox, google, shopify, slack } from "./import";

type Props = {

};
export const Brand = (props: Props) => {
    return (
        <div className="gpt3__brand section__padding">
            <div>
                <img src={google} alt="google"/>
            </div>
            <div>
                <img src={slack} alt="slack"/>
            </div>
            <div>
                <img src={atlassian} alt="atlassian"/>
            </div>
            <div>
                <img src={dropbox} alt="dropbox"/>
            </div>
            <div>
                <img src={shopify} alt="shopify"/>
            </div>
        </div>
    );
};
