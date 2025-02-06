'use client'
import JoinForm from '../components/JoinForm'
import React, { useState, useCallback, useActionState } from 'react'
import { processJoin } from '../../services/actions'
const JoinContainer = () => {
  const actionState = useActionState(processJoin)
  const [form, setForm] = useState({})
  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }))
  }, [])
  return <JoinForm actionState={actionState} />
}
export default React.memo(JoinContainer)
