import Link from 'next/link'
import Head from 'next/head'
import  Button  from '../components/Button';
import { useRouter } from 'next/router'

const Main = ( ) => {
  const router = useRouter()
  function navigate() {
    router.push('/')
  }
  return (
    <div>
      
      <Button
        onClick={navigate}
        title="My stores"
      />
    </div>
  )
}


// function Main () {
//     return (
        
//         <>
//         <Head>
//         <title>First Post</title>
//       </Head>
//         <h1>My stores</h1>
//         <h2>
//           <Link href="/">
//             <a>stores</a>
//           </Link>
//         </h2>
//       </>
//      )}

export default Main



// const Center = ({ price, title, link }) => {
//   const router = useRouter()
//   function navigate() {
//     router.push(link)
//   }
//   return (
//     <div>
//       <p className="text-4xl xl:text-5xl font-bold tracking-widest leading-none">{title}</p>
//       <p className="py-6 tracking-wide">FROM <span>${price}</span></p>
//       <Button
//         onClick={navigate}
//         title="Shop Now"
//       />
//     </div>
//   )
// }

// export default Center

      