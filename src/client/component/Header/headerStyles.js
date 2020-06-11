import styled from 'styled-components';

const HeaderContainer = styled.div`

`;

const NotificationWrapper = styled.div`

`;

const SectionHeader = styled.div`
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    background: #232176;
    .text-left{
        text-align: left;
    }
    .text-center{
        text-align: center;
    }
    .text-right{
        text-align: right;
    }
    .header-fist-right, .header-second-right {
        padding: 10px 15px 0;
        ul{
            li{
                display: inline-block;
                .phon-icon{
                    vertical-align: text-top;
                }
            }
        }
    }
`;

export {
    HeaderContainer,
    NotificationWrapper,
    SectionHeader
};