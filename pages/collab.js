import Link from 'next/link'
import Head from 'next/head'
import  Button  from '../components/Button';
import { useRouter } from 'next/router'

const CollabButton = ( ) => {
  const router = useRouter()
  function navigate() {
    router.push('/notice')
  }
  return (
    // <div>
      <div className="bg-yellow-200 p-3 pb-5 smpb-3 ">
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
        <h10>My Collaborators</h10>
        <h1>My Collaborators 1</h1>
        <h1>My Collaborators 2</h1>
        <h1>My Collaborators 3</h1>
        <h2>
        <CollabButton />
          {/* <Link href="/notice">
            <a>Invite !</a>
          </Link> */}
        </h2>
      </>
     )}
export default Collab

      