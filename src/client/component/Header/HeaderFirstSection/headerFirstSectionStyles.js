import styled, {css} from 'styled-components';

const FirstHeaderSection = styled.div`
${props => props.width && css` display:flex;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        margin: 10px;
        color: #fff;
        font-family: DINPro-Medium;
        opacity: .7;
        font-size: 14px;
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
    
    `
    }

`;

export default FirstHeaderSection;

