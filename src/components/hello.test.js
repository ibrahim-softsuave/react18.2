import {render,screen} from '@testing-library/react'
import Hello from '../components/hello'

test('render given by name',()=>{
render(<Hello name="ibrahim"/>)
let ele = screen.getByText(/hello, ibrahim/i)
expect(ele).toBeInTheDocument()
})