import styled from 'styled-components';

const StyledButton = styled.button`
        border: 1px solid rgba(0, 0, 0, 0.23);
        padding: 5px 15px;
        color: rgba(0, 0, 0, 0.87);
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.75;
        border-radius: 4px;
        letter-spacing: 0.02857em;
        box-shadow: none;
        background-color: #fff;
        &[disabled]{
            color: rgba(0, 0, 0, 0.26);
            border: 1px solid rgba(0, 0, 0, 0.12);
            opacity: .5;
            &.contained{
                color: rgba(0, 0, 0, 0.26);
                box-shadow: none;
                background-color: rgba(0, 0, 0, 0.12);
                cursor: default;
                pointer-events: none;
            }
        }
        &.contained{border:none;}
        &.primary{
            color: #1976d2;
            border: 1px solid rgba(25, 118, 210, 0.5);
            &.contained{
                color: #fff;
                background-color: #1976d2;
            }
        }
        &.secondary{
            color: rgb(220, 0, 78);
            border: 1px solid rgba(220, 0, 78, 0.5);
            &.contained{
                color: #fff;
                background-color: rgb(220, 0, 78);
            }
        }
`;

export default StyledButton;