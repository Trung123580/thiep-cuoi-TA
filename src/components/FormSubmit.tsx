import { useState } from 'react'
import Button from './Button'
import FormInput from './FormInput'
import FormRadio from './FormRadio'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db } from '../fireBase-config'

const FormSubmit = () => {
  const [status, setStatus] = useState('') // Thành công hoặc lỗi

  const handleSubmitForm = async (data: any) => {
    try {
      const userDoc = doc(db, 'db', '120938891283091209')
      const { name, sdt, radio, textarea } = data
      const payloadData = { name, sdt, radio, textarea }
      await updateDoc(userDoc, { data: arrayUnion(payloadData) })
      setStatus('cảm ơn bạn đã phản hồi')
    } catch (error: any) {
      console.error('Firebase update error:', error)
      setStatus('Có lỗi xảy ra, vui lòng thử lại.')
    }
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('')
    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get('name')
    const sdt = formData.get('sdt')
    const radio = formData.get('radio')
    const textarea = formData.get('textarea')

    const response = await handleSubmitForm({
      name,
      sdt,
      radio,
      textarea,
    })
    console.log(response)

    console.log({ name, sdt, radio, textarea })
    ;(e.target as HTMLFormElement).reset()
  }
  return (
    <form onSubmit={handleSubmit} className='w-full space-y-5 capitalize'>
      <FormInput label='họ tên của bạn' type='text' name='name' required />
      <FormInput label='số điện thoại' type='number' name='sdt' required />
      <FormRadio
        label='bạn là khách mời của ai ?'
        name='radio'
        options={['cô dâu', 'chú rể']}
      />
      <div className='w-full flex items-end'>
        <textarea
          name='textarea'
          placeholder='gửi lời chúc mừng cho cô dâu và chú rể'
          className='flex-1 outline-none border-b max-h-[100px] min-h-[40px] placeholder:capitalize  text-black placeholder:text-black'></textarea>
        <Button
          type='submit'
          className='h-max bg-primary w-max px-4 py-1 rounded-lg capitalize'>
          {status ? status : 'phản hồi'}
        </Button>
      </div>
    </form>
  )
}

export default FormSubmit
