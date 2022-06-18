import PageHead from '../components/PageHead'
import Readme from '../readme.mdx'

export default function index() {
  const meta = {
    title: 'hi',
    description: 'there',
  }
  return (
    <>
      <PageHead />
      <Readme />
    </>
  )
}
