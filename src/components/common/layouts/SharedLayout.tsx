import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const SharedLayout = () => {
    return (
        <SharedLayoutStyled>
            <HeaderStyled>
                <NavLinkStyled to={'/'}>Home</NavLinkStyled>
                <NavLinkStyled to={'/movies'}>Movies</NavLinkStyled>
            </HeaderStyled>

            <MainStyled>
                <Outlet/>
            </MainStyled>
        </SharedLayoutStyled>
    );
}

export default SharedLayout;

const SharedLayoutStyled = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

const HeaderStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    padding: 15px;
    border-bottom: 2px solid #534f4f;
`

const NavLinkStyled = styled(NavLink)`
    font-size: 30px;
    font-weight: 700;
    color: #534f4f;

    &.active {
        color: #f05858;
    }
`

const MainStyled = styled.div`
    width: 100%;
    height: 100%;
    padding: 15px;
`