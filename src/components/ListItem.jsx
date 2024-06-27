export default function ListItem({name, description, price, available}) {
  return (
    <div className="flex flex-col sm:min-h-14 sm:flex-row sm:items-center sm:justify-between mt-2 bg-slate-200 hover:bg-slate-300 transition rounded p-2">
        <div className="min-w-[70%]">
            <p className="font-semibold">{name}</p>
            <p className="text-slate-500 text-sm">{description}</p>
        </div>

        <div className="w-full sm:text-center">R$ {price}</div>
        <div className="w-full sm:text-center">{available}</div>
    </div>
  );
}
