import Link from 'next/link'
import Head from 'next/head'
import  Button  from '../components/Button';
import { useRouter } from 'next/router'
import Image from '../components/Image'
const CollabButton = ( ) => {
  const router = useRouter()
  function navigate() {
    router.push('/notice')
  }
  return (
    // <div>
      <div className="sm-yellow-300 p-1 pb-1 smpb-2 ">
        {/* // p-6 pb-10 smpb-6
        // flex lg:flex-row flex-col"> */}
      <Button
        onClick={navigate}
        title="Invite !"
      />
    </div>
  )
}

function Collab () {
    return (     
        <>
        <Head>
        <title>First Post</title>
      </Head>
      <h1 className="text-5xl font-light">My Recent Collaborators</h1>
      
      <div className="border-b py-20" >
        <div className="flex items-center hidden md:flex">
          <Image className="w-32 m-0" src="/users/david.png" alt='item 1' />
          <p className="m-0 pl-10 text-gray-600 w-60">
            David</p>
            <p className="m-0 pl-10 text-gray-600 w-60">
            <CollabButton /></p> 
        </div> 
        
        <div className="flex items-center hidden md:flex">
          <Image className="w-32 m-0" src="/users/yuxin.png" alt='item 1' />                
          <p className="m-0 pl-10 text-gray-600 w-60">
            Yuxin </p>
            <p className="m-0 pl-10 text-gray-600 w-60">
            <CollabButton /></p>
        </div>

        <div className="flex items-center hidden md:flex">
          <Image className="w-32 m-0" src="/users/zekun.png" alt='item 1' />                
          <p className="m-0 pl-10 text-gray-600 w-60">
            Zekun </p>
          <p className="m-0 pl-10 text-gray-600 w-60">
            <CollabButton /></p>
        </div>

        <div className="flex items-center hidden md:flex">
          <Image className="w-32 m-0" src="/users/karan.png" alt='item 1' />                
          <p className="m-0 pl-10 text-gray-600 w-60">
            Karan </p>
          <p className="m-0 pl-10 text-gray-600 w-60">
            <CollabButton /></p>
        </div>
    </div>

        {/* <h10>My Collaborators</h10>
        <h1>My Collaborators 1</h1>
        <h1>My Collaborators 2</h1>
        <h1>My Collaborators 3</h1> */}
        <h2>
        {/* <CollabButton /> */}
          {/* <Link href="/notice">
            <a>Invite !</a>
          </Link> */}
        </h2>
      </>
     )}
export default Collab

      