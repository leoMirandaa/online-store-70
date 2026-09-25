import { useState } from "react";

function Admin() {
  // const [state, setState] = useState(initialValue);
  const [couponCode, setCouponCode] = useState("")
  const [couponDiscount, setCouponDiscount] = useState(0)
  const [coupons, setCoupons] = useState([])

  function saveCoupon() {
    console.log(couponCode);
    console.log(couponDiscount);

    const newCoupon = {
      code: couponCode,
      discount: couponDiscount
    }

    setCoupons([...coupons, newCoupon])

    setCouponCode("")
    setCouponDiscount(0)
  }

  return (
    <div>
      <h1>Store Administration</h1>

      <div className="d-flex gap-4">
        <section className="w-50">
          <h3>Add Products</h3>
        </section>

        <section className="w-50">
          <h3>Add Coupons</h3>

          <div>
            <div className="card w-100">
              <div className="card-body text-start">

                <div className="mb-3">
                  <label className="form-label">Code</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={couponCode} 
                    onChange={(event)=>setCouponCode(event.target.value)} 
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" >Discount</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    value={couponDiscount}
                    onChange={(event)=>setCouponDiscount(event.target.value)}
                  />
                </div>

                <div className="text-center">
                  <button className="btn btn-dark btn-sm" onClick={saveCoupon}>Save Coupon</button>
                </div>
              </div>
            </div>

            <div className="my-3">
              <h4>Coupons List:</h4>

              <ul className="list-group text-start">
                {
                  coupons.map(coupon => (
                    <li key={coupon.code} className="list-group-item">{coupon.code}, {coupon.discount}%</li>
                  ))
                }
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Admin;