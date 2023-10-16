import styled from 'styled-components'


export const DataWrapper = styled.div`
  display: inline-block;
  border: 1px solid ${props => props.theme.palette.black};
  overflow-wrap: anywhere;
  padding: ${props => props.theme.spacing.size4};
  width: ${props => props.theme.spacing.size34};
`
