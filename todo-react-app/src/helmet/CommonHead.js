import React from 'react';
import { Helmet } from 'react-helmet';

const CommonHead = (props) => {
    let {imageURL, title} = props;


    console.log(imageURL + " / " + title);

    return (
            <Helmet>
                <meta charSet='utf-8' />
                
                <meta id="meta_type" property="og:type" content="website" />
                <meta id="meta_url" property="og:url" content="https://www.papastalk.co.kr/" />
                <meta id="meta_title" property="og:title" content={title} />
                <meta id="meta_image" property="og:image" content={imageURL} />
                <meta id="meta_description" property="og:description" content="파파스톡은 육아하는 아빠들의 공감 커뮤니티 입니다." />
                <meta id="meta_site_name" property="og:site_name" content="" />
                <meta id="meta_locale" property="og:locale" content="ko_KR" />
                <meta id="meta_img_width" property="og:image:width" content="800" />
                <meta id="meta_img_height" property="og:image:height" content="800" />

                <title>{title}</title>
            </Helmet>
    );
};

CommonHead.defaultProps = {
    title : "헬맷 기본",
    imageURL : ""
  }

export default CommonHead;