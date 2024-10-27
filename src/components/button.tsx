import styled from "styled-components"
const StyledButton = styled.button`
background-color:salmon;
font-size:32px;
color:white;
Border-radius:10px;
Border:none;
padding:1rem;
`

function Button(){
    return(
        <StyledButton>Log in</StyledButton>
    )
}
export default Button