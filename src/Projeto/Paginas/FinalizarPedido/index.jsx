<form className="needs-validation">
    <div className="my-3">
        <div className="form-check">
            <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required />
            <label className="form-check-label" for="credit">Credit card</label>
        </div>
        <div className="form-check">
            <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
            <label className="form-check-label" for="debit">Debit card</label>
        </div>
        <div className="form-check">
            <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
            <label className="form-check-label" for="paypal">PayPal</label>
        </div>

        <hr className="my-4" />

        <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>



    </div >
</form>
