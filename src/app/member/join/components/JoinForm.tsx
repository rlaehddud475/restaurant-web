'use client'
import React from 'react'
import styled from 'styled-components'
import { Input } from '@/app/global/components/FormComponents'
import {
  MdRadioButtonUnchecked,
  MdRadioButtonChecked,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
} from 'react-icons/md'
const StyledForm = styled.form``
const JoinForm = ({ form, onClick, onChange }) => {
  return (
    <>
      <StyledForm autoCapitalize="off">
        <input
          type="hidden"
          name="gender"
          value={form?.gender ?? ''}
          onChange={onChange}
        />
        <Input
          type="text"
          name="email"
          placeholder="이메일"
          color="dark"
          value={form?.email ?? ''}
          onChange={onChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="비밀번호"
          color="dark"
          value={form?.password ?? ''}
          onChange={onChange}
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="비밀번호 확인"
          color="dark"
          value={form?.confirmPassword ?? ''}
          onChange={onChange}
        />
        <Input
          type="text"
          name="name"
          placeholder="이름"
          color="dark"
          value={form?.name ?? ''}
          onChange={onChange}
        />
        <Input
          type="text"
          name="mobile"
          placeholder="전화번호"
          color="dark"
          value={form?.mobile ?? ''}
          onChange={onChange}
        />
        <div className="address-row">
          <Input
            type="text"
            name="zipcode"
            placeholder="우편번호"
            color="dark"
            value={form?.zipcode ?? ''}
            onChange={onChange}
          />
          <button type="button">주소찾기</button>
        </div>
        <Input
          type="text"
          name="address"
          placeholder="주소"
          color="dark"
          value={form?.address ?? ''}
          onChange={onChange}
        />
        <Input
          type="text"
          name="addressSub"
          placeholder="상세주소"
          color="dark"
          value={form?.addressSub ?? ''}
          onChange={onChange}
        />
        <div className="gender">
          <span onClick={() => onClick('gender', 'FEMALE')}>
            {form?.gender === 'FEMALE' ? (
              <MdRadioButtonChecked />
            ) : (
              <MdRadioButtonUnchecked />
            )}
            {''}
            여성
          </span>
          <span onClick={() => onClick('gender', 'MALE')}>
            {form?.gender === 'MALE' ? (
              <MdRadioButtonChecked />
            ) : (
              <MdRadioButtonUnchecked />
            )}
            {''}
            남성
          </span>
        </div>
      </StyledForm>
    </>
  )
}
export default React.memo(JoinForm)
