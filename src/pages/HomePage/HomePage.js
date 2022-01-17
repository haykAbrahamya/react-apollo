import React, { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"
import cx from 'classnames'

import { POSTS_LIST } from "../../apollo/requests"
import { postsListSelector } from "../../apollo/selectors"
import * as S from './HomePage.styles'

const limit = 10

export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pagesCount, setPagesCount] = useState(1)

  const { loading, error, data, meta } = postsListSelector(useQuery(POSTS_LIST, {
    variables: { options: { paginate: { page: currentPage, limit: limit } } },
    // fetchPolicy: "no-cache",
    // pollInterval: 3000
  }))
    
  console.log({ loading, error, data })

  useEffect(() => {
    if (loading) return

    setPagesCount(meta.totalCount / limit)
  }, [data, loading])  

  return (
    <S.PageContainer>
      <S.PageTitle>
        React - Apollo
      </S.PageTitle>
      <S.PostsListContainer>
        <S.PostsList>
          {
            loading
              ? <S.Loader>Loading...</S.Loader>
              : data.map(post => (
                <S.PostItem key={post.id}>
                  { post.title }
                </S.PostItem>
              ))
          }
        </S.PostsList>
        <S.PaginationContainer>
          <div>
            { currentPage } / { pagesCount }
          </div>
          <S.PaginationButtonsContainer>
            <S.PaginationButton
              className={cx({ disabled: currentPage === 1 })}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Prev
            </S.PaginationButton>
            <S.PaginationButton
              className={cx({ disabled: currentPage === pagesCount })}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </S.PaginationButton>
          </S.PaginationButtonsContainer>
        </S.PaginationContainer>
      </S.PostsListContainer>
    </S.PageContainer>
  )
}