export default function LoginPage(){
    return(
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-lg bg-red-400 p-8 rounded shadow">
                <h1 className="text-2xl font-bold mb-4 text-center">
                    Login Admin/Kasir Mochi Lampion</h1>
                <div className="space-y-4">
                    <input type="email" placeholder="Email"
                    className="w-full py-2 px-4 border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <input type="password" placeholder="Password"
                    className="w-full py-2 px-4 border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                </div>
                <button className="w-full py-2 px-4 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700">Login</button>
            </div>
        </div>
    )
}

