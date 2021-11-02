import React, {useState, useEffect} from 'react';
import Home from './Home';
import About from './About';

export default function App({pageProps}){
    const [page, setPage] = useState(pageProps);
    useEffect(() => {
        window.onpopstate = event => { //브라우저에서 뒤로가기 버튼을 클릭하면 onpopstate 함수가 호출된다.
            setPage(event.state);
        }
    }, [])
    function onChangePage(e) { //특정 페이지로 이동하는 버튼의 이벤트 처리 함수다.
        const newPage = e.target.dataset.page;
        window.history.pushState(newPage, '', `/${newPage}`); //pushState 메서드를 통해 브라우저에게 주소가 변경됐다는 것을 알린다.
        setPage(newPage);
    }
    const PageComponent = page === 'home' ? Home : About; // page 상탯값에 따라 렌더링할 페이지의 컴포넌트가 결정된다.
    return (
        <div className="container">
            <button data-page="home" onClick={onChangePage}>
                Home
            </button>
            <button data-page="about" onClick={onChangePage}>
                About
            </button>
            <PageComponent />
        </div>
    )
}