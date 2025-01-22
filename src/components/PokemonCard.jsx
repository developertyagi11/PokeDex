export default function PokemonCard({ pokemon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      <img
        src={pokemon.image || "/placeholder.svg"}
        alt={pokemon.name}
        className="w-32 h-32 mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-center capitalize">
        {pokemon.name}
      </h2>
      <p className="text-center text-gray-600">
        #{pokemon.id.toString().padStart(3, "0")}
      </p>
    </div>
  );
}
