import * as Yup from 'yup';

const expenseValidationSchema = Yup.object({
    name: Yup.string().min(3, "Expense name must be at least 3 characters long").required('Expense name is required'),
    amount: Yup.number().required("Expense amount is required").positive("Expense amount must be greater than zero"),
    date: Yup.date().required("Expense date is required").max(new Date(), "Selected date is in the future"),
    category: Yup.string().required("Expense category is required")
  })

  export default expenseValidationSchema