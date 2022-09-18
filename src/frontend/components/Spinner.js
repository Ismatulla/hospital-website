import FadeLoader from 'react-spinners/FadeLoader'

function Spinner() {

  return (
    <div className="sweet-loading container mx-auto">
      <div className='flex justify-center items-center'>
        <FadeLoader
          size={150}
          height={25}
          width={5}
          loading={true}
          display="block"
          color='#00FFFF'
        />
      </div>
    </div>
  );
}

export default Spinner;