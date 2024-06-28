import React from 'react'
import ParentComponent from '../sample/ParentComponent'
import CompoentA from '../sample/CompoentA'
import CartPage from '../sample/CartPage'
import SampleMemo from '../sample/SampleMemo'
import FormikValidation from './FormikValidation'
import SimpleForm from './SimpleForm'
// import FormValidation from './FormValidation'
const FormValidation = React.lazy(() => import("./FormValidation"));

const Home = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-3">
       Home Component
      <br />
    <div className='w-1/3 flex justify-center p-5 border gap-2'>
     
      {/* <CompoentA /> */}
      {/* <CartPage /> */}
      {/* <ParentComponent /> */}
      {/* <SampleMemo /> */}
      {/* <React.Suspense fallback={<p>Loadding...</p>}>
        <FormValidation />
      </React.Suspense> */}
      {/* <FormikValidation /> */}
      <SimpleForm />
    </div>
    </div>
  )
}

export default Home
