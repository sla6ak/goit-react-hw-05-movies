import styled from "@emotion/styled";

export const SerchForm = styled.form` 
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
`

export const SerchButton = styled.button`
background-color: transparent;
width: 20px;
height: 20px;
border: none;
opacity: 0.7;
:hover {
    opacity: 1;
  }
`

export const InputWord = styled.input`
height: 30px;
display: flex;
margin-left: 10px;
padding: 2px 10px;
border-radius: 7px;
box-shadow: 1px 1px 10px rgb(220, 187, 228);
color: rgb(123, 59, 207);
font: inherit;`

export const BoxFilms = styled.ul` 
 display: grid;
/* max-width: calc(100vw - 48px); */
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
grid-gap: 16px;
margin-top: 30px;
margin-bottom: 20px;
padding: 0;
list-style: none;
margin-left: auto;
margin-right: auto;
min-height: 100%;
max-width: 1400px;
`

export const FilmICard = styled.li` 
 display: flex;
 flex-direction: column;
  height: 100%;
width: 100%;
border-radius: 5px;
overflow: hidden;
background-color:#bdb9a6;
  box-shadow: -2px -2px 7px rgb(109, 109, 109);
transition: transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
:hover {
    transform: scale(1.03);
  }
`
export const Poster = styled.img` 
  height: 85%;
  width: 100%;
`

export const FilmTitle = styled.h2` 
color: #333;
height: 30px;
font-size:20px;
padding: 10px
`