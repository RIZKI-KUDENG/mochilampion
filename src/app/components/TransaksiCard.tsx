interface props {
  nama: string;
  harga: number;
}
export default function TransaksiCard({ nama, harga }: props) {
  return (
    <button className="bg-black text-white rounded-lg p-3 shadow hover:scale-105 transition">
      <div className="font-semibold">{nama}</div>
      <div className="text-sm text-white">
        Rp {harga.toLocaleString("id-ID")}
      </div>
    </button>
  );
}
