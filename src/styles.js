import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    height:100vh;
    background-color: #232a2c;
    display:flex;
    justify-content: center;
    align-items: center;
`
export const Display = styled.div`
    width: 20%;
    background-color: #232a2c;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 2px #6aa5e4;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0px 0px 25px rgba(106, 169, 228, 0.45);
`

export const Row = styled.div`
    margin-top: 5px;
    gap: 5px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`