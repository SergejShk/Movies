import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const SearchBar = () => {
      const navigate = useNavigate();
      const location = useLocation();
      const [searchQuery, setSearchQquery] = useState('');
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.trim();
        setSearchQquery(query);
      };
    
      const onHandleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate(`?q=${searchQuery}`, {
          state: location.state,
        });
      };

    return (
        <Form onSubmit={onHandleSubmit}>
            <Input
                type="text"
                name="query"
                value={searchQuery}
                autoComplete="off"
                placeholder="Movie search"
                onChange={handleChange}
            />
            <Button type="submit">
                Search
            </Button>
      </Form>
    );
}

export default SearchBar;

const Form = styled.form`
    margin: 10px 0;
    display: flex;
    justify-content: center;
`

const Input = styled.input`
    font-size: 24px;
    padding: 8px;
    border-radius: 10px;
    margin-right: 10px;
    background-color: #dee3e3;
    color: #534f4f;
    outline: none;

    &:focus {
      outline: none;
      border-color: #ea4545; ;
    }
`

const Button = styled.button`
    font-size: 24px;
    padding: 8px;
    border-radius: 10px;
    background-color: rgb(240, 88, 88);
    cursor: pointer;

    &:hover {
        background-color: #ea4545; 
    }
`