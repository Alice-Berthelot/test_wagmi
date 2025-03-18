import { useReadContract } from 'wagmi'
import { wagmiContractConfig } from '../contracts'

export default function ReadCounter() {
  const { data: count } = useReadContract({
    address: wagmiContractConfig.address,
    abi: wagmiContractConfig.abi, 
    functionName: 'count',
  })

  return (
    <div>Realtime counter: {count?.toString()}</div>
  )
}