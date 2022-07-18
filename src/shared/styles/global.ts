import styled, { createGlobalStyle } from 'styled-components';
import { COLORS } from '../../helper/Constants';

// Global Styles to the site and HTML tags
export default createGlobalStyle`
		*{
			margin: 0;
			padding: 0;
			box-sizing: border-box;
			font-family: 'Poppins', sans-serif;
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			scroll-behavior: smooth !important;
    }
		body{
			background-color: ${COLORS.primary};
		}
		h1{
			font-weight: 700;
			font-size: 40px;
		}
		h2{
			font-weight: 700;
			font-size: 32px;
		}
		h3{
			font-weight: 700;
			font-size: 24px;
		}
		h4{
			font-weight: 700;
			font-size: 16px;
		}
		b{
			font-weight: 700;
		}
		em{
			display: block;
			font-style: italic;
		}
		ul{
			list-style-type: none;
		}
		button{
			text-transform: uppercase;
			font-weight: 700;
			padding: 8px 12px;
			border: 4px solid ${COLORS.third} ;
			border-radius: 8px;
			cursor: pointer;
			background-color: none;
			color: ${COLORS.third};
			transition: 0.2s;
			&:hover{
				background-color: ${COLORS.third};
				color: ${COLORS.white};
			}
			&:active{
				background-color: ${COLORS.secondary};
				color: ${COLORS.third};
			}
		}

`;
// Global component Container: Just a container with a padding adjusted to the screen, helps to normalize the views.
export const Container = styled.div`
  padding: 2vh 5vw;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: auto;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  align-items: baseline;
`;

export const Spacer = styled.div`
  flex-grow: 100;
`;
