import React from 'react';

const SearchBar = ({ textoBusca1, setTextoBusca1 }) => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Control type="text" value={textoBusca} onChange={textoBuscaMudou} placeholder="Buscar por produto..." />

            </Form.Group>
        </Form>
    );
}

export default SearchBar
