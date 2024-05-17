import { useIsConnectionRestored } from '@tonconnect/ui-react'

export const EntrypointPage = () => {
    const connectionRestored = useIsConnectionRestored()

    if (!connectionRestored) {
        return <div>connection not Restored </div>
    }
    return <div>connection Restored </div>
}
