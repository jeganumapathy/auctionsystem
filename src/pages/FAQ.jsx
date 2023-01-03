import React from "react";

const faqData = [{
  id: 0,
  name: 'A simple question?',
  ans: '<strong><u>Absolutely!</u></strong>  We work with top payment companies which guarantees  your  safety and  security. All billing information is stored on our payment processing partner.',
}, {
  id: 1,
  name: 'A question   that  is longer then the previous one?',
  ans: ' <strong><u>Yes, it is possible!</u></strong> You can cancel your subscription anytime in  your  account. Once the subscription is  cancelled, you will not be charged next month.',
}, {
  id: 2,
  name: 'A simple question?',
  ans: 'Currently, we only offer monthly subscription. You can upgrade or cancel your monthly  account at any time with no further obligation.',
}, {
  id: 3,
  name: 'A simple question',
  ans: '/Currently, we only offer monthly subscription. You can upgrade or cancel your monthly  account at any time with no further obligation',
}, {
  id: 4,
  name: 'A simple question',
  ans: '/Currently, we only offer monthly subscription. You can upgrade or cancel your monthly  account at any time with no further obligation',
}];


const FAQ = () => {
  const listItems = faqData.map(data =>
    <div key={data.id} className="col-md-6 col-lg-4 mb-4">
      <h6 className="mb-3 text-primary"><i className="far fa-paper-plane text-primary pe-2"></i> {data.name}</h6>
      <p>
        {data.ans}
      </p>
    </div>
  );

  return (
    <div>
      <section>
        <h3 className="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
        <p className="text-center mb-5">
          Find the answers for the most frequently asked questions below
        </p>
        <div className="row">
          {listItems}
        </div>
      </section>
    </div>
  );
}
export default FAQ;
