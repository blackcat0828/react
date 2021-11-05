import React from "react";
import SignUpModal from "./SignUpModal";
import LoginModal from "./LoginModal";
import {useSelector, RootState} from "../../store";


interface IProps {
    closeModal: () => void;
}

const AuthModal: React.FC<IProps> = ({closeModal}) => {
    const authMode = useSelector((state: RootState) => state.auth.authMode);
    
    return (
        <div>
            {authMode === "signup" && <SignUpModal closeModal={closeModal} />}
            {authMode === "login" && <LoginModal closeModal={closeModal} />}
        </div>
    )
}

export default AuthModal;