import React from 'react';

type Member = {
  name: string;
  credentials: string;
  title: string;
  organization: string;
  email: string;
};

const members: Member[] = [
  {
    name: 'Adrienne Jennings',
    credentials: 'Ph.D., BCBA-D, LBA (NY)',
    title: 'Assistant Professor; Behavior Consultant',
    organization: 'Daemen University; Boys and Girls Clubs of Buffalo',
    email: 'ajenning@daemen.edu',
  },
  {
    name: 'Mahin Para-Cremer',
    credentials: 'M.Ed., BCBA, LBA (KS, WI)',
    title: 'Director of Clinical Quality and Outcomes',
    organization: 'Autism Learning Partners',
    email: 'mparacremer@gmail.com',
  },
  {
    name: 'Tim Courtney',
    credentials: 'DBA, BCBA',
    title: 'CEO',
    organization: 'Children\'s Autism Center',
    email: 'timcourtney@mac.com',
  },
  {
    name: 'Kelly King',
    credentials: 'M.Ed., BCBA, LBS (PA)',
    title: 'AI Solutions & Innovation',
    organization: 'CentralReach',
    email: 'kelly.king@centralreach.com',
  },
  {
    name: 'Mariana Del Rio',
    credentials: 'M.Ed, BCBA, LBA (MI)',
    title: 'Doctoral Student in Behavior Analysis',
    organization: 'Western Michigan University',
    email: 'mariana.delrio@wmich.edu',
  },
  {
    name: 'Beth Garrison',
    credentials: 'PhD, BCBA, LBS (PA), LBA(VA/NY)',
    title: 'AI Consultant',
    organization: 'Shaping Development, LLC',
    email: 'shapingdevelopment@gmail.com',
  },
  {
    name: 'Andrea Murray',
    credentials: 'PhD, BCBA-D, LBA (TX)',
    title: 'Assistant Academic Program Director, Applied Behavior Analysis',
    organization: 'Capella University',
    email: 'andrea.murray@capella.edu',
  },
  {
    name: 'Sara Peck',
    credentials: 'PhD, BCBA-D',
    title: 'Assistant Professor',
    organization: 'Western New England University',
    email: 'sara.peck1@wne.edu',
  },
  {
    name: 'Kwadwo Britwum',
    credentials: 'PhD, BCBA',
    title: 'Assistant Professor, Assistant Director of Applied Behavior Analysis Programs',
    organization: 'Mount St Mary\'s University',
    email: 'k.o.britwum@msmary.edu',
  },
  {
    name: 'Anna Plessas',
    credentials: 'BPsych(Hons), MEd, BCBA, MSc, PGDipPracPsych, PhD',
    title: 'Co-Founder of Behavioural Health New Zealand',
    organization: 'Vice-President for Monorodi not-for-profit Association, Athens Greece',
    email: 'anna@behavioural-health.com',
  },
  {
    name: 'Jennifer Collado',
    credentials: 'MS, BCBA, LBA (WA), CHC',
    title: 'Director of Clinical Quality',
    organization: 'Centria Autism',
    email: 'jennifer.collado@centriahealthcare.com',
  },
  {
    name: 'Bethany Ramos',
    credentials: 'M.Ed, BCBA',
    title: 'Owner',
    organization: 'Spectrum ABA, Co-Founder Shaping AI Summit',
    email: 'BethanyBCBA@socialspectrumaba.com',
  },
  {
    name: 'Jennifer Hamrick',
    credentials: 'PhD, BCBA-D, LBA (TX)',
    title: 'Assistant Professor, ABA Program Coordinator, Director',
    organization: 'Texas Tech University, Burkhart Center for Autism Education & Research',
    email: 'jennifer.hamrick@ttu.edu',
  },
  {
    name: 'Ellie Kazemi',
    credentials: 'Ph.D, BCBA-D',
    title: 'Co-Founder & CEO of Transform VXR, Professor & Director of AI/VXR Initiatives',
    organization: 'CSUN',
    email: 'ellie.kazemi@csun.edu',
  },
];

export default function MembersPage() {
  return (
    <main id="main-content" className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral dark:text-light mb-4">Our Members</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the dedicated professionals who are shaping the future of AI in Applied Behavior Analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-neutral-700"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                      {member.name}
                    </h2>
                    <p className="text-accent text-sm font-medium mt-1">
                      {member.credentials}
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {member.title}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {member.organization}
                    </p>
                  </div>
                  
                  <div className="pt-2 mt-2 border-t border-gray-100 dark:border-neutral-700">
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-sm text-accent hover:underline flex items-center"
                      aria-label={`Email ${member.name}`}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
