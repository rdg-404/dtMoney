import styled from "styled-components";

export const Container = styled.div `

    margin-top: 4rem;

    table {

      width: 100%;
      border-spacing: 0 0.5rem; //muito usado em tabelas

      th {
        color: var(--text-body);
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
      }

      td{
        padding: 1rem 2rem;
        border: 0;
        background: var(--shape);
        color: var(--text-body);
        border-radius: 0.25rem;

        &:first-child {
            color: var(--text-title);
        }


        //pega classe criada la no arquivo index
        &.deposito {
            color: var(--green);
        }

        &.saida {
            color: var(--red);
        }
      }
    }

    
`;