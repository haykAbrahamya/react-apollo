import styled from "styled-components"

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

export const PageTitle = styled.div`
  font-size: 24px;  
`

export const Loader = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`

export const PostsListContainer = styled.div`
  display: flex;
  width: 100%;  
  margin-top: 40px;
  flex-direction: column;
  align-items: center;
`

export const PostsList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  height: 208px;
`

export const PostItem = styled.div`
  border: 2px solid green;
  text-align: center;
  padding: 20px;
  border-radius: 7px;
  width: 200px;
  height: 50px;
  overflow: auto;
`

export const PaginationContainer = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

export const PaginationButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const PaginationButton = styled.div`
  display: flex;
  width: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  height: 40px;
  background: mediumpurple;
  color: #fff;
  transition: background 0.3s ease;

  &.disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  &:hover {
    background: rebeccapurple;
  }
`