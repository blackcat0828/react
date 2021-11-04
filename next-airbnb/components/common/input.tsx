import React from "react";
import styled, {css} from "styled-components";
import palette from "../../styles/palette";
import {useSelector} from "../../store";


type InputContainerProps = {
  iconExist: boolean;
  isValid: boolean;
  useValidation: boolean;
}

const Container = styled.div<InputContainerProps>`
  label {
    span {
      display: block;
      margin-bottom: 8px;
    }
  }
  input {
    position: relative;
    width: 100%;
    height: 46px;
    padding: ${({ iconExist }) => (iconExist ? "0 44px 0 11px " : "0 11px")};
    border: 1px solid ${palette.gray_eb};
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    & ::placeholder {
      color: ${palette.gray_76};
    }
    & :focus {
      border-color: ${palette.dark_cyan};
    }
  }
  .input-icon-wrapper {
      position: absolute;
      top: 0;
      right: 11px;
      height: 46px;
      display: flex;
      align-items: center;
  }
  svg {
    position: absolute;
    right: 11px;
    height: 46px;
  }
  .input-error-message {
    margin-top: 8px;
    font-weight: 600;
    font-size: 14px;
    color: ${palette.tawny};
  }
  ${({ useValidation, isValid }) =>
    useValidation &&
    !isValid &&
    css`
      input {
        background-color: ${palette.snow};
        border-color: ${palette.orange};
        & :focus {
          border-color: ${palette.orange};
        }
      }
    `}
  ${({ useValidation, isValid }) =>
    useValidation &&
    isValid &&
    css`
      input {
        border-color: ${palette.dark_cyan};
      }
    `}

`;

//React.InputHTMLAttributes<HTMLInputElement>는 <input> 태그가 가지는 속성들에 대한 타입입니다.
// extends를 사용하여 IProps는 <input> 태그가 가지는 속성을 확장하여 사용하게 됩니다.
//그리고 icon?: JSX.Element;는 타입이 JSX 엘리먼트인 icon 값을 받지 않을 수도 undefined일 수도 있다는 것을 의미합니다.
//결국 icon?:JSX.Element;   icon: JSX.Element | undefined; 는 같은 코드입니다. 하지만 의미상으로
//icon?:JSX.Element는 icon 값을 사용하지 않아도 된다로 사용합니다.
//icon: JSX.Element | undefined;는 icon을 받는데 undefined일 수 있다로 사용합니다.
//<Input icon={undefined} /> 사용하는 의미상 다르기 때문에 어떤 방식을 사용해도 코드상으로는 문제가 없습니다.
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: JSX.Element;
    isValid?: boolean;
    useValidation?: boolean;
    errorMessage?: string;
}

const Input: React.FC<IProps> = ({icon,
  isValid = false,
  useValidation = true,
  errorMessage,
  ...props}) => {
    const validateMode = useSelector((state) => state.common.validateMode);
    return (
        <Container 
          iconExist={!!icon}
          isValid={isValid}
          useValidation={validateMode && useValidation}>
            <input {...props} />
            {icon}
            {useValidation && validateMode && !isValid && errorMessage && (
              <p className="input-error=message">{errorMessage}</p>
            )}
        </Container>
    );
};

export default Input;