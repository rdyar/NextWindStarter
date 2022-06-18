import ReactMarkdown from 'react-markdown'

const faqs = [
  {
    q: 'Can I use Markdown *inside* a FAQ?',
    a: '**Yes!** [here is a link](https://www.google.com)',
  },
  {
    q: 'What is this?',
    a: 'just another starting point for making a website. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi facilis iure numquam. Ut sit ratione unde. Obcaecati dicta expedita rerum rem minima culpa sequi necessitatibus omnis, reiciendis cum, est esse maiores libero, tenetur beatae. Possimus praesentium nisi quia, sit dolorem iusto enim? In?',
  },
]

const FAQs = () => {
  return (
    <div className="my-12">
      {faqs.map((faq, index) => {
        return (
          <div key={index} className="mt-0">
            <details className="rounded border border-neutral-200 bg-neutral-100">
              <summary className="flex cursor-pointer items-center pl-4 pt-4 font-medium">
                <ReactMarkdown>{faq.q}</ReactMarkdown>
              </summary>
              <div className="text-md border-t border-neutral-300 bg-neutral-50 pb-4 pl-4 pt-4 pl-12 leading-normal">
                <ReactMarkdown>{faq.a}</ReactMarkdown>
              </div>
            </details>
          </div>
        )
      })}
    </div>
  )
}

export default FAQs
