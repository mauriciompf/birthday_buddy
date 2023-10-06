export default function People({ data }) {
  const displayPeople = data.map((person) => {
    const { id, name, age, image } = person;
    return (
      <div className="flex items-center gap-4" key={id}>
        <div>
          <img
            className="w-[75px] aspect-square object-cover rounded-full"
            src={image}
            alt={name}
          />
        </div>
        <p className="grid text-2xl">
          <span className="font-semibold">{name}</span>
          <span className="text-base text-gray-600">{age} years</span>
        </p>
      </div>
    );
  });

  return (
    <>
      <h1 className="text-4xl font-bold mb-8">{data.length} Birthdays Today</h1>
      <div className="grid gap-4">{displayPeople}</div>
    </>
  );
}
