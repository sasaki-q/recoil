import { RecoilRoot } from 'recoil'
import { Counter } from '@/components/'

function App() {
  return (
    <RecoilRoot>
      <div className='h-screen w-screen flex justify-center items-center'>
        <Counter />
      </div>
    </RecoilRoot>
  )
}

export default App
