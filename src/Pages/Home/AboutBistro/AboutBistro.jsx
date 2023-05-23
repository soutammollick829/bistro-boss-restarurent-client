import background from '../../../assets/home/chef-service.jpg';

const AboutBistro = () => {
    return (
        <div className="h-96 relative w-full max-w-4xl mx-auto" style={{ backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
         }}>
            <div className='bg-white w-[700px] h-48 text-center absolute left-24 top-24 p-8'>
                <h1 className='text-4xl mb-2'>Bistro Boss</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default AboutBistro;