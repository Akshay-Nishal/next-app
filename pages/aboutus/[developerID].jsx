import { useRouter } from 'next/router';

const teamMembers = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' }
];

const Developer = () => {
  const router = useRouter();
  const id  = router.query.developerID;
  console.log(id)

  // Find the team member by ID
  const member = teamMembers.find(member => member.id === parseInt(id));

  if (!member) {
    return <p>Developer doesn't exist</p>;
  }

  return (
    <div>
      <p>{member.name} - {member.role}</p>
    </div>
  );
};

export default Developer;
