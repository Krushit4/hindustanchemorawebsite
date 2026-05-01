import { Chat } from './chat'
import { FileExplorer } from './file-explorer'
import { Header } from './header'
import { Horizontal, Vertical } from '@/components/layout/panels'
import { Logs } from './logs'
import { Preview } from './preview'
import { TabContent, TabItem } from '@/components/tabs'
import { Welcome } from '@/components/modals/welcome'
import { cookies } from 'next/headers'
import { getHorizontal, getVertical } from '@/components/layout/sizing'
import { hideBanner } from '@/app/actions'

export default async function Page() {
  const store = await cookies()
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">Coming Soon.</h1>
    </div>
  )
}
