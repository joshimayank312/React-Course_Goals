import React from "react";
// import styled from "styled-components"; // styled-components is used to give unique className
import styles from "./Button.module.css"; // react css module also used to give unique className by simply changing name from 'Button.css' to  'Button.module.css'.

// // This css specified like this bcoz here we are using styled-components
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }
//   $:focus {
//     outline: none;
//   }

//   $:hover,
//   $:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
