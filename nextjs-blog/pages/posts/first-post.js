import Head from 'next/head'
import Link from 'next/link'

export default function FirstPost() {
    return (
    <>
        <Head>
        <title>테스트 페이지 A</title>
        <link rel="icon" href="/favicon.ico" />
        <meta id="meta_type" property="og:type" content="website" />
                <meta id="meta_url" property="og:url" content="https://www.papastalk.co.kr/" />
                <meta id="meta_title" property="og:title" content="넥트스 테스트B" />
                <meta id="meta_image" property="og:image" content="https://img.papastalk.co.kr/mainbanner/m01.jpg" />
                <meta id="meta_description" property="og:description" content="파파스톡은 육아하는 아빠들의 공감 커뮤니티 입니다." />
                <meta id="meta_site_name" property="og:site_name" content="" />
                <meta id="meta_locale" property="og:locale" content="ko_KR" />
                <meta id="meta_img_width" property="og:image:width" content="800" />
                <meta id="meta_img_height" property="og:image:height" content="800" />
      </Head>
        <h1>First Post</h1>
        <h2>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </h2>
    
    </>
    )
  }