import styled from 'styled-components'

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction};
    justify-content: ${({justify}) => justify};
    align-items: ${({alignItems}) => alignItems};
    flex-wrap: ${({wrap}) => wrap};
    width: 100%;
    // height: 100%;
`

export const Wrapper = styled.div`
    // background-color: #284089;
    // display: flex;
    // flex-direction: column;
    width: 100vw;
    // height: 100vh;
    justify-content: center;
    align-items: center;
    margin-top: 2em;

    .input{
        width: 350px;
    }
    .card{
        width: 300px;
        padding: 10px;
        margin-top: 2em;
        background-color: #284089;
        color: white;
        font-weight: bold;
    }

    .delete{
        position: absolute;
        padding: 10px;
        margin-left: 25em;
        margin-top: 3em;
    }

    @media (max-width: 414px){
        .input{
            width: 250px;
        }
        .card{
            width: 250px;
        }
        .delete{
            margin-left: 20em;
        }
    }
    @media (max-width: 375px){
        .input{
            width: 220px;
        }
        .card{
            width: 220px;
        }
        .delete{
            margin-left: 20em;
        }
    }
`

