import { ABI_COUNTER } from './abi';
import { Address } from 'viem';

export const wagmiContractConfig = {
  address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS  as Address, 
  abi: ABI_COUNTER,
} as const;
