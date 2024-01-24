export interface HeroCardProps {
  hero_name: string;
  id: any;
  hero_role: string;
  hero_specially: string;
}

export default function HeroCard(props: HeroCardProps) {
  const { id, hero_name, hero_role, hero_specially } = props;

  return (
    <>
      <div className="bg-white p-6 rounded-md shadow-md" key={id}>
        <h2 className="text-xl font-bold mb-2">Name: {hero_name}</h2>
        <p className="text-gray-600">Role: {hero_role}</p>
        <p className="text-gray-600">Speciality: {hero_specially}</p>
      </div>
    </>
  );
}
