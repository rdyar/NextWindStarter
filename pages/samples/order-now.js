import PageHead from '../../components/PageHead'

export default function OrderNow() {
  const meta = {
    title: 'Your title here',
    description: 'your desc here',
  }

  return (
    <>
      <PageHead meta={meta} />
      <div className="mx-auto mt-12 flex flex-wrap justify-center">
        {/* card start */}
        <div className="m-4 flex w-[340px] flex-col rounded-xl border-8 border-orange-100 bg-white p-6 text-center shadow-md">
          <div className="flex-1">
            <h1 className="text-center text-2xl font-semibold text-gray-700">
              Simple Order System
            </h1>
            <p className="text-sm">
              <i>aka the SOS</i>
            </p>
            <ul className="my-6">
              <li className="my-4">Simple web based online ordering system</li>
              <li className="my-4">Cropping preview</li>
              <li className="my-4">
                Works on any device: PC, Mac, phones and tablets
              </li>
              <li className="my-4">
                Delivery options for USPS and UPS Next Day
              </li>
            </ul>
          </div>
          <hr />
          <div>
            <a className="btn-primary mt-8 block" href="#" target="_blank">
              Order Now
            </a>
          </div>
        </div>
        {/* card end  */}
      </div>
    </>
  )
}
