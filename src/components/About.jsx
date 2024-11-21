import React from 'react'

function About() {

    const teamMembers = [
        { name: 'Vyas', role: 'Frontend Developer', description: 'Specializes in creating responsive user interfaces.' },
        { name: 'Tulsi', role: 'Frontend Developer', description: 'Focused on optimizing user experience.' },
        { name: 'Rishabh', role: 'Frontend Developer', description: 'Expert in UI/UX design and implementation.' },
      ];

 
      return (
        <div className="about-us text-white">
          <h1 className="text-center text-4xl font-bold my-8">About Us</h1>
          <div className='flex items-center justify-center'>
          <p className="text-center w-[50%] text-lg mb-12 ml-10">
            We are <strong>Endator</strong>, a dedicated team of developers who built <strong>Movie Hub</strong>. 
            Our goal is to deliver the best movie browsing experience with top-notch frontend and backend expertise.
          </p>
          </div>
          
          <div className="team-members grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card border rounded-lg p-6 mt-10 shadow-md hover:shadow-lg hover:bg-zinc-700 duration-500 transition-shadow">
                <h2 className="text-2xl font-semibold">{member.name}</h2>
                <p className="text-gray-500">{member.role}</p>
                <p className="text-gray-400 mt-2 ">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default About