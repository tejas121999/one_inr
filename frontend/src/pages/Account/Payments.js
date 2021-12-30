import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import PartnerPaymentHistory from './tabContent/PartnerPaymentHistory';
import VendorPaymentHistory from './tabContent/VendorPaymentHistory';

const Payments = () => {
  const [key, setKey] = React.useState('vendor_payment_history');

  return (
    <div>
      <br />
      <be />
      <br />
      <br />
      <div className="card">
        <div
          style={{
            display: 'flex',
            padding: '2px',
            justifyContent: 'space-betwee n',
          }}
        >
          <p
            style={{
              textAlign: 'left',
              fontWeight: 'bold',
              margin: '20px',
              marginLeft: '20px',
            }}
          >
            STARTER PAGE
          </p>
        </div>
      </div>
      <div className='payment'>
        <div className='white-box'>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey='vendor_payment_history' title='Vendor Payment History'>
              <VendorPaymentHistory />
            </Tab>
            <Tab eventKey='partner_payment_history' title='Partner Payment History'>
              <PartnerPaymentHistory />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Payments
