import { Navbar, Services, Transactions ,Welcome , Footer } from './componets'
  
function App() {
 
  return (
    <>
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions/>
      <Footer/>
     
    </div>
    </>
  )
}

export default App
