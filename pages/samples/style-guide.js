import Link from 'next/link'
import FAQs from '../../components/FAQs'
import Gallery from '../../components/Gallery'
import PageHead from '../../components/PageHead'

export default function StyleGuide() {
  return (
    <>
      <PageHead />
      <div>
        <h1>
          Not <i>Just</i> Next and Tailwind, NextWind
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          voluptatum excepturi itaque nemo debitis, velit similique quis aliquam
          quia facilis, sit officia minus? Magni temporibus maiores non rerum
          dolore. Quisquam, delectus cumque quae repellendus repudiandae maxime
          error veniam quo exercitationem, quos inventore assumenda quasi vitae.
        </p>
        <h2>H2 Core Services</h2>
        <p>
          Check out the pricing card type thing{' '}
          <Link href="/samples/order-now">here</Link>
        </p>
        <h3>H3 Store Hours</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae
          quaerat eveniet architecto veniam id modi, dolor eos animi assumenda
          doloribus! Obcaecati quidem deserunt magnam vero accusantium minima in
          possimus totam hic, necessitatibus a.
        </p>
        <ul>
          <li>lorem2</li>
          <li>lorem2</li>
          <li>lorem2</li>
          <li>lorem2</li>
          <li>lorem2</li>
        </ul>

        <div className="card-container">
          <div className="card-350">
            <h2>Card-350 class</h2>
            <p>max-widht of 350px, amet consectetur adipisicing elit.</p>
          </div>
          <div className="card-350">
            <h2>Cool Thing 1</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit sdggdfg
              dfgdfh dhhrth45n fgfasd asdfgh.
            </p>
          </div>
          <div className="card-350">
            <h2>Cool Thing 1</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="card-350">
            <h2>Cool Thing 1</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <h3>FAQs Component using Summary/Detail HTML elements.</h3>
        <p>See the FAQs component - questions are in an array of objects.</p>
        <FAQs />
        <h3>Simple Image Gallery Component</h3>
        <Gallery />
      </div>
    </>
  )
}
