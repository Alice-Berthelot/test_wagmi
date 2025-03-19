'use client'

import DecrementCounter from '@/components/decrementcounter'
import IncrementCounter from '@/components/incrementcounter'
import ReadCounter from '@/components/readcounter'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <section className='p-6 flex flex-col gap-4'>
      <div className='p-4 rounded-lg bg-neutral-900 max-w-max'>
        <h2 className='text-lg font-bold pb-2'>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div className='p-4 rounded-lg bg-neutral-900 max-w-max'>
        <h2 className='text-lg font-bold pb-2'>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
      <div className='p-8 self-center rounded-lg max-w-max bg-white/80 text-neutral-900'>
      <h2 className='text-lg font-bold pb-2'>Counter</h2>
      <ReadCounter />
      <IncrementCounter />
      <DecrementCounter />
      </div>
    </section>
  )
}

export default App
