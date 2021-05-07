import Head from 'next/head'

import Link from 'next/link'

export default function Home() {
    return (
        <h1 className="title">
        {'   '}
        <Link href="/subhome/index">
          <a>stores</a>
        </Link>
        {'    '}
        <Link href="/subhome/index">
          <a>this page!</a>
        </Link>
      </h1>
    )
  }
