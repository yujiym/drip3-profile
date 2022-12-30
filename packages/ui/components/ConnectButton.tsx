'use client'
import { Orbis } from '@orbisclub/orbis-sdk'

let orbis = new Orbis()

export default function ConnectButton() {
  const handleConnect = async (): Promise<void> => {
    let res = await orbis.connect_v2({
      chain: 'ethereum',
      lit: true
    })
    console.log(res)
  }

  return <button onClick={() => handleConnect()}>Connect</button>
}
