export default function Produk() {
  return (
    <div className="text-center">
      <h1 className="text-2xl">Manajemen Produk</h1>
      <div className="mb-6 space-y-4">
        <input
          type="text"
          className="w-full p-3 border border-gray-900 rounded-md"
          placeholder="nama produk"
        />
        <input
          type="number"
          className="w-full p-3 border border-gray-900 rounded-md"
          placeholder="harga (Rp)"
        />
      </div>
      <button className="bg-black text-white rounded-lg p-3 shadow hover:scale-105 transition">
        Tambah Produk
      </button>
    </div>
  );
}
