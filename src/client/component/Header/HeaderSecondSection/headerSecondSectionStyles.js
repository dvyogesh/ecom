import styled from 'styled-components';

const SecondHeaderSection = styled.div`
    display:flex;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    img{
        width: 100px;
    }
    a{
        font-family: 'DINPro-Regular';
        font-size: 14px;
        color:#fff;
    }
    .upload-prescription {
        padding: 7px 10px;
        vertical-align: middle;
        background-color: #fff;
        max-width: 250px;
        margin: 0 auto;
        svg{
            vertical-align: middle;
            margin: 0px 10px;
            width: 24px;
            height: 24px;
            display: inline-block;
        }
    }

    @media (max-width: 768px) {
        flex-flow: row wrap;
        .header-fist-left{
            order:1;
            flex: 0 0 50%;
        }
        .header-second-mid{
            order:3;
            flex: 0 0 100%;
            margin-top: 5px;
        }
        .header-second-right{
            order:2;
            padding:0px;
            flex: 0 0 50%;
        }
    }
`;

export default SecondHeaderSection;

