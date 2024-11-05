import action from './action'

const Page = () => {
  return (
    <form action={action}>
      <button type='submit'>redirect to /</button>
    </form>
  )
}

export default Page
