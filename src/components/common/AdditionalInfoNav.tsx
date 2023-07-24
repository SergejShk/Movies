import { NavLink, useLocation } from "react-router-dom";
import { styled } from "styled-components";

const AdditionalInfoNav = () => {
    const location = useLocation()

    return (
        <AdditionalInfoNavStyled>
            <Title>Additional information</Title>

            <ul>
                <li>
                    <NavLinkStyled
                        to="cast"
                        state={{from: location.state.from}}
                    >
                        Cast
                    </NavLinkStyled>
                </li>
                <li>
                    <NavLinkStyled
                        to="reviews"
                        state={{from: location.state.from}}
                    >
                        Reviews
                    </NavLinkStyled>
                </li>
            </ul>
        </AdditionalInfoNavStyled>
    );
}

export default AdditionalInfoNav;

const AdditionalInfoNavStyled = styled.div`
    margin-top: 15px;  
`

const Title = styled.h3`
    font-size: 26px;
`

const NavLinkStyled = styled(NavLink)`
    color: #534f4f;
    font-size: 22px;

    &.active,
    &:hover {
        color: #f05858;
    }
`