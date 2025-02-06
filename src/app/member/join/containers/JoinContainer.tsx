'use client'
import JoinForm from '../components/JoinForm'
import { useSearchParams } from 'next/navigation'
import React, { useState, useCallback, useActionState } from 'react'
import { processJoin } from '../../services/actions'
const JoinContainer = () => {
  const searchParms = useSearchParams()
  const actionState = useActionState(processJoin, searchParms)
  const [form, setForm] = useState({})
  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }))
  }, [])
  const onClick = useCallback((field, value) => {
    setForm((form) => ({ ...form, [field]: value }))
  }, [])
  const onSelectDate = useCallback((date) => {
    setForm((form) => ({
      ...form,
      birthDt: date,
    }))
  }, [])
  return (
    <JoinForm
      actionState={actionState}
      form={form}
      onChange={onChange}
      onClick={onClick}
      onSelectDate={onSelectDate}
    />
  )
}
export default React.memo(JoinContainer)
