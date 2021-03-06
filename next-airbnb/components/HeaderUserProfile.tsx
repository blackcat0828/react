import React, {useState} from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch } from "react-redux";
import Link from "next/link";
import HamburgerIcon from "../public/static/svg/header/hamburger.svg";
import { logoutAPI } from "../lib/api/auth";
import { userActions } from "../store/user";
import { useSelector } from "../store";

const HeaderUserProfile: React.FC = () => {
    //* 유저 메뉴 열고, 닫힘 여부
    const [isUsermenuOpened, setIsUsermenuOpened] = useState(false);
    //useSelector는 비교를 할 때 객체의 주소를 비교하게 된다. 유저 정보가 변경되어
    //user가 변경된다면 객체가 새로 만들어져 user 객체를 불러온 모든 컴포넌트는 리랜더될 것이다.
    //useProfileImage와 같이 원시 타입으로 사용한다면 리렌더를 방지할 수 있다.
    const userProfileImage = useSelector((state) => state.user.profileImage);
    
    const dispatch = useDispatch();

    //* 로그아웃 하기
    const logout = async () => {
        try {
          await logoutAPI();
          dispatch(userActions.initUser());
        }catch (e){
          console.log(e.message);
        }
      }

    return (
        <OutsideClickHandler onOutsideClick={()=>{
            if (isUsermenuOpened){
              setIsUsermenuOpened(false);
            }
          }}>
            <button className="header-user-profile" type="button"
              onClick={() => setIsUsermenuOpened(!isUsermenuOpened)}
            >
              <HamburgerIcon />
              <img src={userProfileImage} className="header-user-profile-image" alt="" />
            </button>
            {isUsermenuOpened && (
              <ul className="header-usermenu">
                <li>숙소 관리</li>
                <Link href="/room/register/building">
                  <a role="presentation" onClick={()=>{setIsUsermenuOpened(false)}}>
                    <li>숙소 등록하기</li>
                  </a>
                </Link>
                <div className="header-usermenu-divider" />
                <li role="presentation" onClick={logout}>
                  로그아웃
                </li>
              </ul>
            )}
          </OutsideClickHandler>
    )
}

export default HeaderUserProfile;