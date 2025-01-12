import React from 'react';

const Team = () => {
  return (
    <div className='px-9'>
      <div className='text-2xl font-semibold'>Team</div>
      <div className='py-5'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam dolore possimus magni voluptates, ex sunt alias porro ullam eum explicabo! Labore itaque aliquam molestiae voluptatibus! Itaque, explicabo! Sed, quaerat!
        </p>
      </div>

      <div className="space-y-5 bg-white">
        <div className='bg-blue-100 rounded-lg h-50'>
          <div className='flex px-3 py-3'>
            <div>
              <div className='w-20'>
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
              <div className='font-medium'>Elina Cury</div>
              <div className='text-gray-500 text-xs'>Designation Here</div>
            </div>
            <div className='px-5 flex items-center font-light'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi aliquam repudiandae autem maiores dignissimos voluptate molestias alias, debitis, aperiam voluptatum totam corporis vero doloremque quae ex aut quaerat temporibus officia!
              </p>
            </div>
          </div>
        </div>

        <div className='bg-blue-100 rounded-lg h-50'>
          <div className='flex px-3 py-3'>
            <div>
              <div className='w-20'>
                <img
                  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
              <div className='font-medium'>James</div>
              <div className='text-gray-500 text-xs'>Designation Here</div>
            </div>
            <div className='px-5 flex items-center font-light'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolores facilis labore delectus ad, alias amet qui sequi assumenda ipsa perferendis, impedit rem sint nihil. Et corrupti repellendus nobis labore!</p>
            </div>
          </div>
        </div>

        <div className='bg-blue-100 rounded-lg h-50'>
          <div className='flex px-3 py-3'>
            <div>
              <div className='w-20'>
                <img
                  src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
              <div className='font-medium'>Astiyo</div>
              <div className='text-gray-500 text-xs'>Designation Here</div>
            </div>
            <div className='px-5 flex items-center font-light'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, voluptatibus, blanditiis repudiandae dolorem corrupti exercitationem consequuntur, illum optio unde enim doloremque fugiat rem perspiciatis minus? Commodi doloribus explicabo reiciendis id.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
