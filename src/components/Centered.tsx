import { FunctionComponent } from 'react'

const Centered: FunctionComponent = ({ children }) => (
  <div className="h-full w-full flex items-center justify-center text-center">
    {children}
  </div>
)

export default Centered
