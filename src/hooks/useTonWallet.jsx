import { useTonWallet } from '@tonconnect/ui-react'

export const Wallet = () => {
    const wallet = useTonWallet()

    return (
        wallet && (
            <div>
                <div>Connected wallet: {wallet.name}</div>
                <div>Device: {wallet.device.appName}</div>
            </div>
        )
    )
}
