import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

`;

export const Header= styled.div`
    display: flex;
    align-items: center;

    span {
        font-size: 20px;
        margin-left: 24px;
        font-weight: bold;
    }

    img {
        height: 64px;
    }

    a {
        width: 260px;
        height: 60px;
        margin-left: auto;
        background: #e02841;
        border: 0;
        border-radius: 8px;
        color: #FFF;
        font-weight: bold;
        margin-top: 0px;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        font-size:18px;
        line-height: 60px;
    }

    button {
        margin-top: 0px;
        height: 60px;
        width: 60px;
        border-radius: 4px;
        border: 1px solid #dcdce6;
        background: transparent;
        margin-left: 16px;
        transition: border-color 0.2s;

        &:hover {
            border-color: #999;
        }
    }

`;

export const Dashboard = styled.div`
  
    margin-top: 80px;
    margin-bottom: 24px;


    h1 {
        margin-bottom: 24px;
    }
    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 24px;
        list-style: none;

        li {
            background: #FFF;
            padding: 24px;
            border-radius: 15px;
            position: relative;

            button {
                border-radius: 4px;
                background: transparent;
                margin-left: 16px;
                transition: opacity 0.2s;
                cursor: pointer;
               

                &:hover {
                    opacity: 0.8;
                }
            }

            strong {
               text-align: center;
                display:block;
                margin-bottom: 16px;
                color: #41414d;
                

                &+strong {
                    margin-top: 32px;
                }
            }

            p {
                text-align: center;
                margin-bottom: 16px;
                color: #737380;
                line-height: 21px;
                font-size: 16px;

            }
        }


    }


`;