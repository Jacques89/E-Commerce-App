import FormField from '../form-field/form-field.component'

const BillingDetailsFields = () => {
    return (
        <>
            <FormField name='name' label='Name' type='text' placeholder='John Doe' required />
            <FormField
                name='email'
                label='Email'
                type='email'
                placeholder='ex.ample@example.com'
                required
            />
            <FormField
                name='address'
                label='Address'
                type='text'
                placeholder='123 Example Street'
                required
            />
            <FormField name='city' label='City' type='text' placeholder='e.g Berlin' required />
            <FormField name='state' label='State' type='text' placeholder='e.g Berlin' required />
            <FormField
                name='postcode'
                label='Postcode'
                type='text'
                placeholder='e.g 10432'
                required
            />
        </>
    )
}

export default BillingDetailsFields
