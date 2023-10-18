'use client'
import React, { useEffect, useState } from "react"
import Purchases from '../../components/Purchases/index'
import { toErrorWithMessage } from '@/utils/toErrorWithMessage';
import cleanPurchaseDescriptions from "@/utils/cleanPurchaseDescriptions";

type STATES = 'idle' | 'loading' | 'success' | 'error'

const statuses: Record<STATES, STATES>  = {
  idle: 'idle',
  loading: 'loading',
  success: 'success',
  error: 'error'
}

const PurchasesPage = (): any => {
  const [purchases, setPurchases] = useState([])
  const [status, setStatus] = useState<STATES>('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    const getPurchases = async () => {
      try {
        setStatus(statuses.loading)
        const res = await fetch('/api/purchases')
        const data = await res.json()
        setPurchases(cleanPurchaseDescriptions(data));
        setStatus(statuses.success)
      } catch(err) {
        setStatus(statuses.error)
        setError(toErrorWithMessage(err).message)
      }
    }
    getPurchases()
  }, [])

  if (status === 'idle')  {
    return null;
  }

  if (status === 'loading') {
    return <div>Loading</div>
  }

  if (status === 'error') {
    return <div>Error: {error}</div>
  }

  if (status === 'success') {
    return <Purchases purchases={purchases} />
  }
}



export default PurchasesPage