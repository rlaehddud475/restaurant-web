'use client'
import React from 'react'
import { styled } from 'styled-components'
const StyledFooter = styled.footer``
const Footer = () => {
  return (
    <StyledFooter>
      <div className="layout-width">사이트 하단 영역</div>
    </StyledFooter>
  )
}
export default React.memo(Footer)
