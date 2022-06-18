import PageHead from '../components/PageHead'
import Readme from '../readme.mdx'

export default function index() {
  const meta = {
    title: 'Next JS and Tailwind Starter',
    description:
      'Starting point with a layout, sitemap creator and some other stuff',
  }
  return (
    <>
      <PageHead meta={meta} />
      <Readme />
    </>
  )
}
