import dayjs from 'dayjs';
import { getDonations } from '../../../../services/queries/donations';
import { useQuery } from '@tanstack/react-query';

const Donations = () => {
  const { data: donations = [] } = useQuery({
    queryKey: ['donations'],
    queryFn: getDonations,
  })

  if (!donations.length) {
    return (
      <div className='flex flex-col items-center justify-center gap-4 h-[300px] text-gray-200 text-4xl font-bold'>
          <h1>
            Nenhuma doação encontrada
          </h1>
          <span>{`:/`}</span>
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-3'>
        {donations.map(({ name, email, amount, date }, index) => (
          <div
            className='flex items-center justify-between py-3 px-4 bg-indigo-950/60 rounded-lg shadow-md'
            key={index}
          >
            <div className='flex flex-col gap-1'>
              <h2 className='text-indigo-400'>
                {name}
              </h2>
              <span className='text-indigo-100'>
                {email}
              </span>
            </div>
            <div className='flex flex-col gap-1 items-end'>
              <span className='text-indigo-400'>
                R$ {amount}
              </span>
              <small className='text-indigo-100'>
                {dayjs(date).format('DD/MM/YYYY')}
              </small>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Donations;
