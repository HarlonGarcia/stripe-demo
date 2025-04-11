const fakeDonations = [
  {
    id: 1,
    name: 'Lucas',
    email: 'lucas@gmail.com',
    amount: 100,
    date: '11/04/2025',
  },
  {
    id: 2,
    name: 'Ana',
    email: 'ana@gmail.com',
    amount: 200,
    date: '11/04/2025',
  },
  {
    id: 3,
    name: 'Marcos',
    email: 'marcos@gmail.com',
    amount: 150,
    date: '11/04/2025',
  },
];

const Donations = () => {
  return (
    <div className='flex flex-col gap-3'>
        {fakeDonations.map(({ id, name, email, amount, date }) => (
          <div
            className='flex items-center justify-between py-3 px-4 bg-indigo-950/60 rounded-lg shadow-md'
            key={id}
          >
            <div className='flex flex-col gap-1'>
              <h2 key={id} className='text-indigo-400'>
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
                {date}
              </small>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Donations;
