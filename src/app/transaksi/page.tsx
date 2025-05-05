import TransaksiCard from "../components/TransaksiCard";




export default function Transaksi() {
  return (
    <div className="text-center">
      <h1 className="text-2xl">Transaksi</h1>
      <div className="grid grid-cols-2 gap-4 mb-6">
<TransaksiCard nama={"mochi coklat"} harga={1000}/>
<TransaksiCard nama={"mochi keju"} harga={1000}/>

      </div>
    </div>
  );
}
