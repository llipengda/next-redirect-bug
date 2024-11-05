import Link from 'next/link'

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <>
      page / <br />
      <Link href='/test-a'>test-a</Link> <br />
      <Link href='/test-b'>test-b</Link>
    </>
  )
}
