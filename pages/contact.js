import PageHead from '../components/PageHead'
import * as Config from '../_siteConfig'

export default function Contact() {
  const meta = {
    title: 'Contact Us',
    description: `Contact info for ${Config.businessName}`,
  }
  return (
    <div>
      <PageHead meta={meta} />
      <div>
        <h1>Contact Us</h1>

        <address>
          <p>
            {Config.businessName}
            <br />
            {Config.streetAddress}
            <br />
            {Config.city}, {Config.state} {Config.zip}
            <br />
            Phone: <a href={`tel:${Config.phone}`}>{Config.phone}</a>
          </p>
          <p>
            Hours: {Config.hours}
            <br />
            email: <a href={`mailto:${Config.email}`}>{Config.email}</a>
          </p>
        </address>
      </div>
    </div>
  )
}
